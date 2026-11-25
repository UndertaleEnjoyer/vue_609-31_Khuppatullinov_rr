import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import persistedstate from 'pinia-plugin-persistedstate'
import router from './router'
import App from './App.vue'
const pinia = createPinia()
pinia.use(persistedstate)
createApp(App).use(pinia).use(router).mount('#app')
