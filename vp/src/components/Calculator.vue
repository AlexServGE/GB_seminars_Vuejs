<template>
    <div>
        <div class="display">
            <input v-model.number="operand1" type="number">
            <input v-model.number="operand2" type="number">
            = {{ result }}
        </div>
        <div>
            <button @click="sum">+</button>
            <button @click="substract">-</button>
            <button @click="divide">/</button>
            <button @click="multiply">*</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Calculator",
    data() {
        return {
            operand1: 0,
            operand2: 0,
            result: 0
        }
    },
    methods: {
        sum() {
            this.result = this.operand1 + this.operand2;
        },
        substract() {
            this.result = this.operand1 - this.operand2;
        },
        divide() {
            this.result = this.operand1 / this.operand2;
        },
        multiply() {
            this.result = this.operand1 * this.operand2;
        },
    }
}
</script>

<style lang="scss" scoped></style>