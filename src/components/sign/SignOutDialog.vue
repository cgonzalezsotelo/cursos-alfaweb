<template>
  <v-btn text depressed @click="cerrarSesion">
    {{
      $store.state.sesion.usuario
        ? $store.state.sesion.usuario.email
        : "no existe"
    }}
    Salir <v-icon right>mdi-logout</v-icon></v-btn
  >
</template>
<script>
import Firebase from "firebase";
export default {
  methods: {
    cerrarSesion() {
      Firebase.auth()
        .signOut()
        .then(() => {
          this.$router.push("/");
        });
    },
  },
};
</script>
