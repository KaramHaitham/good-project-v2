//aplication level state
const state = {
  isPlaying: false,
  isModal: false,
  isDonating: false,
  isSelected: false,
  isConfirmed: false,
  donCounter: 0,
  project: {},
  Adcampaigns: [],
  Assos: [],
  allProjects: [],
};

const getters = {
  isModal: state => state.isModal,
  isPlaying: state => state.isPlaying,
  isDonating: state => state.isDonating,
  donCounter: state => state.donCounter,
  getProject: state => state.project,
  getCampaigns: state => state.Adcampaigns,
  getProjects: state => state.allProjects,
  isSelected: state => state.isSelected,
  isConfirmed: state => state.isConfirmed,
};

const actions = {
  tgModal({ commit, payload }) {
    commit("toggleModal", payload);
  },
  tgIsDonating({ commit }, payload) {
    commit("toggleIsDonating", payload);
  },
  incrementDon({ commit }, payload) {
    commit("increment", payload);
  },
  setProject({ commit }, project) {
    commit("projectSetter", project);
  },

  dispatchAdcamp({ commit }, campaigns) {
    commit("adsSetter", campaigns);
  },
  dispatchAsso({ commit }, assos) {
    commit("assoSetter", assos);
  },
  dispatchProjects({ commit }, projects) {
    commit("projectsSetter", projects);
  },
  tgSelected({ commit }, payload) {
    commit("selected", payload);
  },
  tgIsPlaying({ commit }, payload) {
    commit("toggleIsPlaying", payload);
  },
  setIsConfirmed({ commit }, payload) {
    commit("confirm", payload);
  },
  dispUpdatedProject({ commit }, payload) {
    commit("updateProject", payload);
  },
};

const mutations = {
  toggleModal: (state, payload) => {
    state.isModal = payload;
  },
  toggleIsPlaying: (state, payload) => {
    state.isPlaying = payload;
  },
  toggleIsDonating: (state, payload) => {
    state.isDonating = payload;
  },
  increment: state => {
    state.donCounter++;
  },
  projectSetter: (state, payload) => {
    state.project = payload;
  },
  adsSetter: (state, payload) => {
    state.Adcampaigns = payload;
  },
  assoSetter: (state, payload) => {
    state.Assos = payload;
  },
  projectsSetter: (state, payload) => {
    state.allProjects = payload;
  },
  selected: (state, payload) => {
    state.isSelected = payload;
  },
  confirm: (state, payload) => {
    state.isConfirmed = payload;
  },
  updateProject: (state, payload) => {
    //finding the project
    const index = state.allProjects.findIndex((pr) => pr._id === payload._id);
    //replacing old project with new project
    if (index !== -1) {
      state.allProjects.splice(index, 1, payload);
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations,
};
