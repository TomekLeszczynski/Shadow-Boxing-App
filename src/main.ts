import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { firebaseApp } from './firebase/firebaseInit'

const app = createApp(App)
const pinia = createPinia()

// initialize FirebaseApp
firebaseApp

app.use(pinia)
app.use(router)

app.mount('#app')
