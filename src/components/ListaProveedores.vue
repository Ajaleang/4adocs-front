<template>
    <div class="logo_listaprov">        
        <img alt="Logoapp" src="../assets/logohor.png" class="img-fluid" width="250" height="250">
    </div>

    <div class="listaprov" >       
         <h1> Lista Proveedores </h1>
    </div>
   
    <div class="input-group" >
        <div class="form-outline" >
            <input type="search" id="form1" class="form-control" placeholder="Buscar" />            
        </div>
        <button type="button" class="btn btn-primary">
            <fa icon="search"/>
        </button>
    </div>

    <div class="bloque_listaprov">
        <div class="blq_items_listaprov" >
            <button type="button" class="btn btn-primary" v-on:click="producto">                
                <h3>Productos <img alt="Logoapp" src="../assets/pills.png" class="img-fluid" width="40" height="40"></h3> 
            </button>
        </div>
        <div class="blq_items_listaprov">
            <button type="button" class="btn btn-primary" v-on:click="inventario">                
                <h3>Inventario <img alt="Logoapp" src="../assets/inventario.png" class="img-fluid" width="40" height="40"></h3> 
                
            </button>
        </div>
        <div class="blq_items_listaprov">
            <button type="button" class="btn btn-primary" v-on:click="proveedores">                
                <h3>Proveedores <img alt="Logoapp" src="../assets/proveedores.png" class="img-fluid" width="40" height="40"></h3>
            </button>
        </div>
         <div class="blq_items_listaprov">
            <button type="button" class="btn btn-primary" v-on:click="pedidos">                
                <h3>Pedidos <img alt="Logoapp" src="../assets/pedido.png" class="img-fluid" width="40" height="40"></h3> 
            </button>
        </div>
    </div>

    <div class="table_prov">
    <table class="table"> 
        <thead>
            <tr>                
                <th>Laboratorio</th>
                <th>Contacto</th>
                <th>Email</th>
                <th>Tel./Cel.</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="lab in ProveedorListByLaboratorio" :key="lab.id">                
                <td>{{ lab.laboratorio }} </td>
                <td>{{ lab.nombreDeContacto }} </td>
                <td>{{ lab.email }}</td>
                <td>{{ lab.telefono }}</td>                         
            </tr>
        </tbody>
    </table>
    </div>

    

</template>

<script>

import gql        from 'graphql-tag';

export default {
    name: "listaprov",    
    
    data: function () {
        return {
            ProveedorListByLaboratorio: [],
        };
    },
    
    apollo: {
       ProveedorListByLaboratorio: {
            query: gql
                `query ProveedorListByLaboratorio($laboratorio: String!) {
                    proveedorListByLaboratorio(laboratorio: $laboratorio) {
                        laboratorio
                        nombreDeContacto
                        email
                        telefono
                    }
                }
            `, 
        variables() {
            return {
                laboratorio: this.ProveedorListByLaboratorio, 
            };
        }

        }
    },
   
    created: function() {
        this.$apollo.queries.ProveedorListByLaboratorio.refetch();
        
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
    }


};

</script>

<style>
.logo_listaprov {
    margin-left: 10px;  
    margin-top:-90px;  
    position:absolute;
    display: inline-block;
}

.input-group {
    margin-left: 435px;
    margin-top: 30px;
    
}

.listaprov {
    color: #136fb5;
    text-align: center;
    justify-content: center;
    align-items: center;    
    margin-top: 80px;
    position:relative;    
}

.listaprov h1 {
    font-size: 60px;
    margin-top: -50px;
    margin-right: 250px;
}

.bloque_listaprov {    
    margin-left: 1000px;
    position:absolute;
    margin-top: -50px;    
}

.blq_items_listaprov button {
    border: none;
    background: #136fb5;
    height: 50px;
    width: 210px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    margin: 20px;

}

.blq_items_listaprov h3 {
    color: #fff;
    justify-content: center;
    align-items: center;
    margin-top: 2px;
    font-size: 23px;    
}

.blq_items_listaprov img {
    justify-content: center;
    align-items: center;
    float: right;
    margin-top:-2px;
}

.blq_items_listaprov button:hover{
    color: #E5E7E9;
    background: #fc10e6;
    border: 1px solid #136fb5;
}

.table_prov {      
    margin-top: 50px;
    margin-left: 300px; 
    white-space:nowrap;     
    display: inline-block; 
    position: relative;
    display: inline-block;  
    text-align: center;
    justify-content: center;
    align-items: center;   
  }

.table_prov th, td {
     text-align: center;
     font-size: 25px; 
           
  } 

.table_prov th {
    color: #136fb5;    
  }

</style>