import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: "/",
    redirect: "/zhuye"
  },
  {
    path: "/zhuye",
    name: "zhuye",
    component: () =>
      import ("../views/zhuye.vue")
  },
  {
    path: "/xinxi",
    name: "xinxi",
    component: () =>
      import ("../views/xinxi.vue")
  },
  {
    path: "/shangdian",
    name: "shangdian",
    component: () =>
      import ("../views/shangdian.vue")
  },
  {
    path: "/yonghu",
    name: "yonghu",
    component: () =>
      import ("../views/yonghu.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router