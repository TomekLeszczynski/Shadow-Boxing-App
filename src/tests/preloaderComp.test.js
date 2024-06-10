/* eslint-disable no-undef */
import { render, screen, fireEvent } from '@testing-library/vue'
import { mount, flushPromises } from '@vue/test-utils'
import preloaderComp from '@/components/preloader/preloaderComp.vue'
import preloaderQuotes from '@/components/preloader/quotes.ts'

describe('Preloader', () => {
  // testing library

  describe('Skip button', () => {
    test('renders skip button', () => {
      render(preloaderComp)
      const skipButton = screen.getByRole('button', { name: /skip/i })
      expect(skipButton).toBeInTheDocument()
    })

    test('emits "skipped" event when button is clicked', async () => {
      const { emitted } = render(preloaderComp)
      const skipButton = screen.getByRole('button', { name: /skip/i })
      await fireEvent.click(skipButton)
      expect(emitted()).toHaveProperty('skipped')
    })
  })

  describe('Quote & Author Display', () => {
    test('renders quote', () => {
      const { container } = render(preloaderComp)
      const quoteDisplay = container.querySelector('#quote')
      expect(quoteDisplay).toBeInTheDocument()
    })

    test('renders author', () => {
      const { container } = render(preloaderComp)
      const authorDisplay = container.querySelector('#author')
      expect(authorDisplay).toBeInTheDocument()
    })
  })

  // vue test utils
  describe('Quotes & author display', () => {
    test('picks paired quotes and author', async () => {
      const wrapper = mount(preloaderComp)
      await flushPromises()
      const quote = wrapper.get('#quote').text().trim()
      const author = wrapper.get('#author').text().replace('~ ', '').trim()
      const isQuoteAndAuthorPairValid = preloaderQuotes.some(
        (element) => element.quote === quote && element.author === author
      )
      expect(isQuoteAndAuthorPairValid).toBe(true)
    })

    test('changes quotes and author on each mounts', async () => {
      const wrapper = mount(preloaderComp)
      await flushPromises()

      const previousQuote = wrapper.get('#quote').text().trim()
      const previousAuthor = wrapper.get('#author').text().replace('~ ', '').trim()

      wrapper.unmount()

      const newWrapper = mount(preloaderComp)
      await flushPromises()

      const newQuote = newWrapper.get('#quote').text().trim()
      const newAuthor = newWrapper.get('#author').text().replace('~ ', '').trim()

      expect(newQuote).not.toBe(previousQuote)
      expect(newAuthor).not.toBe(previousAuthor)
    })
  })
})
