<template>
  <v-dialog v-model="dialogRegister" width="700">
    <template #activator="{ on }">
      <v-btn class="mx-1" depressed color="primary" v-on="on"
        >Registrarse
        <v-icon>mdi-account-plus-outline</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title>Registrarse</v-card-title>
      <v-card-text>
        <UserFormRegister @success="dialogRegister = false" />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
import UserFormRegister from "./UserFormRegister.vue";
export default {
  data: () => ({
    dialogRegister: false,
  }),
  components: {
    UserFormRegister,
  },
};
</script>
