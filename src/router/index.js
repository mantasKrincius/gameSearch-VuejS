import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SinglePost from "@/components/SinglePost";
import SortResult from "@/views/SortResult";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/gameid/:id',
    name: 'Single Game',
    component: SinglePost
  },
  {
    path: '/sort',
    name: 'Sort by',
    component: SortResult
  },
]
// :platform/:type/:sortBy
const router = new VueRouter({
  routes
})

export default router
