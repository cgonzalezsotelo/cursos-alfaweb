<template>
  <div>
    <h1 class="text-h3 text-center py-2">Editar Curso</h1>
    <v-form ref="formEditCurso" @submit.prevent="actualizarCurso">
      <v-text-field
        outlined
        label="Nombre"
        v-model="curso.nombre"
        :rules="[required]"
      ></v-text-field>
      <v-text-field
        outlined
        label="URL de la imagen del curso"
        v-model="curso.imagen"
        :rules="[required]"
      ></v-text-field>
      <v-text-field
        outlined
        type="number"
        label="Cupos del Curso"
        v-model.number="curso.cupos"
        :rules="[required]"
      ></v-text-field>
      <v-text-field
        outlined
        type="number"
        label="Inscritos en los cursos"
        v-model.number="curso.inscritos"
        :rules="[required]"
      ></v-text-field>
      <v-text-field
        outlined
        label="Duración del curso"
        v-model="curso.duracion"
        :rules="[required]"
      ></v-text-field>
      <v-text-field
        outlined
        type="number"
        label="Costo del curso"
        v-model.number="curso.costo"
        :rules="[required]"
      ></v-text-field>
      <v-switch outlined label="Terminado" v-model="curso.estado"></v-switch>
      <v-text-area
        outlined
        label="Descripción del curso"
        v-model="curso.descripcion"
        :rules="[required]"
      ></v-text-area>
      <v-layout>
        <v-btn class="mx-1" color="success" type="submit">Agregar</v-btn>
        <v-btn class="mx-1" color="amber" type="button" @click="resetForm"
          >Limpiar Formulario</v-btn
        >
        <v-btn class="mx-1" color="error" type="reset" @click="resetValidation"
          >Limpiar Validación</v-btn
        >
      </v-layout>
    </v-form>
  </div>
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
    curso: null,
  }),
  methods: {
    actualizarCurso() {
      if (this.$refs.formEditCurso.validate()) {
        this.loading = true;
        Firebase.firestore()
          .collection("cursos")
          .doc(this.curso.id)
          .update(this.curso)
          .then(() => {
            this.loading = false;
            this.$router.push("/admin");
          });
      }
    },
  },
};
</script>
