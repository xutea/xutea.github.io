import { createRouter, createWebHistory } from "vue-router";
 
import Home from '../pages/home/index.vue'
import TeaCulture from '../pages/teaCulture/index.vue'
import TeaDetails from '../pages/teaDetails/index.vue'
import TeaProduct from '../pages/teaProduct/index.vue'
import NewsList from '../pages/newsList/index.vue'
import AboutUs from '../pages/aboutUs/index.vue'
import JoinUs from '../pages/joinUs/index.vue'

const router = createRouter ({
    history:createWebHistory(), // 路由器的工作模式
    routes:[ // 一个一个的路由规则
        {
            path:'/',
            component:Home
        },
        {
            path:'/home',
            component:Home
        },
        {
            path:'/teaCulture',
            component:TeaCulture
        },
        {
            path:'/teaDetail',
            component:TeaDetails
        },
        {
            path:'/teaProduct',
            component:TeaProduct
        },
        {
            path:'/news',
            component:NewsList
        },
        {
            path:'/aboutUs',
            component: AboutUs
        },
        {
            path:'/joinUs',
            component: JoinUs
        }
    ],
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            console.log('to-from-',to, from)
            return savedPosition
        } else {
            return {  top: 0 }
        }

    }
})
export default router