import gql from "graphql-tag";
import { createRouter, createWebHashHistory } from 'vue-router';
import { ApolloClient, createHttpLink, InMemoryCache } from  '@apollo/client/core'


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
    component: Inicio,
    meta: { 
      requiresAuth: false }
  },
  {
    path: '/user/login',
    name: 'login',
    component: Login,
    meta: { 
      requiresAuth: false }
  },
  {
    path: '/user/signup',
    name: 'signUp',
    component: SignUp,
    meta: { 
      requiresAuth: false }
  },
  {
    path: '/user/profile',
    name: 'profile',
    component: Profile,
    meta: { 
      requiresAuth: false }
  },
  {
    path: '/producto',
    name: 'producto',
    component: Productos,
    meta: { 
      requiresAuth: false }
  },
  {
    path: '/inventario',
    name: 'inventario',
    component: Inventario,
    meta: { 
      requiresAuth: false}
  },
  {
    path: '/proveedores',
    name: 'proveedores',
    component: Proveedores,
    meta: { 
      requiresAuth: false }
  },
  {
    path: '/pedidos',
    name: 'pedidos',
    component: Pedidos,
    meta: { 
      requiresAuth: false }
  },
  {
    path: '/listaproveedores',
    name: 'listaprov',
    component: ListaProveedores,
    meta: { 
      requiresAuth: false }
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

const apolloClient = new ApolloClient({
  link: createHttpLink({ uri: 'https://mision-tic-api-gateway.herokuapp.com/' }),
  cache: new InMemoryCache()
})

async function isAuth() {
  if (localStorage.getItem("token_access") === null ||
localStorage.getItem("token_refresh") === null) {
    return false;
  }

  try {
      var result = await apolloClient.mutate({
        mutation: gql `
          mutation ($refresh: String!) {
            refreshToken(refresh: $refresh) {
              access
            }
        }
      `,
        variables: {
          refresh: localStorage.getItem("token_refresh"),
        },
      })

      localStorage.setItem("token_access", result.data.refreshToken.access);
      return true;
}   catch {
      localStorage.clear();
      alert("Su sesi??n expir??, por favor vuelva a iniciar sesi??n");
      return false;
    }   
}

router.beforeEach(async(to, from) => {
  var is_auth = await isAuth();
  if (is_auth == to.meta.requiresAuth) return true
  if (is_auth) return { name: "home" };
  return { name: "logIn" };
})

export default router
