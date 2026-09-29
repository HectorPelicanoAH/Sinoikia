import { describe, expect, it } from 'vitest'
import {
  canRecommendCoordination,
  conditionCoverage,
  hasCriticalBlocker,
  planCoverage,
  type ChecklistCondition,
} from '../../src/domain/coverage'

const condition = (overrides: Partial<ChecklistCondition> = {}): ChecklistCondition => ({
  id: 'condition',
  label: 'Condition',
  targetQuantity: 4,
  confirmedQuantity: 2,
  critical: false,
  state: 'reviewed_fit',
  ...overrides,
})

describe('plan coverage', () => {
  it('caps confirmed coverage between zero and one', () => {
    expect(conditionCoverage(condition({ confirmedQuantity: 8 }))).toBe(1)
    expect(conditionCoverage(condition({ confirmedQuantity: -2 }))).toBe(0)
  })

  it('averages the conditions without hiding a critical blocker', () => {
    const conditions = [
      condition({ id: 'a', confirmedQuantity: 4 }),
      condition({ id: 'b', confirmedQuantity: 4 }),
      condition({ id: 'c', confirmedQuantity: 4 }),
      condition({ id: 'd', confirmedQuantity: 0, critical: true }),
    ]

    expect(planCoverage(conditions)).toBe(0.75)
    expect(hasCriticalBlocker(conditions)).toBe(true)
    expect(canRecommendCoordination(conditions, 0.7)).toBe(false)
  })

  it('recommends human coordination only above threshold and without blockers', () => {
    const conditions = [condition({ confirmedQuantity: 4 }), condition({ confirmedQuantity: 3 })]
    expect(canRecommendCoordination(conditions, 0.8)).toBe(true)
  })
})
