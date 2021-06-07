import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Makeup from '../views/Makeup.vue';
import Bodycare from '../views/Bodycare.vue';
import Packages from '../views/Packages.vue';
import Skincare from '../views/Skincare.vue';
import Haircare from '../views/Haircare.vue';

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
import Skin24GoldItem1 from '../views/Skin24Gold/Skin24GoldItem1.vue';
import Skin24GoldItem2 from '../views/Skin24Gold/Skin24GoldItem2.vue';
import Skin24GoldItem3 from '../views/Skin24Gold/Skin24GoldItem3.vue';
import Skin24GoldItem4 from '../views/Skin24Gold/Skin24GoldItem4.vue';
import Skin24GoldItem5 from '../views/Skin24Gold/Skin24GoldItem5.vue';

import SkinCheckmate from '../views/SkinCheckmate/SkinCheckmateList.vue';
import SkinCheckmateItem1 from '../views/SkinCheckmate/SkinCheckmateItem1.vue';
import SkinCheckmateItem2 from '../views/SkinCheckmate/SkinCheckmateItem2.vue';
import SkinCheckmateItem3 from '../views/SkinCheckmate/SkinCheckmateItem3.vue';
import SkinCheckmateItem4 from '../views/SkinCheckmate/SkinCheckmateItem4.vue';

import SkinCrystal from '../views/SkinCrystal/SkinCrystalList.vue';
import SkinCrystalItem1 from '../views/SkinCrystal/SkinCrystalItem1.vue';
import SkinCrystalItem2 from '../views/SkinCrystal/SkinCrystalItem2.vue';
import SkinCrystalItem3 from '../views/SkinCrystal/SkinCrystalItem3.vue';

import SkinFlashwhite from '../views/SkinFlashwhite/SkinFlashwhiteList.vue';
import SkinFlashwhiteItem1 from '../views/SkinFlashwhite/SkinFlashwhiteItem1.vue';
import SkinFlashwhiteItem2 from '../views/SkinFlashwhite/SkinFlashwhiteItem2.vue';
import SkinFlashwhiteItem3 from '../views/SkinFlashwhite/SkinFlashwhiteItem3.vue';

import SkinFreshwater from '../views/SkinFreshwater/SkinFreshwaterList.vue';
import SkinFreshwaterItem1 from '../views/SkinFreshwater/SkinFreshwaterItem1.vue';
import SkinFreshwaterItem2 from '../views/SkinFreshwater/SkinFreshwaterItem2.vue';
import SkinFreshwaterItem3 from '../views/SkinFreshwater/SkinFreshwaterItem3.vue';
import SkinFreshwaterItem4 from '../views/SkinFreshwater/SkinFreshwaterItem4.vue';

import SkinHyaluronic from '../views/SkinHyaluronic/SkinHyaluronicList.vue';
import SkinHyaluronicItem1 from '../views/SkinHyaluronic/SkinHyaluronicItem1.vue';
import SkinHyaluronicItem2 from '../views/SkinHyaluronic/SkinHyaluronicItem2.vue';
import SkinHyaluronicItem3 from '../views/SkinHyaluronic/SkinHyaluronicItem3.vue';
import SkinHyaluronicItem4 from '../views/SkinHyaluronic/SkinHyaluronicItem4.vue';


import SkinLuxuriant from '../views/SkinLuxuriant/SkinLuxuriantList.vue';
import SkinLuxuriantItem1 from '../views/SkinLuxuriant/SkinLuxuriantItem1.vue';
import SkinLuxuriantItem2 from '../views/SkinLuxuriant/SkinLuxuriantItem2.vue';
import SkinLuxuriantItem3 from '../views/SkinLuxuriant/SkinLuxuriantItem3.vue';
import SkinLuxuriantItem4 from '../views/SkinLuxuriant/SkinLuxuriantItem4.vue';
import SkinLuxuriantItem5 from '../views/SkinLuxuriant/SkinLuxuriantItem5.vue';
import SkinLuxuriantItem6 from '../views/SkinLuxuriant/SkinLuxuriantItem6.vue';

import SkinPackages from '../views/SkinPackages/SkinPackagesList.vue';
import SkinPackagesItem1 from '../views/SkinPackages/SkinPackagesItem1.vue';
import SkinPackagesItem2 from '../views/SkinPackages/SkinPackagesItem2.vue';
import SkinPackagesItem3 from '../views/SkinPackages/SkinPackagesItem3.vue';
import SkinPackagesItem4 from '../views/SkinPackages/SkinPackagesItem4.vue';

