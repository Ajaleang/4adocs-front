# farmatic_fe

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Instalar Bootstrap con Vue3

npm install bootstrap @popperjs/core

Abrir main.js e importarlo: 
import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap";


### vue-fontawesome
''
Instalar el paquete principal y el contenido del icono

npm i --save @fortawesome/fontawesome-svg-core

npm i --save @fortawesome/free-solid-svg-icons


Usando Vue 3.x

npm i --save @fortawesome/vue-fontawesome@prerelease

fontawesome:

npm i --save @fortawesome/free-brands-svg-icons

Luego en main.js se importa lo siguiente: 

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { library } from '@fortawesome/fontawesome-svg-core'

import { fab } from '@fortawesome/free-brands-svg-icons'

import { fas } from '@fortawesome/free-solid-svg-icons' 

library.add(fas, fab)

createApp(App)

.use(router)

.component('fa', FontAwesomeIcon)

.mount('#app')

### Instalación axios y jwt 
npm install axios

npm install jwt-decode

