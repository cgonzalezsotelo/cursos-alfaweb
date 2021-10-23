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
    // async handleFormSubmit() {
    //   if (this.$refs.userFormRegister.validate()) {
    //     try {
    //       await Firebase.auth().signInWithEmailAndPassword(
    //         this.form.email,
    //         this.form.password
    //       );
    //       this.$store.dispatch(
    //         "sesion/configurarUsuario",
    //         Firebase.auth().currentUser
    //       );
    //       this.$router.push("/cursos");
    //       this.$emit("success");
    //     } catch (e) {
    //       console.error("me fue mal con el login");
    //     }
    //   }
    // },
    resetValidation() {
      this.$$refs.userFormRegister.resetValidation();
    },
    resetForm() {},
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
