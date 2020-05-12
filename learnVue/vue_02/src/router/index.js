import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Today from '../views/today.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        meta: {
            title: "首页"
        },
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        meta: {
            title: "关于"
        },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/today',
        name: 'today',
        meta: {
            title: "日记"
        },
        component: Today
    },
    {
        path: "/profile/:user",
        name: "profile",
        meta: {
            title: "个人"
        },
        component: () =>
            import ( /* webpackChunkName: "profile" */ '../views/profile.vue')
    },
    {
        path: "/hobbies",
        name: "hobbies",
        meta: {
            title: "兴趣"
        },
        component: () =>
            import ( /* webpackChunkName: "profile" */ '../views/hobbies.vue'),
        children: [

            {
                path: "home2",
                name: "Home2",
                meta: {
                    title: "兴趣2"
                },
                component: () =>
                    import ("../views/Home2.vue")
            },
            {
                path: "home3",
                name: "Home3",
                meta: {
                    title: "兴趣3"
                },
                component: () =>
                    import ("../views/Home3.vue")
            }
        ]
    }

]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next();
})

export default router