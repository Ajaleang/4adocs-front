<template>
     <div class="logo_pro">        
        <img alt="Logoapp" src="../assets/logohor.png" class="img-fluid" width="250" height="250">
    </div>

    <div class="proveedor_form">         
                   
    <div class="container_proveedor_form">        
            
        <form >

            <div class="form-outline mb-3">
                <input type="text" id="id" class="form-control" placeholder="ID Proveedor" />                 
            </div> 
         
            <div class="form-outline mb-3">
                <input type="text" id="laboratorio" class="form-control" placeholder="Laboratorio" />                 
            </div>              
                
            <div class="form-outline mb-3">
                <input type="text" id="contacto" class="form-control" placeholder="Nombre de Contacto"/>                   
            </div>
    
            <div class="form-outline mb-3">
                <input type="text" id="email" class="form-control" placeholder="Email"/>                   
            </div>

            <div class="form-outline mb-3">
                <input type="text" id="direccion" class="form-control" placeholder="Dirección"/>                   
            </div>

            <div class="row mb-3">                
                <div class="col">
                    <div class="form-outline">
                        <input type="text" id="telefono" class="form-control" placeholder="Teléfono" />                            
                    </div>
                </div>
                <div class="col">
                    <div class="form-outline">
                        <input type="text" id="celular" class="form-control" placeholder="Celular" />                            
                    </div>
                </div>
            </div>           

            <button type="submit "><h4>Agregar</h4></button>  
            <button type="submit "><h4>Buscar</h4></button> 
            <button type="submit "><h4>Modificar</h4></button>
            <button type="submit "><h4>Eliminar</h4></button>                  
           
        </form>  

         <div class="lista">        
            <button type="button" class="btn btn-link" v-on:click="listaprov" >Lista Proveedores</button>
        </div>     
        
        </div>       
            
    </div>     


    <div class="proveedor" >       
         <h1> Proveedores </h1>
    </div>
    
    <div class="bloque_prov">
        <div class="blq_items_prov" >
            <button type="button" class="btn btn-primary" v-on:click="producto">                
                <h3>Productos <img alt="Logoapp" src="../assets/pills.png" class="img-fluid" width="40" height="40"></h3> 
            </button>
        </div>
        <div class="blq_items_prov">
            <button type="button" class="btn btn-primary" v-on:click="inventario">                
                <h3>Inventario <img alt="Logoapp" src="../assets/inventario.png" class="img-fluid" width="40" height="40"></h3> 
                
            </button>
        </div>
        <div class="blq_items_prov">
            <button type="button" class="btn btn-primary" v-on:click="proveedores">                
                <h3>Proveedores <img alt="Logoapp" src="../assets/proveedores.png" class="img-fluid" width="40" height="40"></h3>
            </button>
        </div>
         <div class="blq_items_prov">
            <button type="button" class="btn btn-primary" v-on:click="pedidos">                
                <h3>Pedidos <img alt="Logoapp" src="../assets/pedido.png" class="img-fluid" width="40" height="40"></h3> 
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "proveedores",    
       

    methods: {
        producto: function() {
            this.$router.push({name: "producto"})
        },
        inventario: function() {
            this.$router.push({name: "inventario"})
        },
        proveedores: function() {
            this.$router.push({name: "proveedores"})
        },
        pedidos: function() {
            this.$router.push({name: "pedidos"})
        },
        listaprov: function() {
            this.$router.push({name: "listaprov"})
        },
    }


};

</script>



<style>

p {    
    font: 1rem 'Fira Sans', sans-serif;
    display: inline-block;     
       
}

input {
    margin: .2rem 0;    
    padding: -2px;
    border-radius: 5px;
    height: 35px;  
    margin-left: 10px;     
}

.logo_pro {
    margin-left: 10px;  
    margin-top:-90px;  
    position:absolute;
    display: inline-block;
}

.container_proveedor_form {            
    width: 60%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;  
    display: inline-block;   
    margin-left: 270px;  
    margin-top: 80px;    
}

.container_proveedor_form input {
    border: 1px solid #136fb5;
}

.container_proveedor_form select {
    border: 1px solid #136fb5;
}  

.proveedor_form h2{
    color: #136fb5;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 130px;    
}

.proveedor_form form{
    width: 70%;        
}

.proveedor_form button{
    width: 110px;
    height: 40px;
    color: #E5E7E9;
    background: #136fb5;
    border: 1px solid #E5E7E9;
    border-radius: 5px;
    padding: 10px 25px;
    margin: 5px 0;
    margin-bottom: 35px;
    margin-left: 27px;
    margin-top: 3px;      
    justify-content: center;
    align-items: center;
    display: inline-block;    
    position:relative;    
}

.proveedor_form button h4 {
    margin-top: -4px;
    font-size: 20px; 
    justify-content: center;
    align-items: center;
    margin-left: -12px;
}

.proveedor_form button:hover{
    color: #E5E7E9;
    background: #fc10e6;
    border: 1px solid #136fb5;
}

.proveedor {
    color: #136fb5;
    text-align: center;
    justify-content: center;
    align-items: center;    
    margin-top: 80px;
    position:relative;    
}

.proveedor h1 {
    font-size: 60px;
    margin-top: -50px;
    margin-right: 250px;
}

.bloque_prov {    
    margin-left: 1000px;
    position:absolute;
    margin-top: -10px;    
}

.blq_items_prov button {
    border: none;
    background: #136fb5;
    height: 50px;
    width: 210px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    margin: 20px;

}

.blq_items_prov h3 {
    color: #fff;
    justify-content: center;
    align-items: center;
    margin-top: 2px;
    font-size: 23px;    
}

.blq_items_prov img {
    justify-content: center;
    align-items: center;
    float: right;
    margin-top:-2px;
}

.blq_items_prov button:hover{
    color: #E5E7E9;
    background: #fc10e6;
    border: 1px solid #136fb5;
}

.lista button {
    width: 350px;    
    color: #136fb5;
    justify-content: center;
    align-items: center;
    margin-left: 110px;
    margin-top: -25px;
    box-shadow:none;
    font-size: 30px;
    background:none;
    border:none;
    text-decoration: none;      
}

.lista button:hover {
    background: none;
    color: #136fb5;
    border:none;
}

</style>