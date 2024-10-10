import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import 'amfe-flexible'
const app = createApp(App)
app.use(router)
app.mount('#app')
// 使用路由器

