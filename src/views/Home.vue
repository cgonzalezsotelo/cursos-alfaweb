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
  </div>
</template>
<script>
import SignInDialog from "../components/sign/SignInDialog.vue";
import Registrar from "../components/sign/Registrar.vue";
import Store from "../store";
export default {
  name: "Home",
  components: {
    SignInDialog,
    Registrar,
  },
  beforeRouteEnter(to, from, next) {
    Store.dispatch("pacientes/traerTodosLosPacientes");
    next();
  },
};
</script>
