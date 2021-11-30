import { createApp } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import App from './App.vue'
import router from './router'


import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

library.add(fas, fab)

createApp(App)
.use(router)
.component('fa', FontAwesomeIcon)
.mount('#app')
