import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { moduloSesion } from "./modules/sesion";
import { moduloPacientes } from "./modules/pacientes";

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    sesion: moduloSesion,
    pacientes: moduloPacientes,
  },
});
