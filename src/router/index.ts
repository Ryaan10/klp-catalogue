import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Makeup from '../views/Makeup.vue';
import MakeupFace from '../views/MakeupFace.vue';
import MakeupLips from '../views/MakeupLips.vue';
import MakeupBrush from '../views/MakeupBrushes.vue';
import MakeupEyes from '../views/MakeupEyes.vue';
import Bodycare from '../views/Bodycare.vue';

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
  },
  {
    path: '/makeupbrush',
    name: 'Makeupbrush',
    component: MakeupBrush
  },
  {
    path: '/makeupeyes',
    name: 'Makeupeyes',
    component: MakeupEyes
  },
  {
    path: '/bodycare',
    name: 'bodycare',
    component: Bodycare
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
