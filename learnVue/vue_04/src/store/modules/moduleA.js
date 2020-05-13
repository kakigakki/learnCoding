export default {
  state: {
    counter2: 10,
  },
  mutations: {
    doubleCounter(state) {
      state.counter2 *= 2;
    },
  },
  getters: {
    doubleCounter(state) {
      return state.counter2 * 2;
    },
  },
  actions: {},
};