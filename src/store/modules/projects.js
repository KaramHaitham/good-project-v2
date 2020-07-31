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
};

const getters = {
  isModal: (state) => state.isModal,
  isPlaying: (state) => state.isPlaying,
  isDonating: (state) => state.isDonating,
  donCounter: (state) => state.donCounter,
  getProject: (state) => state.project,
  getCampaigns: (state) => state.Adcampaigns,
  isSelected: (state) => state.isSelected,
  isConfirmed: (state) => state.isConfirmed,
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
  tgSelected({ commit }, payload) {
    commit("selected", payload);
  },
  tgIsPlaying({ commit }, payload) {
    commit("toggleIsPlaying", payload);
  },
  setIsConfirmed({ commit }, payload) {
    commit("confirm", payload);
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
  increment: (state) => {
    state.donCounter++;
  },
  projectSetter: (state, payload) => {
    state.isProject = payload;
  },
  adsSetter: (state, payload) => {
    state.Adcampaigns = payload;
  },
  assoSetter: (state, payload) => {
    state.Assos = payload;
  },
  selected: (state, payload) => {
    state.isSelected = payload;
  },
  confirm: (state, payload) => {
    state.isConfirmed = payload;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
