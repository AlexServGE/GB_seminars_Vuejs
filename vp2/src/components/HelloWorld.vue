<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <template v-if="result < 0">Результат меньше 0</template>
    <div v-for="(item, index) in myCollection" :key="index">{{ item }} {{ index }}</div>
    {{ fio }}
  </div>


</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      result: -1,
      myCollection: [1, 2, 3, 4, 5],
      lastName: "LastName",
      firstName: "FirstName",
    };
  },
  methods: {
    fib(n) {
      return n <= 1 ? n : this.fib(n - 1) + this, fib(n - 2)
    }
  },
  computed: {
    fib1() {
      return this.fib(this.operand1);
    },
    fib2() {
      return this.fib(this.operand2);
    },
    fio() {
      return `${this.lastName} ${this.firstName}`
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
