<template>
    <div>
        <button @click="onClick">Clicked {{ counter }} times!</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            counter: 0,
        }
    },
    methods: {
        onClick() {
            this.counter++;
        },
        mouseOver() {
            console.log("Hovered on button");
        }
    },
    beforeCreate() {

    },
    created() {

    },
    beforeMount() {

    },
    mounted() {
        const btn = this.$el.querySelector('button')
        if (btn) {
            btn.addEventListener('mouseover', this.mouseOver)
        }
    },
    beforeUnmount() {
        const btn = this.$el.querySelector('button')
        if (btn) {
            btn.removeEventListener('mouseover', this.mouseOver)
        }
    },
}
</script>

<style lang="scss" scoped></style>