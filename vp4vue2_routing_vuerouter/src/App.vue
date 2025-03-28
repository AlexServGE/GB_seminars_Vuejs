<template>
  <div id="app">
    <div class="wrapper">
      <header>
        <router-link to="/dashboard">Dashboard</router-link> /
        <router-link to="/about">About</router-link> /
        <span @click="goToPageNoFound">NotFound</span>
      </header>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
    };
  },
  methods: {
    goToPageNoFound() {
      this.$router.push({
        name: "notfound",
      }).catch((err) => {
        if (err.name !== 'NavigationDuplicated') {
          throw err; // Пробрасываем другие ошибки
        }
      })
    }
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
