import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    paymentsList:[],
    categoryList:[],
  },
  mutations: {
    setPaymentsListData(state, payload) {
      state.paymentsList = payload;
    },
    addPaymentListData(state,payload){
      state.paymentsList.push(payload);
    },
    editPaymentListFirstElement(state, payload){
      Vue.set(state.paymentsList, 0 , payload)
      // state.paymentsList[0] = payload
      // state.paymentsList = [...state.paymentsList]
    },
    setCategoryData(state,payload){
      state.categoryList = payload;
    }
  },
  actions: {
    // fetchData(context){
    //   new Promise().then(res=>context.commit('setPaymentsListData',res))
    // },
    fetchDataStore({commit}) {
      return new Promise((resolve)=>{
        setTimeout(()=>{
          const items = []
          for (let i = 1; i < 101; i++) {
            items.push({
              date: '28.03.2020',
              category: "food",
              value: i,
              id:i,
            })
          }
          resolve(items)
        }, 2000)
      }).then((res)=> commit('setPaymentsListData', res))
    },
    fetchCategory({commit}){
      return new Promise((resolve)=> {
        setTimeout(()=> {
          const items = ['Sport','Education','Internet','Food','Transport'];
          resolve(items);
        },2000);
      }).then((res)=> commit("setCategoryData", res));
    },
  },
  getters: {
    getPaymentsListFullValuePrice: state => {
      return state.paymentsList.reduce((acc,cur)=>acc + cur.value,0)
    },
    getPaymentsList: state => state.paymentsList,
    getCategoryList: state => state.categoryList,
  },
});

export default store;
