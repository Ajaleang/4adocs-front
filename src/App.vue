<template>
<div id="fondo"></div>
    
    <div id="app" class="app">

        <div class="menu"> 
        <nav>
            <div class="btn-group" role="group" aria-label="Basic outlined example">        
            <button type="button" class="btn btn-link" v-if="is_auth" v-on:click="logOut"> Cerrar Sesión </button>
            <button type="button" class="btn btn-link" v-if="!is_auth" v-on:click="loadLogIn" ><fa icon="user"/> Iniciar Sesión </button>
            <button type="button" class="btn btn-link" v-if="!is_auth" v-on:click="loadSignUp"> Registro Usuario </button> 
            
            
                     
            </div>
        </nav>
        </div> 
   
    </div> 

    <div class="main-component">
        <router-view
            v-on:completedLogIn="completedLogIn"
            v-on:completedSignUp="completedSignUp"
            v-on:logOut="logOut"
        >
        </router-view>
        </div>

    
 
</template>

<script>

export default {
    name: 'App',

    data: function(){
    return{
        is_auth: false
    }
},
    components: {
    },

    methods:{
        verifyAuth: function() {
            this.is_auth = localStorage.getItem("isAuth") || false;

            if(this.is_auth == false)
                this.$router.push({name: "inicio"})
            else
                this.$router.push({ name: "profile" });
        },

        loadLogIn: function(){
            this.$router.push({name: "login"})
        },

        loadSignUp: function(){
            this.$router.push({name: "signUp"})
        },
        
        logOut: function() {
            localStorage.clear();
            alert("Sesión Cerrada");
            this.verifyAuth();
        },

        completedLogIn: function(data) {
            localStorage.setItem("isAuth", true);
            localStorage.setItem("username", data.username);
            localStorage.setItem("token_access", data.token_access);
            localStorage.setItem("token_refresh", data.token_refresh);
            alert("Autenticación Exitosa");
            this.verifyAuth();
        },

        completedSignUp: function(data) {
            alert("Registro Exitoso");
            this.completedLogIn(data);
        },
    },
    created: function(){
        this.verifyAuth()
    }
}
</script>




<style>
#fondo {
    background-image: url("./assets/fondohome.png");
    width: 100% ;
    height: 100%;
    background-size: cover;
    position: fixed;
}
.menu nav {
    height: 100%;
    width: 20%;
    display: flex;      
    font-size: 20px;    

}

 .menu nav button{
    color: rgb(3, 13, 68);  
    font-size: 20px;
    border: none;
    padding: 10px 20px;
    width:190px;
    height:50px;
    box-shadow: none;
    text-decoration: none;  
    margin-left: 980px; 
    margin-top: 15px;
  
}
</style>