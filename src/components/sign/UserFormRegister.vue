<template>
  <v-form ref="userFormRegister" @submit.prevent="registrarse">
    <v-text-field
      outlined
      label="Correo"
      v-model="form.email"
      :rules="[required]"
    ></v-text-field>
    <v-text-field
      outlined
      type="password"
      label="Contraseña"
      v-model="form.password"
      :rules="[required]"
    ></v-text-field>
    <v-layout>
      <v-btn class="mx-1" color="success" type="submit">Registrarse</v-btn>
    </v-layout>
  </v-form>
</template>
<script>
import Firebase from "firebase";
export default {
  data: () => ({
    form: {
      email: "",
      password: "",
    },
  }),
  methods: {
    required(value) {
      return !!value || "Este campo es obligatorio";
    },
    registrarse() {
      Firebase.auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then((data) => {
          data.user.updateProfile().then(() => {
            this.$router.push("/");
          });
        });
    },
  },
};
</script>
