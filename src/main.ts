import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Tres from '@tresjs/core'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(Tres)
app.use(createPinia())
app.use(router)

app.mount('#app')
