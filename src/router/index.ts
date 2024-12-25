import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
//import OnBoading from '../views/OnBoading.vue';
import Sighin from '../views/SighIn.vue';


const routes: Array<RouteRecordRaw> = [
  // {
  //   path: '/onboading',
  //   name : 'OnBoading',
  //   component: OnBoading
  // },
  {
    path: '/',
    name: 'Sigh_In',
    component: Sighin
  },
  {
    path:'/home',
    name :'Home',
    component:HomePage
  },
   
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
