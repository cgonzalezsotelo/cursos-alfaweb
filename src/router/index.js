import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Pacientes from "../views/Pacientes.vue";
import CrearPaciente from "../views/CrearPaciente.vue";
import EditarPaciente from "../views/EditarPaciente.vue";

import Firebase from "firebase";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/pacientes",
    name: "Pacientes",
    component: Pacientes,
    meta: {
      login: true,
    },
  },
  {
    path: "/crearPaciente",
    name: "Crear Paciente",
    component: CrearPaciente,
    meta: {
      login: true,
    },
  },
  {
    path: "/pacientes/:id",
    name: "Editar Paciente",
    component: EditarPaciente,
    meta: {
      login: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  let email = Firebase.auth().currentUser;
  let authRequired = to.matched.some((route) => route.meta.login);
  if (!email && authRequired) {
    next("/");
  } else if (email && !authRequired) {
    next("pacientes");
  } else {
    next();
  }
});

export default router;
