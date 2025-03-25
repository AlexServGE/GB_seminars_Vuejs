<template>
    <main>
        <AddPaymentForm />
        <PaymentsDisplay :items="currentElements" />
        <Pagination :n="n" :cur="page" :length="getPaymentsList.length" @paginate="changePage" />
    </main>
</template>

<script>
import AddPaymentForm from '../components/AddPaymentForm.vue'
import Pagination from '../components/Pagination.vue';
import PaymentsDisplay from '../components/PaymentsDisplay.vue'
import { mapMutations, mapGetters, mapActions } from 'vuex'
export default {
    name: 'Dashboard',
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

<style></style>