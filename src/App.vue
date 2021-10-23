<template>
  <v-app>
    <Navbar @toggle-drawer="toggleDrawer" />
    <Sidebar :value="drawer" />
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/app/Navbar.vue";
import Sidebar from "./components/app/Sidebar.vue";
export default {
  name: "App",
  components: {
    Navbar,
    Sidebar,
  },

  data: () => ({
    drawer: false,
  }),
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
  },
};
</script>
