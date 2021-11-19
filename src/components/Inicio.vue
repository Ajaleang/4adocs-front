<template>
    
    <div class="home">        
        <img alt="Logoapp" src="../assets/logofarmatic.png" class="img-fluid" width="420" height="420">
        
        <div class="btn-group" role="group" aria-label="Basic outlined example">
            <button type="button" class="btn btn-primary" v-on:click="loadLogIn" >Comenzar </button>
        </div>       
    
    </div>
    
    
  
</template>


<script>
export default {
  name: "inicio",

  methods: {
    loadLogIn: function(){
            this.$router.push({name: "profile"})
        },
    
  },
};

</script>


<style>

.home img {
    margin-left: 150px; 
    position:relative;
}

.home button {    
    color: rgb(255, 255, 255);
    background: #136fb5 ;       
    width:100px;
    height:60px;
    font-size: 30px;       
    margin-top: 400px;
    margin-left: -410px; 
    
    
     
}
</style>