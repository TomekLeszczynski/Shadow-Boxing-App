import { render, screen } from '@testing-library/vue'
import GetAccess from '@/components/home_view/GetAccess.vue'
import { vi } from 'vitest'
import { RouterLinkStub } from '@vue/test-utils'

vi.mock('@/components/authorization/TryAsGuest.vue', () => ({
  default: {
    name: 'TryAsGuest',
    template: '<div>TryAsGuest Mock</div>'
  }
}))

describe('Get Access box', () => {
  describe('Get started button', () => {
    test('renders properly', () => {
      render(GetAccess, {
        global: {
          stubs: {
            RouterLink: RouterLinkStub
          }
        }
      })
      const getStartedButton = screen.getByRole('button', { name: /Get Started/i })
      expect(getStartedButton).toBeInTheDocument()
    })
  })
})
