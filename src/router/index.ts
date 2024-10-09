import { createRouter, createWebHistory } from "vue-router";
 
import Home from '../pages/home/index.vue'
import TeaCulture from '../pages/teaCulture/index.vue'
import TeaDetails from '../pages/teaDetails/index.vue'
import TeaProduct from '../pages/teaProduct/index.vue'
import NewsList from '../pages/newsList/index.vue'
import AboutUs from '../pages/aboutUs/index.vue'

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
        }
    ],
    // scrollBehavior(to, from, savedPosition) {
    //     // 如果 `savedPosition` 存在，则保留之前的滚动位置
    //     if (savedPosition) {
    //       return savedPosition;
    //     } else {
    //       // 如果不存在，则返回顶部
    //       return { top: 0 };
    //     }
    //   }
})
 
export default router