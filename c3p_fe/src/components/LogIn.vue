<template>
  <div class="logIn_user">
    <div class="container_logIn_user">
      <h3 class="display-4">Dr House</h3>
      <p class="text-muted mb-4">Hopitalizacion en casa.</p>
      <form v-on:submit.prevent="processLogInUser" class="form">
        <div class="mb-3">
          <input id="username" v-model="user.username" type="text" placeholder="Username" required="" autofocus=""
            class="form-control rounded-pill border-0 shadow-sm px-4" />
        </div>
        <div class="mb-3">
          <input id="password" v-model="user.password" type="password" placeholder="Password" required=""
            class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
        </div>
        <div class="d-grid gap-2 mt-2">
          <button type="submit" class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">
            Login
          </button>
        </div>
        <div class="d-flex align-items-center justify-content-center pb-4">
          <p class="mb-0 me-2">¿No posees una cuenta?</p>
          <button v-on:click="loadSignUp" type="button" class="btn btn-outline-primary">Registrate</button>
        </div>

        <div class="text-center d-flex justify-content-between mt-4">
          <p>EQUIPO 6 MINTIC BIMESTRE 3 <a class="font-italic text-muted"></a></p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "LogIn",

  data: function () {
    return {
      user: {
        username: "",
        password: ""
      }
    }
  },

  methods: {
    processLogInUser: function () {
      console.log(this.user)
      axios.post(
        "https://drhouse-be.herokuapp.com/login/",
        this.user,
        { headers: {} }
      ).then((result) => {
        let dataLogin = {
          username: this.user.username,
          token_access: result.data.access,
          token_refresh: result.data.refresh,
        }
        this.$emit('goLogIn', dataLogin)
        console.log('exito')
      }).catch((err) => {
        console.log("hay un error"+ err)
        if (err?.response?.status === 401) {
          alert("ERROR 401: Credenciales Incorrectas.");
        }
        if (err?.response?.status === 400) {
          alert("ERROR 400: Bad request.");
        }
        if (err?.response?.status === 500) {
          alert("ERROR 500: Internal server error.");
        }
      });
    },

    loadSignUp: function () {
      this.$router.push({ name: 'signUp' });
    }
  },
}
</script>

<style scoped>

</style>