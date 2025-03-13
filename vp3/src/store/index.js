import { createStore } from 'vuex';

const store = createStore({
  state: {
    paymentsList:[]
  },
  mutations: {
    setPaymentsListData(state, payload) {
      state.paymentsList = payload;
    },
  },
  actions: {
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit('increment');
      }, 1000);
    },
  },
  getters: {
    doubleCount(state) {
      return state.count * 2;
    },
  },
});

export default store;
