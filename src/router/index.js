import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Cursos from "../views/Cursos.vue";
import CursosAdmin from "../views/CursosAdmin.vue";
import CrearCurso from "../views/CrearCurso.vue";
import EditarCurso from "../views/EditarCurso.vue";

import Firebase from "firebase";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cursos",
    name: "Cursos",
    component: Cursos,
    meta: {
      login: true,
    },
  },
  {
    path: "/admin",
    name: "Administracion",
    component: CursosAdmin,
    meta: {
      login: true,
    },
  },
  {
    path: "/crearCurso",
    name: "Crear Curso",
    component: CrearCurso,
    meta: {
      login: true,
    },
  },
  {
    path: "/cursos/:id",
    name: "Editar Curso",
    component: EditarCurso,
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
    next("cursos");
  } else {
    next();
  }
});

export default router;
