import Vue from "vue";
import Vuex from "vuex";

import moduleA from "./modules/moduleA";
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter: 0,
  },
  mutations,
  getters,
  actions,
  modules: {
    moduleA,
  },
});