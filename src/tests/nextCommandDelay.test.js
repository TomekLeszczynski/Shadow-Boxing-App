import { vi, describe, test, expect, afterEach } from 'vitest'

import { nextCommandDelay } from '@/components/shadow_boxing/helpers/nextCommandDelay.ts'

const minDelay = 3
const intensity = 6

describe('Math.random() mocking', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })
  vi.spyOn(Math, 'random').mockReturnValue(0.9)
  test('if mocking properly Math.random() method', () => {
    const randomValue = Math.random()
    expect(randomValue).toBe(0.9)
  })
})

describe('calculating delay of coming commands', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })
  test('if returns proper value', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.5)

    expect(nextCommandDelay(minDelay, intensity)).toBe(5)
  })
})
