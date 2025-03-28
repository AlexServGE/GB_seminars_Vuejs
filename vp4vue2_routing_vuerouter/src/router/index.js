import Vue from 'vue'
import VueRouter from 'vue-router'

import Dashboard from '@/views/Dashboard.vue'
import About from '@/views/About.vue'
import NotFound from '@/views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
  },
  {
    path: '/dashboard/:page',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/notfound',
    name: 'notfound',
    component: NotFound
  },
  {
    path: "*", //все пути, которые не соответствуют выше указанным, будут перенаправлены на notfound
    component: NotFound //данный путь следует указывать в самом конце
  }
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

const userAuth = true

router.beforeEach((to, from, next) => {
  if (to.name !== "notfound" && !userAuth) {
    next({
      name: "notfound", //путь, по которому необходимо отправить пользователя, в случае отсутсвия авторизации
    })
  } else {
    next() //next() без аргументов означает, что переход позволено осуществить по запрошенному пути
  }
});

const getTitleByRoutes = routeName => {
  return {
    dashboard: 'Ура, у нас есть страница наших трат',
    about: 'Страница о сервисе',
    notfound: 'Страница не найдена'
  }[routeName]
}

router.afterEach((to) => {
  document.title = getTitleByRoutes(to.name)
});

export default router