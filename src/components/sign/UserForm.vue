<template>
  <v-form ref="userForm" @submit.prevent="handleFormSubmit">
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
      <v-btn class="mx-1" color="success" type="submit">Iniciar Sesión</v-btn>
      <v-btn class="mx-1" color="amber" type="button" @click="resetValidation"
        >Reiniciar Validación</v-btn
      >
      <v-btn class="mx-1" color="error" type="reset" @click="resetForm"
        >Reiniciar Formulario</v-btn
      >
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
    async handleFormSubmit() {
      if (this.$refs.userForm.validate()) {
        try {
          await Firebase.auth().signInWithEmailAndPassword(
            this.form.email,
            this.form.password
          );
          this.$store.dispatch(
            "sesion/configurarUsuario",
            Firebase.auth().currentUser
          );
          this.$router.push("/cursos");
          this.$emit("success");
        } catch (e) {
          console.error("me fue mal con el login");
        }
      }
    },
    resetValidation() {
      this.$$refs.userForm.resetValidation();
    },
    resetForm() {},
    required(value) {
      return !!value || "Este campo es obligatorio";
    },
  },
};
</script>
