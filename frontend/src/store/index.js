import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: "",
  },
  getters: {},
  mutations: {
    setToken: function (state, token) {
      state.token = token;
      localStorage.setItem("token", JSON.stringify(token));
    },
  },
  actions: {
    setToken(context, token) {
      context.commit("setToken", token);
    },
  },
  modules: {},
});
