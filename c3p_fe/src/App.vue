<template>
  <div class="container-fluid">
    <div class="row no-gutter">
      <div class="col-md-6 d-none d-md-flex bg-image"></div>
      <div class="col-md-6 bg-light">
        <div class="login d-flex align-items-center py-5">
          <div class="container">
            <div class="row">
              <div class="col-lg-10 col-xl-7 mx-auto">              
               <log-in v-on:goLogIn="goLogIn"></log-in>
                 
                              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
  
</template>

<script>

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import LogIn from "./components/LogIn.vue";


export default {
  name: 'App',
  data: function(){
    return{
      is_auth:false
    }
  },
  components:{
    LogIn
},
  methods:{
    verifyAuth: function(){
      
     
    },
    loadLogIn: function(){
      
    },
    loadSignUp: function(){
      this.$router.push({name:"signUp"})
    },
    goLogIn: function(data){
      localStorage.setItem("isAuth", true);
      localStorage.setItem("username", data?.username);
      localStorage.setItem("token_access", data?.token_access);
      localStorage.setItem("token_refresh", data?.token_refresh);
      alert("usuario"+localStorage.getItem("username")+localStorage.getItem("token_access"));
      alert("Autenticación Exitosa");
      this.verifyAuth();
    },
    completedSignUp: function(data){
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
</style>