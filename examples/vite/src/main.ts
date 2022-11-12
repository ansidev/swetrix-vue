import { createApp } from 'vue'
import Swetrix from 'swetrix-vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)

app.use(Swetrix, {
  pid: import.meta.env.VITE_SWETRIX_PROJECT_ID,
  initOptions: {
    debug: true,
  },
}).mount('#app')
