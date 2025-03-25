<template>
  <div id="app">
    <div class="wrapper">
      <header>
        <a href="dashboard" @click="setPage">Dashboard</a> /
        <a href="about" @click="setPage">About</a> /
        <a href="notFound" @click="setPage">NotFound</a>
      </header>
      <main>
        <Dashboard v-if="page === 'dashboard'" />
        <About v-else-if="page === 'about'" />
        <NotFound v-else />
      </main>
    </div>
  </div>
</template>

<script>
import Dashboard from './views/Dashboard.vue';
import About from './views/About.vue';
import NotFound from './views/NotFound.vue';

export default {
  name: 'App',
  components: {
    Dashboard,
    About,
    NotFound,
  },
  data() {
    return {
      page: "",
    };
  },
  methods: {
    setPage() {
      this.page = location.pathname.slice(1)
    }
  },
  mounted() {
    const links = document.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();
        history.pushState({}, '', link.href);
        this.setPage();
      })
    })
    this.setPage();
    window.addEventListener('popstate', () => {
      this.setPage();
    });
  }
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
