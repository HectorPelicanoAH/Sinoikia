begin;

select plan(4);

select has_schema('app_private', 'private application schema exists');
select has_table('public', 'audit_events', 'audit event table exists');
select results_eq(
  $$
    select c.relrowsecurity
    from pg_class c
    join pg_namespace n on n.oid = c.relnamespace
    where n.nspname = 'public' and c.relname = 'audit_events'
  $$,
  $$ values (true) $$,
  'RLS is enabled for audit events'
);
select table_privs_are(
  'public',
  'audit_events',
  'authenticated',
  array[]::text[],
  'authenticated users have no direct audit event privileges'
);

select * from finish();
rollback;
