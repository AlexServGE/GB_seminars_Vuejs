<template>
  <div id="app">
    <div class="wrapper">
      <header>
        <div class="title">My personal costs</div>
      </header>
      <main>
        <AddPaymentForm @addNewPayment="addToPaymentList"/>
        <PaymentsDisplay :items="paymentsList" />
      </main>
    </div>
  </div>
</template>

<script>

import AddPaymentForm from './components/AddPaymentForm.vue';
import PaymentsDisplay from './components/PaymentsDisplay.vue';

export default {
  name: 'App',
  components: {
    PaymentsDisplay,
    AddPaymentForm,
  },
  data() {
    return {
      show: true,
      paymentsList: []
    };
  },
  methods: {
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
    addToPaymentList(data) {
      // this.paymentsList.push(data);
      this.paymentsList = [...this.paymentsList, data]
    },
  },
  created() {
    this.paymentsList = this.fetchData()
  },
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
