import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: true,
  state: {
    modalData: null,
    activeProject: null,
    showDetails: false,
  },
  mutations: {
    setModalData(state, data) {
      state.modalData = data;
    },
    setActiveProject(state, project) {
      state.activeProject = project;
    },
    setShowDetails(state, showDetails) {
      state.showDetails = showDetails;
    },
  },
});

export default store;
