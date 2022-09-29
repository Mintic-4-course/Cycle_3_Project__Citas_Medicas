<template>
  <div class="logIn_user">
    <div class="container_logIn_user">
      <h2>Iniciar sesion</h2>

      <form v-on:submit.prevent="processLogInUser">
        <input type="text" v-model="user.username">
        <input type="password" v-model="user.password">
        <button type="submit">Iniciar sesion</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "LogIn",

  data: function () {
    return {
      User: {
        username: "",
        password:""
      }
    }
  }
}
</script>

<style scoped>

</style>