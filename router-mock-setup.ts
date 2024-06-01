import { VueRouterMock, createRouterMock, injectRouterMock } from 'vue-router-mock'
import { config } from '@vue/test-utils'
import { beforeEach } from 'vitest'

// Create one router per test file
const router = createRouterMock()
beforeEach(() => {
  router.reset() // Reset the router state
  injectRouterMock(router)
})

// Add properties to the wrapper
config.plugins.VueWrapper.install(VueRouterMock)
