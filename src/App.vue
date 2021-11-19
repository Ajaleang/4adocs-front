<template>
<div id="fondo"></div>
    
    <div id="app" class="app">

        <div class="menu"> 
        <nav>
            <div class="btn-group" role="group" aria-label="Basic outlined example">        
            <button type="button" class="btn btn-link" v-if="!is_auth" v-on:click="loadLogIn" ><fa icon="user"/> Iniciar Sesión </button>
            <button type="button" class="btn btn-link" v-if="is_auth" v-on:click="logOut"> Cerrar Sesión </button>
            <button type="button" class="btn btn-link" v-on:click="loadSignUp"> Registro Usuario </button> 
                     
            </div>
        </nav>
        </div> 
   
    </div> 

    <div class="main-component">
      <router-view/>               
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
            if(this.is_auth == false)
                this.$router.push({name: "inicio"})
        },

        loadLogIn: function(){
            this.$router.push({name: "login"})
        },

        loadSignUp: function(){
            this.$router.push({name: "signUp"})
        },

        completedLogIn: function(data) {},
        completedSignUp: function(data) {},
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