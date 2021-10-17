<template>
  <v-data-table :items="$store.state.cursos.data" :headers="headers">
    <template v-slot:item.costo="{ item }">
      <v-chip color="success">${{ item.costo.toLocaleString("de-DE") }}</v-chip>
    </template>
    <template v-slot:item.estado="{ item }">
      <v-chip :color="item.estado ? 'info' : 'gray'">{{
        item.estado ? "Si" : "No"
      }}</v-chip>
    </template>
    <template v-slot:item.acciones="{ item }">
      <v-btn icon @click="editarCurso(item)">
        <v-icon> mdi-pencil-outline </v-icon>
      </v-btn>
      <v-btn icon @click="borrarCurso(item)">
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
      .collection("cursos")
      .doc(to.params.id)
      .get()
      .then((document) => {
        next((vm) => {
          vm.curso = { id: document.id, ...document.data() };
        });
      });
  },
  data: () => ({
    headers: [
      { text: "Curso", value: "nombre" },
      { text: "Cupos", value: "cupos" },
      { text: "Incritos", value: "inscritos" },
      { text: "Duración", value: "duracion" },
      { text: "Costo", value: "costo" },
      { text: "Terminado", value: "estado" },
      { text: "Acciones", value: "acciones" },
    ],
    curso: null,
  }),
  mounted() {
    this.$store.dispatch("cursos/traerTodosLosCursos");
  },
  methods: {
    editarCurso(item) {
      this.$router.push(`cursos/${item.id}`);
    },
    borrarCurso(item) {
      Firebase.firestore()
        .collection("cursos")
        .doc(item.id)
        .delete()
        .then(() => {
          console.log("elemento borrado");
          this.$store.dispatch("cursos/traerTodosLosCursos");
        });
    },
  },
};
</script>
