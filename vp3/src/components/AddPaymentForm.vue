<template>
    <div class="wrapper">
        <input placeholder="date" v-model="date" />
        <input placeholder="category" v-model="category" />
        <input placeholder="value" type="number" v-model.number="value" />
        <button @click="onClick">Save!</button>
    </div>
</template>

<script>
export default {
    name: "AddPaymentForm",
    data() {
        return {
            date: "",
            category: "",
            value: ""
        }
    },
    computed: {
        getCurrentDate() {
            const today = new Date()
            const d = today.getDate()
            const m = today.getMonth() + 1
            const y = today.getFullYear()
            return `${d}.${m}.${y}`
        }
    },
    methods: {
        onClick() {
            const data = {
                date: this.date || this.getCurrentDate,
                category: this.category,
                value: this.value,
            };
            this.$emit('addNewPayment', data);
        }
    }
}
</script>

<style lang="scss"></style>