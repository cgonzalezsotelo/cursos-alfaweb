<template>
  <div>
    <v-container>
      <v-row>
        <v-col class="d-flex justify-center align-center">
          <v-card-title class="text-h2">Administración</v-card-title
          ><v-btn color="primary" to="CrearCurso">Agregar Curso</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <TablaAdmin />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <Alert />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import TablaAdmin from "../components/app/TablaAdmin.vue";
import Alert from "../components/app/Alert.vue";
export default {
  name: "CursosAdmin",
  components: {
    TablaAdmin,
    Alert,
  },
};
</script>
