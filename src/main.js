import './assets/style/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import SvgIcon from '@jamescoyle/vue-icon'

const app = createApp(App)
app.component('SvgIcon', SvgIcon)
app.use(createPinia()).use(router).directive('click-outside', clickOutside).mount('#app')
