import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Makeup from '../views/Makeup.vue';
import Bodycare from '../views/Bodycare.vue';
import Packages from '../views/Packages.vue';
import Skincare from '../views/Skincare.vue';

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

import MakeupEyesList from '../views/MakeupEyes/MakeupEyesList.vue';
import MakeupEyesItem1 from '../views/MakeupEyes/Item1.vue';
import MakeupEyesItem2 from '../views/MakeupEyes/Item2.vue';
import MakeupEyesItem3 from '../views/MakeupEyes/Item3.vue';
import MakeupEyesItem4 from '../views/MakeupEyes/Item4.vue';
import MakeupEyesItem5 from '../views/MakeupEyes/Item5.vue';
import MakeupEyesItem6 from '../views/MakeupEyes/Item6.vue';
import MakeupEyesItem7 from '../views/MakeupEyes/Item7.vue';
import MakeupEyesItem8 from '../views/MakeupEyes/Item8.vue';
import MakeupEyesItem9 from '../views/MakeupEyes/Item9.vue';
import MakeupEyesItem10 from '../views/MakeupEyes/Item10.vue';
import MakeupEyesItem11 from '../views/MakeupEyes/Item11.vue';

import MakeupLipsList from '../views/MakeupLips/MakeupLipsList.vue';
import MakeupLipsItem1 from '../views/MakeupLips/Item1.vue';
import MakeupLipsItem2 from '../views/MakeupLips/Item2.vue';
import MakeupLipsItem3 from '../views/MakeupLips/Item3.vue';
import MakeupLipsItem4 from '../views/MakeupLips/Item4.vue';
import MakeupLipsItem5 from '../views/MakeupLips/Item5.vue';
import MakeupLipsItem6 from '../views/MakeupLips/Item6.vue';

import MakeupBrushesList from '../views/MakeupBrushes/MakeupBrushesList.vue';
import MakeupBrushesItem1 from '../views/MakeupBrushes/Item1.vue';
import MakeupBrushesItem2 from '../views/MakeupBrushes/Item2.vue';
import MakeupBrushesItem3 from '../views/MakeupBrushes/Item3.vue';
import MakeupBrushesItem4 from '../views/MakeupBrushes/Item4.vue';
import MakeupBrushesItem5 from '../views/MakeupBrushes/Item5.vue';
import MakeupBrushesItem6 from '../views/MakeupBrushes/Item6.vue';
import MakeupBrushesItem7 from '../views/MakeupBrushes/Item7.vue';
import MakeupBrushesItem8 from '../views/MakeupBrushes/Item8.vue';
import MakeupBrushesItem9 from '../views/MakeupBrushes/Item9.vue';
import MakeupBrushesItem10 from '../views/MakeupBrushes/Item10.vue';
import MakeupBrushesItem11 from '../views/MakeupBrushes/Item11.vue';
import MakeupBrushesItem12 from '../views/MakeupBrushes/Item12.vue';
import MakeupBrushesItem13 from '../views/MakeupBrushes/Item13.vue';
import MakeupBrushesItem14 from '../views/MakeupBrushes/Item14.vue';
import MakeupBrushesItem15 from '../views/MakeupBrushes/Item15.vue';

import Skin24Gold from '../views/Skin24Gold/Skin24GoldList.vue';
import SkinCheckmate from '../views/SkinCheckmate/SkinCheckmateList.vue';
import SkinCrystal from '../views/SkinCrystal/SkinCrystalList.vue';
import SkinFlashwhite from '../views/SkinFlashwhite/SkinFlashwhiteList.vue';
import SkinFreshwater from '../views/SkinFreshwater/SkinFreshwaterList.vue';
import SkinHyaluronic from '../views/SkinHyaluronic/SkinHyaluronicList.vue';
import SkinLuxuriant from '../views/SkinLuxuriant/SkinLuxuriantList.vue';
import SkinPackages from '../views/SkinPackages/SkinPackagesList.vue';
import SkinPeptide from '../views/SkinPeptide/SkinPeptideList.vue';

