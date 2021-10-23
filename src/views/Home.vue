<template>
  <div>
    <h1 class="text-h3 text-center py-5">
      Para ingresar debes iniciar sesión o registrarte
    </h1>
    <v-container>
      <v-row>
        <v-col class="d-flex justify-center">
          <SignInDialog v-show="!$store.state.sesion.usuario" />
          <Registrar />
        </v-col>
      </v-row>
    </v-container>
    <!-- <v-row>
      <v-col v-for="curso in $store.state.cursos.data" :key="curso.id">
        <Card :value="curso" />
      </v-col>
    </v-row> -->
  </div>
</template>
<script>
// import Card from "../components/app/Card.vue";
import SignInDialog from "../components/sign/SignInDialog.vue";
import Registrar from "../components/sign/Registrar.vue";
import Store from "../store";
export default {
  name: "Home",
  components: {
    SignInDialog,
    Registrar,
  },
  // mounted() {
  //   this.$store.dispatch("cursos/traerTodosLosCursos");
  // },
  beforeRouteEnter(to, from, next) {
    Store.dispatch("cursos/traerTodosLosCursos");
    next();
  },
};
</script>
