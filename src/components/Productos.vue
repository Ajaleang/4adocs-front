<template>
     <div class="logo_po">        
        <img alt="Logoapp" src="../assets/logohor.png" class="img-fluid" width="250" height="250">
    </div>

    <div class="producto_form">         
                   
    <div class="container_producto_form">        
            
        <form >
            <div class="row mb-3">                
                <div class="col">
                    <div class="form-outline">
                        <input type="text" id="codigo" class="form-control" placeholder="Código" />                            
                    </div>
                </div>
                <div class="col">
                    <select class="form-select" aria-label="Default select example"> 
                        <option selected>Proveedor</option>
                        <option value=""> </option>                                           
                    </select>
                </div>
            </div>                  
            
            <div class="form-outline mb-3">
                <input type="text" id="medicamento" class="form-control" placeholder="Nombre del Medicamento" />                 
            </div>              
                
            <div class="form-outline mb-3">
                <input type="text" id="Concentracion" class="form-control" placeholder="Concentración"/>                   
            </div>

            <div class="row mb-3">                
                <div class="col">
                    <div class="form-outline">
                        <input type="text" id="Presentación" class="form-control" placeholder="Presentación"/>                            
                    </div>
                </div>
                <div class="col">
                    <input type="text" id="cantidad" class="form-control" placeholder="Cantidad"/>
                </div>
            </div>     
    
          

            <div class="row mb-3">            
                
                <div class="col">                    
                    <p>Fecha Fab.</p>                              
                </div>
                <div class="col">                    
                    <input  type="date" id="start" name="trip-start"
                            value="2021-12-09"
                            min="2000-12-01" max="2030-12-31">              
                </div>
                <div class="col">                    
                    <p>Fecha Ven.</p>                              
                </div>
                <div class="col">                    
                    <input  type="date" id="start" name="trip-start"
                            value="2021-12-09"
                            min="2000-12-01" max="2030-12-31">                               
                </div>                
            </div>            

            <div class="row mb-3">
                <div class="col">
                    <div class="form-outline ">
                        <input type="text" id="costo" class="form-control" placeholder="Precio Costo"/>
                    </div>
                </div>
                <div class="col" >
                    <div class="form-outline ">
                        <input type="text" id="venta" class="form-control" placeholder="Precio Venta" />                            
                    </div>
                </div>
            </div>
            
            <button type="submit "><h4>Agregar</h4></button>  
            <button type="submit "><h4>Buscar</h4></button> 
            <button type="submit "><h4>Modificar</h4></button>
            <button type="submit "><h4>Eliminar</h4></button>                  
           
        </form>
        </div>
    </div>  


    <div class="producto" >       
         <h1> Productos </h1>
    </div>
    
    <div class="bloque_prod">
        <div class="blq_items_prod" >
            <button type="button" class="btn btn-primary" v-on:click="producto">                
                <h3>Productos <img alt="Logoapp" src="../assets/pills.png" class="img-fluid" width="40" height="40"></h3> 
            </button>
        </div>
        <div class="blq_items_prod">
            <button type="button" class="btn btn-primary" v-on:click="inventario">                
                <h3>Inventario <img alt="Logoapp" src="../assets/inventario.png" class="img-fluid" width="40" height="40"></h3> 
                
            </button>
        </div>
        <div class="blq_items_prod">
            <button type="button" class="btn btn-primary" v-on:click="proveedores">                
                <h3>Proveedores <img alt="Logoapp" src="../assets/proveedores.png" class="img-fluid" width="40" height="40"></h3>
            </button>
        </div>
         <div class="blq_items_prod">
            <button type="button" class="btn btn-primary" v-on:click="pedidos">                
                <h3>Pedidos <img alt="Logoapp" src="../assets/pedido.png" class="img-fluid" width="40" height="40"></h3> 
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "producto",    
       

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

.logo_po {
    margin-left: 10px;  
    margin-top:-90px;  
    position:absolute;
    display: inline-block;
}

.container_producto_form {            
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

.container_producto_form input {
    border: 1px solid #136fb5;
}

.container_producto_form select {
    border: 1px solid #136fb5;
}  

.producto_form h2{
    color: #136fb5;
    margin-top: 30px;
    margin-bottom: 20px;
    margin-left: 130px;    
}

.producto_form form{
    width: 70%;        
}

.producto_form button{
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
    margin-top: 5px;      
    justify-content: center;
    align-items: center;
    display: inline-block;    
    position:relative;    
}

.producto_form button h4 {
    margin-top: -4px;
    font-size: 20px; 
    justify-content: center;
    align-items: center;
    margin-left: -12px;
}

.producto_form button:hover{
    color: #E5E7E9;
    background: #fc10e6;
    border: 1px solid #136fb5;
}

.producto {
    color: #136fb5;
    text-align: center;
    justify-content: center;
    align-items: center;    
    margin-top: 80px;
    position:relative;    
}

.producto h1 {
    font-size: 60px;
    margin-top: -50px;
    margin-right: 250px;
}

.bloque_prod {    
    margin-left: 1000px;
    position:absolute;
    margin-top: -10px;    
}

.blq_items_prod button {
    border: none;
    background: #136fb5;
    height: 50px;
    width: 210px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    margin: 20px;

}

.blq_items_prod h3 {
    color: #fff;
    justify-content: center;
    align-items: center;
    margin-top: 2px;
    font-size: 23px;    
}

.blq_items_prod img {
    justify-content: center;
    align-items: center;
    float: right;
    margin-top:-2px;
}

.blq_items_prod button:hover{
    color: #E5E7E9;
    background: #fc10e6;
    border: 1px solid #136fb5;
}

</style>