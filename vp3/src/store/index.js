import { createStore } from 'vuex';

const store = createStore({
  state: {
    paymentsList:[]
  },
  mutations: {
    setPaymentsListData(state, payload) {
      state.paymentsList = payload;
    },
    addPaymentListData(state,payload){
      state.paymentsList.push(payload);
    },
    editPaymentListFirstElement(state, patload){
      Vue.set()
    }
  },
  actions: {

  },
  getters: {
    getPaymentsListFullValuePrice: state => {
      return state.paymentsList.reduce((acc,cur)=>acc + cur.value,0)
    },
    getPaymentsList: state => state.paymentsList,
  },
});

export default store;
