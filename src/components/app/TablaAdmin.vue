<template>
  <v-data-table :items="$store.state.pacientes.data" :headers="headers">
    <template v-slot:item.acciones="{ item }">
      <v-btn icon @click="editarPaciente(item)">
        <v-icon> mdi-pencil-outline </v-icon>
      </v-btn>
      <v-btn icon @click="borrarPaciente(item)">
        <v-icon> mdi-delete-empty </v-icon>
      </v-btn>
    </template>
  </v-data-table>
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
    headers: [
      { text: "Nombre", value: "nombre" },
      { text: "Apellido", value: "apellido" },
      { text: "Prevision", value: "prevision" },
      { text: "Acciones", value: "acciones" },
    ],
    paciente: null,
  }),
  mounted() {
    this.$store.dispatch("pacientes/traerTodosLosPacientes");
  },
  methods: {
    editarPaciente(item) {
      this.$router.push(`pacientes/${item.id}`);
    },
    borrarPaciente(item) {
      Firebase.firestore()
        .collection("pacientes")
        .doc(item.id)
        .delete()
        .then(() => {
          console.log("elemento borrado");
          this.$store.dispatch("pacientes/traerTodosLosPacientes");
        });
    },
  },
};
</script>
