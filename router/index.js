import {createRouter,createWebHashHistory} from 'vue-router'
import home from '@/home.vue'
import list from '@/list.vue'
import detail from '@/detail.vue'
 const routes = [
     {path:'/',component:home},
     {path:'/list',component:list},
     {path:'/detail',component:detail},
 ]
 export default createRouter({
     history:createWebHashHistory(),
     routes
 }) 