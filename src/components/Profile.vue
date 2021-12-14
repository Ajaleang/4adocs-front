<template>
    <div class="logo_ho">        
        <img alt="Logoapp" src="../assets/logohor.png" class="img-fluid" width="250" height="250">
    </div>
    
    <div class="welcome">       
        <h1> ¡Bienvenido <span> {{ username }} </span> ! </h1>
    </div>

    <div class="bloque">
        <div class="blq_items">
            <button type="button" class="btn btn-primary" v-on:click="producto">
                <img alt="Logoapp" src="../assets/pills.png" class="img-fluid" width="100" height="100">
                <h3>Productos</h3>
            </button>
        </div>
        <div class="blq_items">
            <button type="button" class="btn btn-primary" v-on:click="inventario">
                <img alt="Logoapp" src="../assets/inventario.png" class="img-fluid" width="100" height="100">
                <h3>Inventario</h3>
            </button>
        </div>
        <div class="blq_items">
            <button type="button" class="btn btn-primary" v-on:click="proveedores">
                <img alt="Logoapp" src="../assets/proveedores.png" class="img-fluid" width="100" height="100">
                <h3>Proveedores</h3>
            </button>
        </div>
         <div class="blq_items">
            <button type="button" class="btn btn-primary" v-on:click="pedidos">
                <img alt="Logoapp" src="../assets/pedido.png" class="img-fluid" width="100" height="100">
                <h3>Pedidos</h3>
            </button>
        </div>
    </div>
    
</template>

<script>

export default {
    name: "profile",
    
    data: function() {
        return {            
            username: localStorage.getItem("username") || "none",              
            }
        
    },
    
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
    },

};

</script>

<style>
.logo_ho {
    margin-left: 10px;  
    margin-top:-135px;  
    position:absolute;
    display: inline-block;
}

.welcome {
    color: #136fb5;
    text-align: center;
    justify-content: center;
    align-items: center;    
    margin-top: 80px;
    position:relative;    
}

.welcome h1 {
    font-size: 70px;
}

span {
    color: #fc10e6;
    position:relative;
    font-style: italic;
}

.bloque {
    display: flex;
    margin-left: 200px;
    position:relative;
    margin-top: 50px;
    
}

.blq_items button {
    border: none;
    background: #136fb5;
    height: 200px;
    width: 200px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    margin: 20px;
}

.blq_items h3 {
    color: #fff;
    justify-content: center;
    align-items: center;
    margin-top: 15px;    
}

.blq_items img {
    justify-content: center;
    align-items: center;
    margin-top: 15px;
}

.blq_items button:hover{
    color: #E5E7E9;
    background: #fc10e6;
    border: 1px solid #136fb5;
}

</style>