<template>
  <v-navigation-drawer :value="value" @input="$emit('input', $event)" app>
    <v-list>
      <v-list-item
        v-for="(item, index) in items"
        :key="index"
        link
        :to="item.to"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  data: () => ({
    items: [
      {
        title: "Inicio",
        icon: "mdi-home",
        to: "/",
      },
      {
        title: "Cursos",
        icon: "mdi-apps",
        to: "/cursos",
      },
      {
        title: "Administración",
        icon: "mdi-pencil",
        to: "/admin",
      },
      {
        title: "Crear Curso",
        icon: "mdi-plus",
        to: "/crearCurso",
      },
    ],
  }),
  props: ["value"],
};
</script>