import SkinPeptide from '../views/SkinPeptide/SkinPeptideList.vue';
import SkinPeptideItem1 from '../views/SkinPeptide/SkinPeptideItem1.vue';
import SkinPeptideItem2 from '../views/SkinPeptide/SkinPeptideItem2.vue';
import SkinPeptideItem3 from '../views/SkinPeptide/SkinPeptideItem3.vue';
import SkinPeptideItem4 from '../views/SkinPeptide/SkinPeptideItem4.vue';

import BodyCareAllList from '../views/BodyCareAll/BodyCareAllList.vue';
import MakeupBodyCareItem1 from '../views/BodyCareAll/Item1.vue';
import MakeupBodyCareItem2 from '../views/BodyCareAll/Item2.vue';
import MakeupBodyCareItem3 from '../views/BodyCareAll/Item3.vue';
import MakeupBodyCareItem4 from '../views/BodyCareAll/Item4.vue';
import MakeupBodyCareItem5 from '../views/BodyCareAll/Item5.vue';
import MakeupBodyCareItem6 from '../views/BodyCareAll/Item6.vue';
import MakeupBodyCareItem7 from '../views/BodyCareAll/Item7.vue';
import MakeupBodyCareItem8 from '../views/BodyCareAll/Item8.vue';

import BodyCareMenList from '../views/BodyCareMen/BodyCareMenList.vue';
import BodyCareMenItem1 from '../views/BodyCareMen/Item1.vue';

import HairCareAllList from '../views/HairCareAll/HairCareAllList.vue';
import HairCareAllItem1 from '../views/HairCareAll/Item1.vue';
import HairCareAllItem2 from '../views/HairCareAll/Item2.vue';
import HairCareAllItem3 from '../views/HairCareAll/Item3.vue';
import HairCareAllItem4 from '../views/HairCareAll/Item4.vue';
import HairCareAllItem5 from '../views/HairCareAll/Item5.vue';
import HairCareAllItem6 from '../views/HairCareAll/Item6.vue';
import HairCareAllItem7 from '../views/HairCareAll/Item7.vue';


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
    path: '/haircare',
    name: 'Haircare',
    component: Haircare
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


