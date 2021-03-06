import Vue from "vue";
import Vuex from "vuex";
import projects from "../store/modules/projects.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { projects }
});
