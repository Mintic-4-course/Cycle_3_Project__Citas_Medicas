<template>
    <div class="signUp_user">
        <div class="container_signUp_user">
        <h2>Registrarse</h2>
            <form v-on:submit.prevent="processSignUp" >
                <br>
                <input id="username" v-model="user.username" type="text" placeholder="Nombre de usuario" required="" autofocus=""
                class="form-control rounded-pill border-0 shadow-sm px-4" />        
                <br>
                <input id="password" v-model="user.password" type="password" placeholder="Contraseña" required=""
                class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                <br>
                <input id="nombre" v-model="user.nombre" type="text" placeholder="Nombres" required="" autofocus=""
                class="form-control rounded-pill border-0 shadow-sm px-4" />
                <br>
                <input id="apellido" v-model="user.apellido" type="text" placeholder="Apellido" required="" autofocus=""
                    class="form-control rounded-pill border-0 shadow-sm px-4" />                
                <br>        
                <input id="email" v-model="user.email" type="text" placeholder="Email" required="" autofocus=""
                    class="form-control rounded-pill border-0 shadow-sm px-4" />
                <br>       
                <input id="tipo_documento" v-model="user.tipo_documento" type="text" placeholder="Tipo de documento" required="" autofocus=""
                    class="form-control rounded-pill border-0 shadow-sm px-4" />
                <br>        
                <input id="numero_documento" v-model="user.numero_documento" type="text" placeholder="Numero de documento" required="" autofocus=""
                    class="form-control rounded-pill border-0 shadow-sm px-4" />
                <br>        
                <input id="direccion" v-model="user.direccion" type="text" placeholder="Direccion" required="" autofocus=""
                    class="form-control rounded-pill border-0 shadow-sm px-4" />
                <br>
                        
                <input id="telefono" v-model="user.telefono" type="text" placeholder="Numero de telefono o celular" required="" autofocus=""
                    class="form-control rounded-pill border-0 shadow-sm px-4" />
                <br>
                <button type="submit" class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">
                Crear
                </button>
            </form>
    </div>
 </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "SignUp",
    data: function(){
        return{
            user: {
                username:"",
                password:"",     
                nombre:"",
                apellido:"",
                email:"",
                tipo_documento:"",
                numero_documento:"",
                direccion:"",
                telefono:"",
            }
        }

    },
    methods:{
        processSignUp: function(){
            
            axios.post(
                "https://drhouse-be.herokuapp.com/user/",
                this.user,
                {headers:{}}
            )
                .then((result)=>{
                    let dataSignUp={
                        username:this.user.username,
                        token_access: result.data.access,
                        token_refresh: result.data.refresh
                    }
                    this.$emit('goSignUp', dataSignUp)
                })   
                .catch((error)=>{
                    console.log(error)
                    alert("Error: Fallo en el requisito")
                });
        }
    }
}
</script>

<style scoped>

</style>