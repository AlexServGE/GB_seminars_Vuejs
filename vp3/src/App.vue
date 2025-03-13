<template>
  <div id="app">
    <header>
      <div class="total" v-if="total">Total: {{ total }}</div>
    </header>
    <main>
      <AddPaymentForm  />
      <PaymentsDisplay :items="getPaymentsList" />
    </main>
  </div>
</template>

<script>

import AddPaymentForm from './components/AddPaymentForm.vue'
import PaymentsDisplay from './components/PaymentsDisplay.vue'
import { mapMutations, mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    AddPaymentForm,
    PaymentsDisplay,
  },
  data() {
    return {
      show: true,
    };
  },
  computed:{
    ...mapGetters(['getPaymentsList']),
    total(){
      return this.$store.getters.getPaymentsListFullValuePrice
    }
  },
  methods: {
    ...mapMutations(['setPaymentsListData']),

    fetchData() {
      return [
        {
          date: '28.03.2020',
          category: "food",
          value: 169,
        },
        {
          date: '24.03.2020',
          category: "transport",
          value: 360,
        },
        {
          date: '24.03.2020',
          category: "food",
          value: 532,
        },
      ];
    },
  },
  created() {
    this.setPaymentsListData(this.fetchData())
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
