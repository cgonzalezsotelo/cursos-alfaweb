<template>
  <v-form ref="cursoForm" @submit.prevent="crearCurso">
    <v-text-field
      outlined
      label="Nombre"
      v-model="formCurso.nombre"
      :rules="[required]"
    ></v-text-field>
    <v-text-field
      outlined
      label="URL de la imagen del curso"
      v-model="formCurso.imagen"
      :rules="[required]"
    ></v-text-field>
    <v-text-field
      outlined
      type="number"
      label="Cupos del Curso"
      v-model.number="formCurso.cupos"
      :rules="[required]"
    ></v-text-field>
    <v-text-field
      outlined
      type="number"
      label="Inscritos en los cursos"
      v-model.number="formCurso.inscritos"
      :rules="[required]"
    ></v-text-field>
    <v-text-field
      outlined
      label="Duración del curso"
      v-model="formCurso.duracion"
      :rules="[required]"
    ></v-text-field>
    <v-text-field
      outlined
      type="number"
      label="Costo del curso"
      v-model.number="formCurso.costo"
      :rules="[required]"
    ></v-text-field>
    <v-switch
      outlined
      label="Código del curso"
      v-model="formCurso.estado"
    ></v-switch>
    <v-text-area
      outlined
      label="Descripción del curso"
      v-model="formCurso.descripcion"
      :rules="[required]"
    ></v-text-area>
    <v-layout>
      <v-btn class="mx-1" color="success" type="submit">Actualizar</v-btn>
      <v-btn class="mx-1" color="amber" type="button" @click="resetForm"
        >Limpiar Formulario</v-btn
      >
      <v-btn class="mx-1" color="error" type="reset" @click="resetValidation"
        >Limpiar Validación</v-btn
      >
      <v-btn class="mx-1" color="primary" type="button" to="/admin"
        >Regresar</v-btn
      >
    </v-layout>
  </v-form>
</template>
<script>
import Firebase from "firebase";
export default {
  data: () => ({
    formCurso: {
      nombre: "",
      imagen: "",
      cupos: 0,
      inscritos: 0,
      duracion: "",
      costo: 0,
      estado: false,
      descripcion: "",
    },
  }),
  methods: {
    crearCurso() {
      if (this.$refs.cursoForm.validate()) {
        Firebase.firestore()
          .collection("cursos")
          .add(this.formCurso)
          .then(() => {
            this.loading = false;
            this.$router.push("/admin");
          })
          .catch(() => {
            this.loading = false;
          });
      }
    },
    resetValidation() {
      this.$refs.cursoForm.resetValidation();
    },
    resetForm() {},
    required(value) {
      return !!value || "Este campo es obligatorio";
    },
  },
};
</script>
