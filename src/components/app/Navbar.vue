<template>
  <v-app-bar app color="primary" dark
    ><v-app-bar-nav-icon @click="$emit('toggle-drawer')"></v-app-bar-nav-icon>
    <v-spacer></v-spacer>
    <!-- <SignInDialog v-show="!$store.state.sesion.usuario" /> -->
    <SignOutDialog v-show="$store.state.sesion.usuario" />
  </v-app-bar>
</template>
<script>
// import SignInDialog from "../sign/SignInDialog.vue";
import SignOutDialog from "../sign/SignOutDialog.vue";
export default {
  components: {
    SignOutDialog,
  },
};
</script>
