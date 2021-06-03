import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Makeup from '../views/Makeup.vue';
import MakeupLips from '../views/MakeupLips.vue';
import MakeupBrush from '../views/MakeupBrushes.vue';
import MakeupEyes from '../views/MakeupEyes.vue';
import Bodycare from '../views/Bodycare.vue';
import Packages from '../views/Packages.vue';

import MakeupFaceList from '../views/MakeupFace/MakeupFaceList.vue';
import MakeupFaceItem1 from '../views/MakeupFace/Item1.vue';
import MakeupFaceItem2 from '../views/MakeupFace/Item2.vue';
import MakeupFaceItem3 from '../views/MakeupFace/Item3.vue';
import MakeupFaceItem4 from '../views/MakeupFace/Item4.vue';
import MakeupFaceItem5 from '../views/MakeupFace/Item5.vue';
import MakeupFaceItem6 from '../views/MakeupFace/Item6.vue';
import MakeupFaceItem7 from '../views/MakeupFace/Item7.vue';
import MakeupFaceItem8 from '../views/MakeupFace/Item8.vue';
import MakeupFaceItem9 from '../views/MakeupFace/Item9.vue';
import MakeupFaceItem10 from '../views/MakeupFace/Item10.vue';
import MakeupFaceItem11 from '../views/MakeupFace/Item11.vue';
import MakeupFaceItem12 from '../views/MakeupFace/Item12.vue';
import MakeupFaceItem13 from '../views/MakeupFace/Item13.vue';

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
    path: '/makeupfacelist',
    name: 'MakeupFaceList',
    component: MakeupFaceList
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
  },
  {
    path: '/packages',
    name: 'packages',
    component: Packages
  },
  {
    path: '/MakeupFaceItem1',
    name: 'MakeupFaceItem1',
    component: MakeupFaceItem1
  },
  {
    path: '/MakeupFaceItem2',
    name: 'MakeupFaceItem2',
    component: MakeupFaceItem2
  },
  {
    path: '/MakeupFaceItem3',
    name: 'MakeupFaceItem3',
    component: MakeupFaceItem3
  },
  {
    path: '/MakeupFaceItem4',
    name: 'MakeupFaceItem4',
    component: MakeupFaceItem4
  },
  {
    path: '/MakeupFaceItem5',
    name: 'MakeupFaceItem5',
    component: MakeupFaceItem5
  },
  {
    path: '/MakeupFaceItem6',
    name: 'MakeupFaceItem6',
    component: MakeupFaceItem6
  },
  {
    path: '/MakeupFaceItem7',
    name: 'MakeupFaceItem7',
    component: MakeupFaceItem7
  },
  {
    path: '/MakeupFaceItem8',
    name: 'MakeupFaceItem8',
    component: MakeupFaceItem8
  },
  {
    path: '/MakeupFaceItem9',
    name: 'MakeupFaceItem9',
    component: MakeupFaceItem9
  },
  {
    path: '/MakeupFaceItem10',
    name: 'MakeupFaceItem10',
    component: MakeupFaceItem10
  },
  {
    path: '/MakeupFaceItem11',
    name: 'MakeupFaceItem11',
    component: MakeupFaceItem11
  },
  {
    path: '/MakeupFaceItem12',
    name: 'MakeupFaceItem12',
    component: MakeupFaceItem12
  },
  {
    path: '/MakeupFaceItem13',
    name: 'MakeupFaceItem13',
    component: MakeupFaceItem13
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
