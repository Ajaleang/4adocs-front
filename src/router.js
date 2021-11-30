import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';

import Inicio from './components/Inicio.vue'
import Login from './components/Login.vue'
import SignUp from './components/SignUp.vue'
import Profile from './components/Profile.vue'
import Productos from './components/Productos.vue'
import Inventario from './components/Inventario.vue'
import Proveedores from './components/Proveedores.vue'
import Pedidos from './components/Pedidos.vue'
import ListaProveedores from './components/ListaProveedores.vue'

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: Inicio
  },
  {
    path: '/user/login',
    name: 'login',
    component: Login
  },
  {
    path: '/user/signup',
    name: 'signUp',
    component: SignUp
  },
  {
    path: '/user/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/producto',
    name: 'producto',
    component: Productos
  },
  {
    path: '/inventario',
    name: 'inventario',
    component: Inventario
  },
  {
    path: '/proveedores',
    name: 'proveedores',
    component: Proveedores
  },
  {
    path: '/pedidos',
    name: 'pedidos',
    component: Pedidos
  },
  {
    path: '/listaproveedores',
    name: 'listaprov',
    component: ListaProveedores
  },
   
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
