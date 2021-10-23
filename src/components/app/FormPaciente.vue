<template>
  <v-form ref="pacienteForm" @submit.prevent="crearPaciente">
    <v-text-field
      outlined
      label="Nombre"
      v-model="formPaciente.nombre"
      :rules="[required]"
    ></v-text-field>
    <v-text-field
      outlined
      label="Apellido"
      v-model="formPaciente.apellido"
      :rules="[required]"
    ></v-text-field>
    <v-text-field
      outlined
      label="Previsión"
      v-model="formPaciente.prevision"
      :rules="[required]"
    ></v-text-field>
    <v-layout>
      <v-btn class="mx-1" color="success" type="submit">Agregar Paciente</v-btn>
      <v-btn class="mx-1" color="primary" type="button" to="/pacientes"
        >Regresar</v-btn
      >
    </v-layout>
  </v-form>
</template>
<script>
import Firebase from "firebase";
export default {
  data: () => ({
    formPaciente: {
      nombre: "",
      apellido: "",
      prevision: "",
    },
  }),
  methods: {
    crearPaciente() {
      if (this.$refs.pacienteForm.validate()) {
        Firebase.firestore()
          .collection("pacientes")
          .add(this.formPaciente)
          .then(() => {
            this.$router.push("/admin");
          })
          .catch(() => {});
      }
    },
    required(value) {
      return !!value || "Este campo es obligatorio";
    },
  },
};
</script>
