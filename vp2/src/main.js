import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

const app = createApp(App);

// app.use(router); // Использование Vue Router
app.use(store); // Использование Vuex

app.mount('#app');