import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Today from '../views/today.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/today',
        name: 'today',
        component: Today
    },
    {
        path: "/profile/:user",
        name: "profile",
        component: () =>
            import ( /* webpackChunkName: "profile" */ '../views/profile.vue')
    },
    {
        path: "/hobbies",
        name: "hobbies",
        component: () =>
            import ( /* webpackChunkName: "profile" */ '../views/hobbies.vue'),
        children: [{
                path: "/hobbies",
                name: "home2",
                component: () =>
                    import ("../views/Home2.vue")
            },
            {
                path: "home2",
                name: "Home2",
                component: () =>
                    import ("../views/Home2.vue")
            },
            {
                path: "home3",
                name: "Home4",
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

export default router