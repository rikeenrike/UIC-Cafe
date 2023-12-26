// store.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    userId: null,
  },
  mutations: {
    setUserId(state, userId) {
      state.userId = userId;
    },
  },
  actions: {
    login({ commit }, { id, password }) {
      const user = users.find((user) => user.id === id && user.password === password);
      if (user) {
        commit('setUserId', user.id);
      }
    },
  },
  getters: {
    userId: state => state.userId,
  },
});