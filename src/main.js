import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import VueScrollmagic from 'vue-scrollmagic'
import './assets/css/style.css'

const app = createApp(App);

app.use(VueScrollmagic)

app.use(router)

app.mount('#app')