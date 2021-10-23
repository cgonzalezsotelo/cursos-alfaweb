<template>
  <div>
    <v-row>
      <v-col class="d-flex justify-center align-center">
        <v-card-title class="text-h2">Pacientes</v-card-title
        ><v-btn color="primary" to="CrearPaciente">Agregar Paciente</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <TablaAdmin />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import TablaAdmin from "../components/app/TablaAdmin.vue";
import Store from "../store";
export default {
  name: "Pacientes",
  components: {
    TablaAdmin,
  },
  beforeRouteEnter(to, from, next) {
    Store.dispatch("pacientes/traerTodosLosPacientes");
    next();
  },
};
</script>
