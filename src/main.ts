import './assets/style.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './service/i18n'

import {sendMail} from "@/service/global"

const app = createApp(App)

app.use(router)
app.use(i18n)

app.config.globalProperties.$sendMail = sendMail

app.mount('#app')
