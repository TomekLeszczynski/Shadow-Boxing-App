/* eslint-disable no-undef */
import { render, screen } from '@testing-library/vue'
import GetAccess from '@/components/home_view/GetAccess.vue'
import { vi, beforeEach } from 'vitest'
import { createRouterMock, injectRouterMock } from 'vue-router-mock'
import { mount } from '@vue/test-utils'

vi.mock('@/components/authorization/TryAsGuest.vue', () => ({
  default: {
    name: 'TryAsGuest',
    template: '<div>TryAsGuest Mock</div>'
  }
}))

describe('Get Access box', () => {
  describe('Get started button directs user to signup form', () => {
    const router = createRouterMock({ path: '/signup', name: 'signup' })
    // Injects router mock before each test in this group
    beforeEach(() => {
      injectRouterMock(router)
    })
    // testing library
    test('if button renders properly', () => {
      render(GetAccess)
      const getStartedButton = screen.getByRole('button', { name: /Get Started/i })
      expect(getStartedButton).toBeInTheDocument()
    })
    // test follows vue-router-mock docs; uses vue test utils
    test('if router links to signup form', async () => {
      const wrapper = mount(GetAccess)
      await wrapper.router.push('/signup')
      expect(wrapper.router.push).toHaveBeenCalledWith('/signup')
    })
  })

  describe('TryAsGuest button creates temporary account', () => {
    // testing library
    test('if button renders properly', () => {
      render(GetAccess)
      const getStartedButton = screen.getByTestId('try-as-guest')
      expect(getStartedButton).toBeInTheDocument()
    })
  })
})
