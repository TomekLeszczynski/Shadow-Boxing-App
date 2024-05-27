/**
 * Main Header
 * Description
 * Hero Box
 * Get Access buttons
 * Infinite scroll banner
 */

import { render, screen } from '@testing-library/vue'
import { describe, it, expect, vi } from 'vitest'
import { RouterLinkStub } from '@vue/test-utils'
// component import
import HomeView from './HomeView.vue'
// import HeroBox from '@/components/home_view/HeroBox.vue'
// import GetAccess from '@/components/home_view/GetAccess.vue'
// import InfiniteScrollBanner from '@/components/home_view/InfiniteScrollBanner.vue'

vi.mock('firebase/auth', () => ({
  getAuth: vi.fn(),
  onAuthStateChanged: vi.fn((auth, callback) => callback({ uid: '1234' }))
}))

vi.mock('firebase/firestore', () => ({
  getFirestore: vi.fn(),
  collection: vi.fn(),
  addDoc: vi.fn(),
  getDocs: vi.fn(),
  query: vi.fn(),
  where: vi.fn()
}))

vi.mock('firebase/storage', () => ({
  getStorage: vi.fn(),
  ref: vi.fn(),
  uploadBytesResumable: vi.fn(),
  getDownloadURL: vi.fn()
}))

describe('HomeView', () => {
  it('renders main header', () => {
    render(HomeView, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub
        }
      }
    })
    const mainHeader = screen.getByRole('heading', { level: 1 })
    expect(mainHeader).toBeDefined()
    expect(mainHeader.textContent).toBe(' Shadow Boxing Workout ')
  })
})
