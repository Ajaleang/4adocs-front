import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';

import Inicio from './components/Inicio.vue'
import Login from './components/Login.vue'
import SignUp from './components/SignUp.vue'
import Profile from './components/Profile.vue'

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
   
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
