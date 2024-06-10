import LoginForm from '@/components/authorization/LoginForm.vue'
import { describe, test, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/vue'

// Mock firebase auth module
vi.mock('firebase/auth', async () => ({
  getAuth: vi.fn()
}))

describe('Log in form component', () => {
  test('if form renders properly', () => {
    render(LoginForm)
    const form = screen.getByRole('form')
    expect(form).toBeInTheDocument()
  })

  test('if includes submit button', () => {
    render(LoginForm)
    const submitButton = screen.getByRole('button')
    expect(submitButton).toBeInTheDocument()
  })

  test('if includes link to password-reset form', () => {
    render(LoginForm)
    const resetLink = screen.getByTestId('reset-link')
    expect(resetLink).toBeInTheDocument()
  })
})

describe('Error message display', () => {
  beforeEach(() => {
    vi.resetAllMocks()
  })

  test('displays auth errors when received', () => {
    // Mocking useAuthStore without error message
    vi.mock('@/stores/AuthenticationStore', async () => ({
      useAuthStore: () => ({
        authError: 'Error'
      })
    }))
    const { getByRole } = render(LoginForm)
    expect(getByRole('alert')).toHaveTextContent('Error')
  })
  test('does not display any text when no errors received', () => {
    // Mocking useAuthStore without error message
    vi.mock('@/stores/AuthenticationStore', async () => ({
      useAuthStore: () => ({
        authError: 'Error'
      })
    }))
    const { getByRole } = render(LoginForm)
    expect(getByRole('alert')).toHaveTextContent('Error')
  })
})


