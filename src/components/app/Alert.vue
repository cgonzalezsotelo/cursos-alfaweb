<template>
  <div>
    <v-alert dense outlined color="purple">
      Cantidad de alumnos permitidos:
      {{ alumnosPermitidos }}
    </v-alert>
    <v-alert dense outlined color="blue">
      Cantidad de alumnos inscritos: {{ alumnosInscritos }}
    </v-alert>
    <v-alert dense outlined color="red">
      Cantidad total de cupos restantes: {{ cuposRestantes }}
    </v-alert>
    <v-alert dense outlined color="pink">
      Cantidad total de curso terminados: {{ cursosTerminados }}
    </v-alert>
    <v-alert dense outlined color="brown">
      Cantidad total de cursos activos: {{ cursosActivos }}
    </v-alert>
    <v-alert dense outlined color="orange">
      Cantidad total de cursos: {{ cantidadCursos }}
    </v-alert>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      alumnosPermitidos: "cursos/alumnosPermitidos",
      alumnosInscritos: "cursos/alumnosInscritos",
      cuposRestantes: "cursos/cuposRestantes",
      cursosTerminados: "cursos/cursosTerminados",
      cursosActivos: "cursos/cursosActivos",
      cantidadCursos: "cursos/cantidadCursos",
    }),
  },
};
</script>
