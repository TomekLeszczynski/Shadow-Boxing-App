import { describe, test, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import TryAsGuest from '@/components/authorization/TryAsGuest.vue'
import { createRouter, createMemoryHistory } from 'vue-router'
import { routes } from '@/router/index.ts'
import { createTestingPinia } from '@pinia/testing'
import { useAuthStore } from '@/stores/AuthenticationStore'

describe('TryAsGuest.vue', () => {
  let router
  let authStore

  vi.mock('@/stores/AuthenticationStore', () => ({
    useAuthStore: vi.fn()
  }))

  beforeEach(() => {
    router = createRouter({
      history: createMemoryHistory(),
      routes
    })

    authStore = {
      getAccessAsAnAnonymous: vi.fn().mockResolvedValueOnce(),
      user: {
        uid: '1234'
      }
    }

    useAuthStore.mockReturnValue(authStore)
  })

  test('renders "Try As Guest" button properly', async () => {
    const wrapper = mount(TryAsGuest, {
      global: {
        plugins: [router, createTestingPinia()]
      }
    })

    await router.isReady()

    const button = wrapper.find('button')
    expect(button.exists()).toBe(true)
    expect(button.text()).toContain('Try As Guest')
  })

  test('calls getAccessAsAnAnonymous and directs to shadow-boxing view when button is clicked', async () => {
    const pushSpy = vi.spyOn(router, 'push')

    const wrapper = mount(TryAsGuest, {
      global: {
        plugins: [router, createTestingPinia()]
      }
    })

    await router.isReady()

    const button = wrapper.find('button')
    await button.trigger('click')

    expect(authStore.getAccessAsAnAnonymous).toHaveBeenCalled()
    expect(pushSpy).toHaveBeenCalledWith({ name: 'shadow-boxing', params: { userId: '1234' } })
  })

  test('navigates to shadow-boxing with "Guest" userId if user is null', async () => {
    authStore.user = null

    const pushSpy = vi.spyOn(router, 'push')

    const wrapper = mount(TryAsGuest, {
      global: {
        plugins: [router, createTestingPinia()]
      }
    })

    await router.isReady()

    const button = wrapper.find('button')
    await button.trigger('click')

    expect(authStore.getAccessAsAnAnonymous).toHaveBeenCalled()
    expect(pushSpy).toHaveBeenCalledWith({ name: 'shadow-boxing', params: { userId: 'Guest' } })
  })
})
