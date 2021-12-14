<template>

 <div class="login_logo">        
    <img alt="Logoapp" src="../assets/logofarmatic.png" class="img-fluid" width="420" height="420">
</div>
 
<div class="logIn_user">         
                   
    <div class="container_logIn_user">
        <img alt="Logoapp" src="../assets/logosolo.png" height="50" width= "50"/>
        <h2>Iniciar sesión</h2>
    
        <form v-on:submit.prevent="processLogInUser" >
                        
            <div class="form-outline mb-3">
                    <input type="text" v-model="user.username" id="Usuario" class="form-control" placeholder="Usuario"/>                   
            </div>

            <div class="form-outline mb-3">
                    <input type="password" v-model="user.password" id="Password" class="form-control" placeholder="Contraseña"/>                   
            </div>
            
            
            <button type="submit"><h3>Ingresar</h3></button>                     
            
        </form>
    </div>
</div>   
 
  
  
</template>

<script>
import gql from "graphql-tag";

export default {
    name: 'Login',
    
    data: function() {
        return {
            user: {
                username: "",
                password: ""
            },
        };
    },

    methods: {
        processLogInUser: async function() {
            await this.$apollo
               .mutate({
                    mutation: gql
                        `mutation LogIn($credentials: CredentialsInput!) {
                            logIn(credentials: $credentials) {
                                refresh
                                access
                            }
                        } `, 
                        
                    variables: {
                        credentials: this.user,
                    },
                })            
                .then((result) => {
                    let dataLogIn = {
                        username        : this.user.username,
                        token_access    : result.data.logIn.access,
                        token_refresh   : result.data.logIn.refresh,
                    }
                    this.$emit('completedLogIn', dataLogIn)
                })
                .catch((error) => {
                    console.log(error);
                    alert("ERROR 401: Credenciales Incorrectas.");
                });
        }
    }
}

</script>



<style>

.login_logo img {
    margin-left: 150px;
    margin-top: 50px; 
    position:relative;
}


.logIn_user{
    margin: 0;
    padding: 0%;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    display: inline-block;
    position:relative;    
}
    
.container_logIn_user {
    width: 27%;
    height: 65%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center ; 
    position: absolute;
    background: white;
    margin-left: 800px;
    margin-top: -210px;        
}

.logIn_user h2{
    color: #136fb5;
    margin-top: 30px;
    margin-bottom: 30px;
    font-size: 40px;
}
.logIn_user form{
    width: 80%;    
}

.logIn_user input{
    height: 40px;
    width: 100%;
    box-sizing: border-box;
    padding: 10px 20px;
    margin: 5px 0;
    border: 1px solid #136fb5;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
}
.logIn_user button{
    width: 150px;
    height: 50px;
    color: #E5E7E9;
    background: #136fb5;
    border: 1px solid #E5E7E9;
    border-radius: 5px;
    padding: 10px 25px;
    margin: 5px 0;  
    margin-left: 70px
    
}
.logIn_user button:hover{
    color: #E5E7E9;
    background: #fc10e6;
    border: 1px solid #136fb5;    
    
}

.logIn_user h3{
    font-size: 23px;
    text-align: center;
}


</style>