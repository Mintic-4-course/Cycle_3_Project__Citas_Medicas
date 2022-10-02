<template>

  <NavBar></NavBar>
  <!--  mensaje de bienvenida para usaurio-->
  <div>
    <div class="col-md-9s offset-md-1 mt-5">
      <h1 class="text-center">Bienvenido {{ this.username }} </h1>
      <p>
        Esta es la pagina principal de la aplicacion, aqui podra crear pacientes, medicos y asignar pacientes a medicos.
        <br>
        Elaborada por el grupo 6 MINTIC 2022
      </p>
    </div>
  </div>


</template>
☺
<script>
// import NavBar from "@/components/NavBar";

import NavBar from "@/components/NavBar";
export default {
  name: "HomeUser",
  components: {NavBar},

  data: function () {
    return {
      username: localStorage.getItem("username")
    }
  },
  methods: {
    "tablaAsignacion": function () {
      this.$router.push({name: "tableAsignacion"})
    },
    personalSalud: function () {
      this.$router.push({name: "personalSalud"})
    },
    paciente: function () {
      this.$router.push({name: "paciente"})
    },
    asignacionPaciente: function () {
      this.$router.push({name: "asignacionPaciente"})
    }
  },
}
</script>

<style scoped>

</style>