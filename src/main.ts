import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { createVuestic } from 'vuestic-ui'
import './style/reset.scss'
import './style/iconfont.css'
import vue3GoogleLogin from 'vue3-google-login'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(createVuestic())
app.use(vue3GoogleLogin, {
    clientId:  import.meta.env.CLIENT_ID
})

app.mount('#app')
