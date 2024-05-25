import { createApp } from 'vue'
import App from './App.vue'

import './styles/_global.scss'
import { createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount('#app')
