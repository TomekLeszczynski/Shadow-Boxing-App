import { describe, test, expect } from 'vitest'

import {
  setAxisScope,
  getDetails,
} from '@/components/weight_monitor/helpers/handleMeasurements.ts'

// example of user record follows created interface
const testUserData = [
  { weight: 60, date: 'June 4, 2024 at 6:19:38 PM UTC+2' },
  { weight: 70, date: 'June 5, 2024 at 6:19:38 PM UTC+2' },
  { weight: 80, date: 'June 6, 2024 at 6:19:38 PM UTC+2' }
]

// setAxisScope test
describe("function that sets highest Y-Axis value based on user's data ", () => {
  test('if data.length > 0 should return max weight +10', () => {
    const axisYValue = setAxisScope(testUserData)
    expect(axisYValue).toBe(90)
  })
  test('if data.length <0 should return 100', () => {
    const testUserData = []
    const axisYValue = setAxisScope(testUserData)
    expect(axisYValue).toBe(100)
  })
})
// get Details test
describe('function that returns details based on users data', () => {
  test('if returns mapped weights', () => {
    const { measures } = getDetails(testUserData)
    expect(measures).toEqual([60, 70, 80])
  })
  test('if returns last measurement from the set', () => {
    const { lastMeasure } = getDetails(testUserData)
    expect(lastMeasure).toBe(80)
  })
  test('if returns penultimate value from the set', () => {
    const { previousMeasure } = getDetails(testUserData)
    expect(previousMeasure).toBe(70)
  })
  test('if progress is a result of reducing last value by penultimate', () => {
    const { progress } = getDetails(testUserData)
    expect(progress).toBe(10)
  })
  test('if returns minimal value from the set', () => {
    const { minValue } = getDetails(testUserData)
    expect(minValue).toBe(60)
  })
  test('if returns max value from the set', () => {
    const { maxValue } = getDetails(testUserData)
    expect(maxValue).toBe(80)
  })
  test('if returns average value from the set', () => {
    const { avgValue } = getDetails(testUserData)
    expect(avgValue).toBe(70)
  })
})
