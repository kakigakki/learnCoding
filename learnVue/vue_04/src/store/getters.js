export default {
  powCount(state) {
    return state.counter * state.counter;
  },
  powCountByTen(state, getters) {
    return getters.powCount / 10;
  },
};