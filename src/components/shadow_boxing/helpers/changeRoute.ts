import type { Router } from 'vue-router'

export const changeRoute = (router: Router, name: string) => {
  router.push({ name: name })
}
