<template>
  <v-container>
    <v-row justify="space-around">
      <v-card width="400">
        <v-img height="200px" :src="value.imagen"> </v-img>
        <v-card-text>
          <v-card-title class="text-center">{{ value.nombre }}</v-card-title>
        </v-card-text>

        <v-card-text>
          <div class="font-weight-bold ml-8 mb-2">Información</div>

          <v-timeline align-top dense>
            <v-timeline-item color="purple" small>
              <div>
                <div class="font-weight-normal">
                  Costo:
                  <strong>${{ value.costo.toLocaleString("de-DE") }}</strong>
                </div>
                <div>
                  Duración <strong>{{ value.duracion }}</strong>
                </div>
              </div>
            </v-timeline-item>
          </v-timeline>
          <v-timeline align-top dense>
            <v-timeline-item color="green" small>
              <div>
                <div class="font-weight-normal">
                  Cupos: <strong>{{ value.cupos }}</strong>
                </div>
                <div>
                  Completado <strong>{{ value.estado ? "si" : "no" }}</strong>
                </div>
              </div>
            </v-timeline-item>
            <v-timeline-item color="purple" small>
              <div>
                <div class="font-weight-normal">
                  Descripción: <strong>{{ value.descripcion }}</strong>
                </div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>
<script>
export default {
  props: ["value"],
};
</script>
