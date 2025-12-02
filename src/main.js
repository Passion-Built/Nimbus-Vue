import { createApp } from 'vue'
import App from './App.vue'
import PxUI from './plugin'

const app = createApp(App)

app.use(PxUI)

app.mount('#app')