// SKIN CARE START

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
          path: '/skin24goldItem1',
          name: 'skin24goldItem1',
          component: Skin24GoldItem1
        },
        {
          path: '/skin24goldItem2',
          name: 'skin24goldItem2',
          component: Skin24GoldItem2
        },
        {
          path: '/skin24goldItem3',
          name: 'skin24goldItem3',
          component: Skin24GoldItem3
        },
        {
          path: '/skin24goldItem4',
          name: 'skin24goldItem4',
          component: Skin24GoldItem4
        },
        {
          path: '/skin24goldItem5',
          name: 'skin24goldItem5',
          component: Skin24GoldItem5
        },
  {
    path: '/skincheckmate',
    name: 'skincheckmate',
    component: SkinCheckmate
  },
        {
          path: '/skincheckmateItem1',
          name: 'skincheckmateItem1',
          component: SkinCheckmateItem1
        },
        {
          path: '/skincheckmateItem2',
          name: 'skincheckmateItem2',
          component: SkinCheckmateItem2
        },
        {
          path: '/skincheckmateItem3',
          name: 'skincheckmateItem3',
          component: SkinCheckmateItem3
        },
        {
          path: '/skincheckmateItem4',
          name: 'skincheckmateItem4',
          component: SkinCheckmateItem4
        },
  {
    path: '/skincrystal',
    name: 'skincrystal',
    component: SkinCrystal
  },
        {
          path: '/skincrystalItem1',
          name: 'skincrystalItem1',
          component: SkinCrystalItem1
        },
        {
          path: '/skincrystalItem2',
          name: 'skincrystalItem2',
          component: SkinCrystalItem2
        },
        {
          path: '/skincrystalItem3',
          name: 'skincrystalItem3',
          component: SkinCrystalItem3
        },
  {
    path: '/skinflashwhite',
    name: 'skinflashwhite',
    component: SkinFlashwhite
  },
        {
          path: '/skinflashwhiteItem1',
          name: 'skinflashwhiteItem1',
          component: SkinFlashwhiteItem1
        },
        {
          path: '/skinflashwhiteItem2',
          name: 'skinflashwhiteItem2',
          component: SkinFlashwhiteItem2
        },
        {
          path: '/skinflashwhiteItem3',
          name: 'skinflashwhiteItem3',
          component: SkinFlashwhiteItem3
        },
  {
    path: '/skinfreshwater',
    name: 'skinfreshwater',
    component: SkinFreshwater
  },
        {
          path: '/skinfreshwaterItem1',
          name: 'skinfreshwaterItem1',
          component: SkinFreshwaterItem1
        },
        {
          path: '/skinfreshwaterItem2',
          name: 'skinfreshwaterItem2',
          component: SkinFreshwaterItem2
        },
        {
          path: '/skinfreshwaterItem3',
          name: 'skinfreshwaterItem3',
          component: SkinFreshwaterItem3
        },
        {
          path: '/skinfreshwaterItem4',
          name: 'skinfreshwaterItem4',
          component: SkinFreshwaterItem4
        },
  {
    path: '/skinhyaluronic',
    name: 'skinhyaluronic',
    component: SkinHyaluronic
  },
        {
          path: '/skinhyaluronicItem1',
          name: 'skinhyaluronicItem1',
          component: SkinHyaluronicItem1
        },
        {
          path: '/skinhyaluronicItem2',
          name: 'skinhyaluronicItem2',
          component: SkinHyaluronicItem2
        },
        {
          path: '/skinhyaluronicItem3',
          name: 'skinhyaluronicItem3',
          component: SkinHyaluronicItem3
        },
        {
          path: '/skinhyaluronicItem4',
          name: 'skinhyaluronicItem4',
          component: SkinHyaluronicItem4
        },
  {
    path: '/skinluxuriant',
    name: 'skinluxuriant',
    component: SkinLuxuriant
  },
        {
          path: '/skinluxuriantItem1',
          name: 'skinluxuriantItem1',
          component: SkinLuxuriantItem1
        },
        {
          path: '/skinluxuriantItem2',
          name: 'skinluxuriantItem2',
          component: SkinLuxuriantItem2
        },
        {
          path: '/skinluxuriantItem3',
          name: 'skinluxuriantItem3',
          component: SkinLuxuriantItem3
        },
        {
          path: '/skinluxuriantItem4',
          name: 'skinluxuriantItem4',
          component: SkinLuxuriantItem4
        },
        {
          path: '/skinluxuriantItem5',
          name: 'skinluxuriantItem5',
          component: SkinLuxuriantItem5
        },
        {
          path: '/skinluxuriantItem6',
          name: 'skinluxuriantItem6',
          component: SkinLuxuriantItem6
        },
  {
    path: '/skinpeptide',
    name: 'skinpeptide',
    component: SkinPeptide
  },
        {
          path: '/skinpeptideItem1',
          name: 'skinpeptideItem1',
          component: SkinPeptideItem1
        },
        {
          path: '/skinpeptideItem2',
          name: 'skinpeptideItem2',
          component: SkinPeptideItem2
        },
        {
          path: '/skinpeptideItem3',
          name: 'skinpeptideItem3',
          component: SkinPeptideItem3
        },
        {
          path: '/skinpeptideItem4',
          name: 'skinpeptideItem4',
          component: SkinPeptideItem4
        },
  {
    path: '/skinpackages',
    name: 'skinpackages',
    component: SkinPackages
  },
        {
          path: '/skinpackagesItem1',
          name: 'skinpackagesItem1',
          component: SkinPackagesItem1
        },
        {
          path: '/skinpackagesItem2',
          name: 'skinpackagesItem2',
          component: SkinPackagesItem2
        },
        {
          path: '/skinpackagesItem3',
          name: 'skinpackagesItem3',
          component: SkinPackagesItem3
        },
        {
          path: '/skinpackagesItem4',
          name: 'skinpackagesItem4',
          component: SkinPackagesItem4
        },

 // SKIN CARE END


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
  },

  {
    path: '/BodyCareMenList',
    name: 'BodyCareMenList',
    component: BodyCareMenList
  },
  {
    path: '/BodyCareMenItem1',
    name: 'BodyCareMenItem1',
    component: BodyCareMenItem1
  },

  //Haircare
  {
    path: '/HairCareAllList',
    name: 'HairCareAllList',
    component: HairCareAllList
  },
  {
    path: '/HairCareAllItem1',
    name: 'HairCareAllItem1',
    component: HairCareAllItem1
  },
  {
    path: '/HairCareAllItem2',
    name: 'HairCareAllItem2',
    component: HairCareAllItem2
  },
  {
    path: '/HairCareAllItem3',
    name: 'HairCareAllItem3',
    component: HairCareAllItem3
  },
  {
    path: '/HairCareAllItem4',
    name: 'HairCareAllItem4',
    component: HairCareAllItem4
  },
  {
    path: '/HairCareAllItem5',
    name: 'HairCareAllItem5',
    component: HairCareAllItem5
  },
  {
    path: '/HairCareAllItem6',
    name: 'HairCareAllItem6',
    component: HairCareAllItem6
  },
  {
    path: '/HairCareAllItem7',
    name: 'HairCareAllItem7',
    component: HairCareAllItem7
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
