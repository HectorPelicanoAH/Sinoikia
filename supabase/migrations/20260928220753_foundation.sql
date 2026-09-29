-- Sinoikia database foundation.
-- Business tables are introduced feature by feature so every exposed table can
-- ship together with explicit grants, RLS policies and allow/deny tests.

create schema if not exists app_private;

revoke all on schema app_private from public, anon, authenticated;

create type public.global_role as enum ('user', 'reviewer', 'admin');
create type public.evidence_class as enum ('declared', 'source_document', 'reviewed_fit', 'agreement');
create type public.evidence_visibility as enum ('public', 'municipal_internal', 'personal', 'sensitive');

create table public.audit_events (
  id uuid primary key default gen_random_uuid(),
  actor_id uuid references auth.users (id) on delete set null,
  action text not null check (char_length(action) between 1 and 100),
  entity_type text not null check (char_length(entity_type) between 1 and 100),
  entity_id uuid,
  entity_version integer check (entity_version is null or entity_version > 0),
  correlation_id uuid not null default gen_random_uuid(),
  metadata jsonb not null default '{}'::jsonb,
  occurred_at timestamptz not null default now()
);

comment on table public.audit_events is
  'Append-only record of privileged and editorial actions. Metadata must not contain secrets or unnecessary PII.';

alter table public.audit_events enable row level security;

revoke all on table public.audit_events from anon, authenticated;
grant select, insert on table public.audit_events to service_role;

create index audit_events_entity_idx
  on public.audit_events (entity_type, entity_id, occurred_at desc);

create index audit_events_actor_idx
  on public.audit_events (actor_id, occurred_at desc)
  where actor_id is not null;

create or replace function app_private.reject_audit_event_mutation()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  raise exception 'audit_events is append-only';
end;
$$;

revoke all on function app_private.reject_audit_event_mutation() from public, anon, authenticated;

create trigger audit_events_append_only
before update or delete on public.audit_events
for each row execute function app_private.reject_audit_event_mutation();

alter default privileges in schema public revoke all on tables from anon, authenticated;
alter default privileges in schema public revoke all on functions from public, anon, authenticated;
