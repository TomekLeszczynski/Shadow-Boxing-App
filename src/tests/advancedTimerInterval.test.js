import { handleInterval } from '@/components/shadow_boxing/helpers/advancedTimerInterval.ts'

import { vi, describe, test, expect, beforeEach, afterEach } from 'vitest'

const playRingBellSoundMock = vi.fn()
const handleOnCompletedMock = vi.fn()

let mins
let secs

beforeEach(() => {
  vi.useFakeTimers()
  vi.clearAllMocks()
})
afterEach(() => {
  vi.useRealTimers()
})

describe('mocking functions', () => {
  test('if play ring bell sound function is mocked properly', () => {
    playRingBellSoundMock()
    expect(playRingBellSoundMock).toHaveBeenCalled()
  })
  test('if onCompleted handler function is mocked properly', () => {
    handleOnCompletedMock()
    expect(handleOnCompletedMock).toHaveBeenCalled()
  })
})

describe('handling timer for advanced level sessions when timer is on', () => {
  test('if secs > 0, should decrement seconds value', () => {
    // simulating Ref<number>
    mins = { value: 0 }
    secs = { value: 5 }
    handleInterval(mins, secs, handleOnCompletedMock, playRingBellSoundMock)
    vi.advanceTimersByTime(1000)
    expect(mins.value).toBe(0)
    expect(secs.value).toBe(4)
  })

  test('if mins > 0 && secs === 0, should decrement mins and set secs value to 59', () => {
    // simulating Ref<number>
    mins = { value: 1 }
    secs = { value: 0 }
    handleInterval(mins, secs, handleOnCompletedMock, playRingBellSoundMock)
    vi.advanceTimersByTime(1000)
    expect(mins.value).toBe(0)
    expect(secs.value).toBe(59)
  })
})

describe('handling timer when time is end', () => {
  test('if interval handler works when there is no ring bell sound provided', () => {
    // simulating Ref<number>
    mins = { value: 0 }
    secs = { value: 0 }
    handleInterval(mins, secs, handleOnCompletedMock)
    vi.advanceTimersByTime(1000)
    expect(secs.value).toBe(0)
    expect(handleOnCompletedMock).toHaveBeenCalled()
    expect(playRingBellSoundMock).not.toHaveBeenCalled()
  })
})
