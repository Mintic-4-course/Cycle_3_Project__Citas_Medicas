<template>
  <NavBar></NavBar>

  <div>
    <b-container fluid class="p-5 bg-primary text-white text-center mb-4">
      <p>Tabla de pacientes</p>
    </b-container>
    <b-container>
      <!--      tabla que muestra los pacientes-->
<!--      <tbody>-->
<!--&lt;!&ndash;        <tr v-for='user, index int' >&ndash;&gt;-->
<!--          <th scope="row">1</th>-->
<!--          <th>{{user.nombre}}</th>-->
<!--          <th>{{user.apellido}}</th>-->
<!--          <th>{{user.tipo_documento}}</th>-->
<!--          <th>{{user.numero_documento}}</th>-->
<!--        </tr>-->
<!--      </tbody>-->

      <!-- bootstrap-vue table -->
      <!--      <b-table striped hover :items="items"></b-table>-->
    </b-container>
  </div>
</template>

<script>
import axios from 'axios';
import NavBar from "@/components/NavBar";

export default {
  name: "TablaAsignacion",
  components: {NavBar},
  mounted() {
    axios.get(
        "https://drhouse-be.herokuapp.com/pacientes/",
        this.user,
        {headers: {}}
    ).then((result) => {
      this.users = result.data;
    }).catch((error) => {
      console.log(error);
    });
  },
  data() {
    return {
      fields: ['id', 'nombre', 'apellido', 'tipo_documento', 'numero_documento', 'direccion', 'telefono'],
      items: [],
      post: []
    }
  }
}
</script>

<style scoped>

</style>