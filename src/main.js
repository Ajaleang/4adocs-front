import { createApp }                                    from 'vue'
import { FontAwesomeIcon }                              from '@fortawesome/vue-fontawesome'
import { library }                                      from '@fortawesome/fontawesome-svg-core'
import { fab }                                          from '@fortawesome/free-brands-svg-icons'
import { fas }                                          from '@fortawesome/free-solid-svg-icons'
import { ApolloClient, createHttpLink, InMemoryCache }  from '@apollo/client/core'
import { createApolloProvider }                         from '@vue/apollo-option'
import { setContext }                                   from 'apollo-link-context'
import App                                              from './App.vue'
import router                                           from './router'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"


const httpLink = createHttpLink({
    uri: 'http://localhost:4000/farmatic',
})

const authLink = setContext((_, { headers }) => {
    return {
        headers: {
            ...headers,
            "Authorization": localStorage.getItem("token_access") || ""
        }
    }
})

const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
})

const apolloProvider = new createApolloProvider({
    defaultClient: apolloClient
})

library.add(fas, fab)

createApp(App).use(router).use(apolloProvider).component('fa', FontAwesomeIcon).mount('#app')
