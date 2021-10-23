<template>
  <div>
    <h1 class="text-h3 text-center py-2">Editar Pacientes</h1>
    <v-form ref="formEditPaciente" @submit.prevent="actualizarPacientes">
      <v-text-field
        outlined
        label="Nombre"
        v-model="paciente.nombre"
        :rules="[required]"
      ></v-text-field>
      <v-text-field
        outlined
        label="Apellido"
        v-model="paciente.apellido"
        :rules="[required]"
      ></v-text-field>
      <v-text-field
        outlined
        label="Previsión"
        v-model="paciente.prevision"
        :rules="[required]"
      ></v-text-field>
      <v-layout>
        <v-btn class="mx-1" color="success" type="submit">Actualizar</v-btn>
      </v-layout>
    </v-form>
  </div>
</template>
<script>
import Firebase from "firebase";
export default {
  beforeRouteEnter(to, from, next) {
    Firebase.firestore()
      .collection("pacientes")
      .doc(to.params.id)
      .get()
      .then((document) => {
        next((vm) => {
          vm.paciente = { id: document.id, ...document.data() };
        });
      });
  },
  data: () => ({
    paciente: null,
  }),
  methods: {
    actualizarPacientes() {
      if (this.$refs.formEditPaciente.validate()) {
        this.loading = true;
        Firebase.firestore()
          .collection("pacientes")
          .doc(this.paciente.id)
          .update(this.paciente)
          .then(() => {
            this.loading = false;
            this.$router.push("/pacientes");
          });
      }
    },
  },
};
</script>
