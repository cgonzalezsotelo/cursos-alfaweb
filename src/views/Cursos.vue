<template>
  <div>
    <h1 class="text-center py-5 text-h2">Lista de Cursos</h1>
    <v-row>
      <v-col v-for="curso in $store.state.cursos.data" :key="curso.id">
        <Card :value="curso" />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import Card from "../components/app/Card.vue";
import Store from "../store";
export default {
  name: "Cursos",
  components: {
    Card,
  },
  // mounted() {
  //   this.$store.dispatch("cursos/traerTodosLosCursos");
  // },
  beforeRouteEnter(to, from, next) {
    Store.dispatch("cursos/traerTodosLosCursos");
    next();
  },
};
</script>
