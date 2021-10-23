import Firebase from "firebase";

export const moduloPacientes = {
  namespaced: true,
  state: {
    data: [],
  },
  mutations: {
    SET_PACIENTES_DATA(state, nuevoPaciente) {
      state.data = nuevoPaciente;
    },
  },
  actions: {
    traerTodosLosPacientes(context) {
      Firebase.firestore()
        .collection("pacientes")
        .get()
        .then((documents) => {
          const pacientes = [];
          documents.forEach((document) => {
            pacientes.push({ id: document.id, ...document.data() });
          });
          context.commit("SET_PACIENTES_DATA", pacientes);
        });
    },
  },
};
