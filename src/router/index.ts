import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Makeup from '../views/Makeup.vue';
import MakeupFace from '../views/MakeupFace.vue';
import MakeupLips from '../views/MakeupLips.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/makeup',
    name: 'Makeup',
    component: Makeup
  },
  {
    path: '/makeupface',
    name: 'MakeupFace',
    component: MakeupFace
  },
  {
    path: '/makeuplips',
    name: 'Makeuplips',
    component: MakeupLips
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
