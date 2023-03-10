import { createApp } from 'vue'
import './style.css'
import router from '@/router'
import App from './App.vue'
import AppLink from '@/components/AppLink.vue'



createApp(App)
.component('AppLink', AppLink)
.use(router)
.mount('#app')
