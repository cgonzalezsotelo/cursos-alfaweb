<template>
  <v-dialog v-model="dialog" width="700">
    <template #activator="{ on }">
      <v-btn class="mx-1" depressed color="success" v-on="on"
        >Iniciar Sesión
        <v-icon>mdi-login</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title>Iniciar Sesión</v-card-title>
      <v-card-text>
        <UserForm @success="dialog = false" />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
import UserForm from "./UserForm.vue";
export default {
  data: () => ({
    dialog: false,
  }),
  components: {
    UserForm,
  },
};
</script>
