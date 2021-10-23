<template>
  <div>
    <h1 class="text-h3 text-center py-3">Agregar Paciente</h1>
    <FormPaciente />
  </div>
</template>
<script>
import FormPaciente from "../components/app/FormPaciente.vue";
export default {
  components: { FormPaciente },
};
</script>
