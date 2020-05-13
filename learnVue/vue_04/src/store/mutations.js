import { ADD, MINUS, COUNT, COUNTLATER } from "./mutations-type";
export default {
  [ADD](state) {
    state.counter++;
  },
  [MINUS](state) {
    state.counter--;
  },
  [COUNT](state, payload) {
    console.log(payload);
    state.counter = state.counter + payload.count * payload.times;
  },
  [COUNTLATER](state, payload) {
    state.counter += payload;
  },
};