<template>
     <div class="logo_ped">        
        <img alt="Logoapp" src="../assets/logohor.png" class="img-fluid" width="250" height="250">
    </div>

    <div class="pedidos_form">         
                   
    <div class="container_pedidos_form">        
            
        <form v-on:submit.prevent="createPedidos">
         
            <div class="row mb-3">                
                <div class="col">
                    <div class="form-outline">
                        <input type="text" v-model="pedidos.id" id="inventario" class="form-control" placeholder="Id Inventario" />                            
                    </div>
                </div>
                
                 <div class="col">                    
                    <p>Fecha Solicitud</p>                              
                </div>
                <div class="col">                    
                    <input  v-model="pedidos.fecha" type="date" id="start" name="trip-start"
                            min="2000-12-01" max="2030-12-31">         
                </div>
                
            </div>         
         
            <div class="form-outline mb-3">
                <input type="text" v-model="pedidos.productoDestino" id="producto" class="form-control" placeholder="Producto"/>                   
            </div>
    
            <div class="form-outline mb-3">
                <input type="text" v-model="pedidos.proveedorOrigen" id="proveedor" class="form-control" placeholder="Proveedor"/>                   
            </div>

            <div class="form-outline mb-3">
                <input type="number" v-model="pedidos.cantidad" id="cantidad" class="form-control" placeholder="Cantidad"/>                   
            </div>

            <div class="form-outline mb-3">
                <input type="number" v-model="pedidos.precio" id="costo" class="form-control" placeholder="Precio Costo"/>                   
            </div>                

            <button type="submit "><h4>Agregar</h4></button>  
            <button><h4>Buscar</h4></button>                              
           
        </form>
        </div>
    </div>  


    <div class="pedidos" >       
         <h1> Pedidos </h1>
    </div>
    
    <div class="bloque_ped">
        <div class="blq_items_ped" >
            <button type="button" class="btn btn-primary" v-on:click="producto">                
                <h3>Productos <img alt="Logoapp" src="../assets/pills.png" class="img-fluid" width="40" height="40"></h3> 
            </button>
        </div>
        <div class="blq_items_ped">
            <button type="button" class="btn btn-primary" v-on:click="inventario">                
                <h3>Inventario <img alt="Logoapp" src="../assets/inventario.png" class="img-fluid" width="40" height="40"></h3> 
                
            </button>
        </div>
        <div class="blq_items_ped">
            <button type="button" class="btn btn-primary" v-on:click="proveedores">                
                <h3>Proveedores <img alt="Logoapp" src="../assets/proveedores.png" class="img-fluid" width="40" height="40"></h3>
            </button>
        </div>
         <div class="blq_items_ped">
            <button type="button" class="btn btn-primary" v-on:click="pedidos">                
                <h3>Pedidos <img alt="Logoapp" src="../assets/pedido.png" class="img-fluid" width="40" height="40"></h3> 
            </button>
        </div>
    </div>
</template>

<script>
import gql from "graphql-tag";

export default {
    name: "pedidos", 

    data: function() {
        return {
            pedidos: {
                id:"",
                fecha: "",
                productoDestino:"",
                proveedorOrigen: "",
                cantidad: "",
                precio: "",
        },
    };
},

    methods: {
        createPedidos: async function() {

            if (localStorage.getItem("token_access") === null || localStorage.getItem("token_refresh") === null ) {
                this.$emit("logOut");
                return;
            }

            localStorage.setItem("token_access", "");

            await this.$apollo
                .mutate ({
                    mutation: gql
                         `mutation ($refresh: String!) {
                            refreshToken(refresh: $refresh) {
                                access
                            }
                        }
                    `, 
                variables: {
                    refresh: localStorage.getItem("token_refresh"),
                    },
                })        
            
                .then((result) => {
                    localStorage.setItem("token_access", result.data.refreshToken.access);
                })
            
                .catch((error) => {
                    this.$emit("logOut");
                    return;
                });

            await this.$apollo
               .mutate({
                    mutation: gql
                         `mutation Mutation($pedido: PedidoInput!) {
                            createPedido(pedido: $pedido) {
                                id
                                fecha
                                productoDestino
                                proveedorOrigen
                                cantidad
                                precio
                            }
                        }
                    `, 
                    variables: {
                        pedido: this.pedidos,
                    },
                })
                
                .then((result) => {
                    alert ("Pedido Ingresado Exitosamente");
                
                })
                .catch((error) => {
                    alert("ERROR al ingresar el Pedido");
                });
        },   
       

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

.logo_ped {
    margin-left: 10px;  
    margin-top:-90px;  
    position:absolute;
    display: inline-block;
}

.container_pedidos_form {            
    width: 60%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;  
    display: inline-block;   
    margin-left: 270px;  
    margin-top: 100px;    
}

.container_pedidos_form input {
    border: 1px solid #136fb5;
}

.container_pedidos_form select {
    border: 1px solid #136fb5;
}  

.pedidos_form h2{
    color: #136fb5;
    margin-top: 30px;
    margin-bottom: 20px;
    margin-left: 130px;    
}

.pedidos_form form{
    width: 70%;        
}

.pedidos_form button{
    width: 110px;
    height: 40px;
    color: #E5E7E9;
    background: #136fb5;
    border: 1px solid #E5E7E9;
    border-radius: 5px;
    padding: 10px 25px;
    margin: 5px 0;
    margin-bottom: 35px;
    margin-left: 120px;
    margin-top: 2px;      
    justify-content: center;
    align-items: center;
    display: inline-block;    
    position:relative;    
}

.pedidos_form button h4 {
    margin-top: -5px;
    font-size: 20px; 
    justify-content: center;
    align-items: center;
    margin-left: -10px;
    
}

.pedidos_form button:hover{
    color: #E5E7E9;
    background: #fc10e6;
    border: 1px solid #136fb5;
}

.pedidos {
    color: #136fb5;
    text-align: center;
    justify-content: center;
    align-items: center;    
    margin-top: 80px;
    position:relative;    
}

.pedidos h1 {
    font-size: 60px;
    margin-top: -50px;
    margin-right: 250px;
}

.bloque_ped {    
    margin-left: 1000px;
    position:absolute;
    margin-top: -10px;    
}

.blq_items_ped button {
    border: none;
    background: #136fb5;
    height: 50px;
    width: 210px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    margin: 20px;

}

.blq_items_ped h3 {
    color: #fff;
    justify-content: center;
    align-items: center;
    margin-top: 2px;
    font-size: 23px;    
}

.blq_items_ped img {
    justify-content: center;
    align-items: center;
    float: right;
    margin-top:-2px;
}

.blq_items_ped button:hover{
    color: #E5E7E9;
    background: #fc10e6;
    border: 1px solid #136fb5;
}

</style>