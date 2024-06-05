import { vi, test, describe, expect } from 'vitest'
import { changeRoute } from '@/components/shadow_boxing/helpers/changeRoute.ts'

const mockRouter = {
  push: vi.fn()
}
const routeName = 'testRoute'

describe('uses router and changes route', () => {
  test('if changes route with provided arguments', () => {
    changeRoute(mockRouter, routeName)
    expect(mockRouter.push).toHaveBeenCalledWith({ name: routeName })
  })
})
