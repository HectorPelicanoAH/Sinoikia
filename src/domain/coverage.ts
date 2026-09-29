export type ChecklistState = 'uncovered' | 'interested' | 'reviewed_fit' | 'confirmed'

export interface ChecklistCondition {
  id: string
  label: string
  targetQuantity: number
  confirmedQuantity: number
  critical: boolean
  state: ChecklistState
}

export function conditionCoverage(condition: ChecklistCondition): number {
  if (condition.targetQuantity <= 0) return 0
  return Math.min(Math.max(condition.confirmedQuantity / condition.targetQuantity, 0), 1)
}

export function planCoverage(conditions: ChecklistCondition[]): number {
  if (conditions.length === 0) return 0
  return conditions.reduce((total, condition) => total + conditionCoverage(condition), 0) / conditions.length
}

export function hasCriticalBlocker(conditions: ChecklistCondition[]): boolean {
  return conditions.some((condition) => condition.critical && conditionCoverage(condition) < 1)
}

export function canRecommendCoordination(
  conditions: ChecklistCondition[],
  threshold = 0.7,
): boolean {
  return planCoverage(conditions) >= threshold && !hasCriticalBlocker(conditions)
}