import BodyCareAllList from '../views/BodyCareAll/BodyCareAllList.vue';
import MakeupBodyCareItem1 from '../views/BodyCareAll/Item1.vue';
import MakeupBodyCareItem2 from '../views/BodyCareAll/Item2.vue';
import MakeupBodyCareItem3 from '../views/BodyCareAll/Item3.vue';
import MakeupBodyCareItem4 from '../views/BodyCareAll/Item4.vue';
import MakeupBodyCareItem5 from '../views/BodyCareAll/Item5.vue';
import MakeupBodyCareItem6 from '../views/BodyCareAll/Item6.vue';
import MakeupBodyCareItem7 from '../views/BodyCareAll/Item7.vue';
import MakeupBodyCareItem8 from '../views/BodyCareAll/Item8.vue';


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
  },
  {
    path: '/makeupeyeslist',
    name: 'MakeupEyesList',
    component: MakeupEyesList
  },
  {
    path: '/MakeupEyesItem1',
    name: 'MakeupEyesItem1',
    component: MakeupEyesItem1
  },
  {
    path: '/MakeupEyesItem2',
    name: 'MakeupEyesItem2',
    component: MakeupEyesItem2
  },
  {
    path: '/MakeupEyesItem3',
    name: 'MakeupEyesItem3',
    component: MakeupEyesItem3
  },
  {
    path: '/MakeupEyesItem4',
    name: 'MakeupEyesItem4',
    component: MakeupEyesItem4
  },
  {
    path: '/MakeupEyesItem5',
    name: 'MakeupEyesItem5',
    component: MakeupEyesItem5
  },
  {
    path: '/MakeupEyesItem6',
    name: 'MakeupEyesItem6',
    component: MakeupEyesItem6
  },
  {
    path: '/MakeupEyesItem7',
    name: 'MakeupEyesItem7',
    component: MakeupEyesItem7
  },
  {
    path: '/MakeupEyesItem8',
    name: 'MakeupEyesItem8',
    component: MakeupEyesItem8
  },
  {
    path: '/MakeupEyesItem9',
    name: 'MakeupEyesItem9',
    component: MakeupEyesItem9
  },
  {
    path: '/MakeupEyesItem10',
    name: 'MakeupEyesItem10',
    component: MakeupEyesItem10
  },
  {
    path: '/MakeupEyesItem11',
    name: 'MakeupEyesItem11',
    component: MakeupEyesItem11
  },

  // SKIN CARE ROUTE
  {
    path: '/skincare',
    name: 'skincare',
    component: Skincare
  },
  {
    path: '/skin24gold',
    name: 'skin24gold',
    component: Skin24Gold
  },
  {
    path: '/skincheckmate',
    name: 'skincheckmate',
    component: SkinCheckmate
  },
  {
    path: '/skincrystal',
    name: 'skincrystal',
    component: SkinCrystal
  },
  {
    path: '/skinflashwhite',
    name: 'skinflashwhite',
    component: SkinFlashwhite
  },
  {
    path: '/skinfreshwater',
    name: 'skinfreshwater',
    component: SkinFreshwater
  },
  {
    path: '/skinhyaluronic',
    name: 'skinhyaluronic',
    component: SkinHyaluronic
  },
  {
    path: '/skinluxuriant',
    name: 'skinluxuriant',
    component: SkinLuxuriant
  },
  {
    path: '/skinpeptide',
    name: 'skinpeptide',
    component: SkinPeptide
  },
  {
    path: '/skinpackages',
    name: 'skinpackages',
    component: SkinPackages
  },



  {
    path: '/makeuplipslist',
    name: 'MakeupLipsList',
    component: MakeupLipsList
  },
  {
    path: '/MakeupLipsItem1',
    name: 'MakeupLipsItem1',
    component: MakeupLipsItem1
  },
  {
    path: '/MakeupLipsItem2',
    name: 'MakeupLipsItem2',
    component: MakeupLipsItem2
  },
  {
    path: '/MakeupLipsItem3',
    name: 'MakeupLipsItem3',
    component: MakeupLipsItem3
  },
  {
    path: '/MakeupLipsItem4',
    name: 'MakeupLipsItem4',
    component: MakeupLipsItem4
  },
  {
    path: '/MakeupLipsItem5',
    name: 'MakeupLipsItem5',
    component: MakeupLipsItem5
  },
  {
    path: '/MakeupLipsItem6',
    name: 'MakeupLipsItem6',
    component: MakeupLipsItem6
  },

  {
    path: '/makeupbrusheslist',
    name: 'MakeupBrushesList',
    component: MakeupBrushesList
  },
  {
    path: '/MakeupBrushesItem1',
    name: 'MakeupBrushesItem1',
    component: MakeupBrushesItem1
  },
  {
    path: '/MakeupBrushesItem2',
    name: 'MakeupBrushesItem2',
    component: MakeupBrushesItem2
  },
  {
    path: '/MakeupBrushesItem3',
    name: 'MakeupBrushesItem3',
    component: MakeupBrushesItem3
  },
  {
    path: '/MakeupBrushesItem4',
    name: 'MakeupBrushesItem4',
    component: MakeupBrushesItem4
  },
  {
    path: '/MakeupBrushesItem5',
    name: 'MakeupBrushesItem5',
    component: MakeupBrushesItem5
  },
  {
    path: '/MakeupBrushesItem6',
    name: 'MakeupBrushesItem6',
    component: MakeupBrushesItem6
  },
  {
    path: '/MakeupBrushesItem7',
    name: 'MakeupBrushesItem7',
    component: MakeupBrushesItem7
  },
  {
    path: '/MakeupBrushesItem8',
    name: 'MakeupBrushesItem8',
    component: MakeupBrushesItem8
  },
  {
    path: '/MakeupBrushesItem9',
    name: 'MakeupBrushesItem9',
    component: MakeupBrushesItem9
  },
  {
    path: '/MakeupBrushesItem10',
    name: 'MakeupBrushesItem10',
    component: MakeupBrushesItem10
  },
  {
    path: '/MakeupBrushesItem11',
    name: 'MakeupBrushesItem11',
    component: MakeupBrushesItem11
  },
  {
    path: '/MakeupBrushesItem12',
    name: 'MakeupBrushesItem12',
    component: MakeupBrushesItem12
  },
  {
    path: '/MakeupBrushesItem13',
    name: 'MakeupBrushesItem13',
    component: MakeupBrushesItem13
  },
  {
    path: '/MakeupBrushesItem14',
    name: 'MakeupBrushesItem14',
    component: MakeupBrushesItem14
  },
  {
    path: '/MakeupBrushesItem15',
    name: 'MakeupBrushesItem15',
    component: MakeupBrushesItem15
  },


  //BODY CARE
  {
    path: '/BodyCareAllList',
    name: 'BodyCareAllList',
    component: BodyCareAllList
  },
  {
    path: '/MakeupBodyCareItem1',
    name: 'MakeupBodyCareItem1',
    component: MakeupBodyCareItem1
  },
  {
    path: '/MakeupBodyCareItem2',
    name: 'MakeupBodyCareItem2',
    component: MakeupBodyCareItem2
  },
  {
    path: '/MakeupBodyCareItem3',
    name: 'MakeupBodyCareItem3',
    component: MakeupBodyCareItem3
  },
  {
    path: '/MakeupBodyCareItem4',
    name: 'MakeupBodyCareItem4',
    component: MakeupBodyCareItem4
  },
  {
    path: '/MakeupBodyCareItem5',
    name: 'MakeupBodyCareItem5',
    component: MakeupBodyCareItem5
  },
  {
    path: '/MakeupBodyCareItem6',
    name: 'MakeupBodyCareItem6',
    component: MakeupBodyCareItem6
  },
  {
    path: '/MakeupBodyCareItem7',
    name: 'MakeupBodyCareItem7',
    component: MakeupBodyCareItem7
  },
  {
    path: '/MakeupBodyCareItem8',
    name: 'MakeupBodyCareItem8',
    component: MakeupBodyCareItem8
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
