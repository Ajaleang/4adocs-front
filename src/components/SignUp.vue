<template>
    <div class="signup_logo">        
        <img alt="Logoapp" src="../assets/logofarmatic.png" class="img-fluid" width="420" height="420">
    </div>

   <div class="signUp_user">         
                   
    <div class="container_signUp_user">        
        <h2><fa icon="user-plus"/> Registro de Usuario</h2>
    
        <form v-on:submit.prevent="processSignUp" >
            <div class="form-outline mb-3">
                    <input type="text" id="NombreCompleto" class="form-control" placeholder="Nombre Completo"/>                   
            </div>
           
            <select class="form-select mb-3" aria-label="Default select example"> 
                <option selected>Tipo de Documento</option>
                <option value="CC">CC</option>
                <option value="CE">CE</option>                    
            </select>
            
            <div class="form-outline mb-3">
                <input type="text" id="NdeDocumento" class="form-control" placeholder="N° de Documento" />                 
            </div>              
                
            <div class="form-outline mb-3">
                <input type="text" id="Email" class="form-control" placeholder="Correo"/>                   
            </div>

            <div class="row mb-3">
                <div class="col">
                    <div class="form-outline">
                        <input type="text" id="Usuario" class="form-control" placeholder="Usuario"/>
                    </div>
                </div>
                <div class="col">
                    <div class="form-outline">
                        <input type="text" id="Contraseña" class="form-control" placeholder="Contraseña" />                            
                    </div>
                </div>
            </div>
            
            <button type="submit ">Guardar Datos</button>                     
           
        </form>
    </div>
</div>  
   
   
   

</template>





<style>
.signup_logo img {
    margin-left: 150px;
    margin-top: 50px; 
    position:relative;
    display: inline-block;
}

.container_signUp_user {            
    width: 60%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;  
    display: inline-block;   
    margin-left: 670px;  
    margin-top: -400px;    
}

.container_signUp_user input {
    border: 1px solid #136fb5;
}

.container_signUp_user select {
    border: 1px solid #136fb5;
}  


.signUp_user h2{
    color: #136fb5;
    margin-top: 30px;
    margin-bottom: 20px;
    margin-left: 130px;
    
}

.signUp_user form{
    width: 70%;        
    }


.signUp_user button{
    width: 350px;
    height: 40px;
    color: #E5E7E9;
    background: #136fb5;
    border: 1px solid #E5E7E9;
    border-radius: 5px;
    padding: 10px 25px;
    margin: 5px 0;
    margin-bottom: 35px;
    margin-left: 110px;
    font-size: 25px;        
    display:flex;
    justify-content: center;
    align-items: center;
    }

.signUp_user button:hover{
    color: #E5E7E9;
    background: #fc10e6;
    border: 1px solid #136fb5;
}

</style>