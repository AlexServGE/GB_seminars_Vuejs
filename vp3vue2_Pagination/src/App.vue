<template>
  <div id="app">
    <header>
      <div class="total" v-if="total">Total: {{ total }}</div>
    </header>
    <main>
      <AddPaymentForm />
      <PaymentsDisplay :items="currentElements" />
      <Pagination :n="n" :cur="page" :length="getPaymentsList.length" @paginate="changePage"></Pagination>
    </main>
  </div>
</template>

<script>

import AddPaymentForm from './components/AddPaymentForm.vue'
import Pagination from './components/Pagination.vue';
import PaymentsDisplay from './components/PaymentsDisplay.vue'
import { mapMutations, mapGetters, mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    AddPaymentForm,
    PaymentsDisplay,
    Pagination,
  },
  data() {
    return {
      show: true,
      page: 1,
      n: 10,
    };
  },
  computed: {
    ...mapGetters(['getPaymentsList']),
    total() {
      return this.$store.getters.getPaymentsListFullValuePrice
    },
    currentElements() {
      const { n, page } = this;
      return this.getPaymentsList.slice(n * (page - 1), n * (page - 1) + n);
    }
  },
  methods: {
    ...mapMutations(['setPaymentsListData']),
    ...mapActions({ fetchDataStore: 'fetchDataStore' }),
    changePage(p) {
      this.page = p;
    }
  },
  created() {
    // this.setPaymentsListData(this.fetchData())
    // this.$store.dispatch('fetchData')
    this.fetchDataStore();
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
