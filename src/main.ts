import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { createVuestic } from 'vuestic-ui'
import 'vuestic-ui/css'
import './style/reset.scss'
import './style/iconfont.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(createVuestic())

app.mount('#app')
