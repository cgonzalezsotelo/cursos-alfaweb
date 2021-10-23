import Firebase from "firebase";

export const moduloCursos = {
  namespaced: true,
  state: {
    data: [],
  },
  getters: {
    alumnosPermitidos(state) {
      return state.data.reduce((accumulator, item) => {
        accumulator = accumulator + item.cupos;
        return accumulator;
      }, 0);
    },
    alumnosInscritos(state) {
      return state.data.reduce((accumulator, item) => {
        accumulator = accumulator + item.inscritos;
        return accumulator;
      }, 0);
    },
    cuposRestantes(state) {
      return state.data.reduce((accumulator, item) => {
        accumulator = accumulator + item.cupos - item.inscritos;
        return accumulator;
      }, 0);
    },
    cursosTerminados(state) {
      return state.data.reduce((accumulator, item) => {
        accumulator = accumulator + item.estado;
        return accumulator;
      }, 0);
    },
    cursosActivos(state) {
      return state.data.reduce((accumulator, item) => {
        accumulator = accumulator + !item.estado;
        return accumulator;
      }, 0);
    },
    cantidadCursos(state) {
      return state.data.length;
    },
  },
  mutations: {
    SET_CURSOS_DATA(state, nuevoCurso) {
      state.data = nuevoCurso;
    },
  },
  actions: {
    traerTodosLosCursos(context) {
      Firebase.firestore()
        .collection("cursos")
        .get()
        .then((documents) => {
          const cursos = [];
          documents.forEach((document) => {
            cursos.push({ id: document.id, ...document.data() });
          });
          context.commit("SET_CURSOS_DATA", cursos);
        });
    },
  },
};
