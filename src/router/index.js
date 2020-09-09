import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import shouye from '../components/shouye.vue'
import denglu from '../components/denglu.vue'
import yi from '../components/yi.vue'
import shuju from '../components/shuju.vue'
import jfshezhi from '../components/jfshezhi.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'denglu',
    component: denglu,
    // children:[
    //   {
    //     path: 'yi',
    //     component: () => import('../components/yi')
    //   }
    // ]
  },
  {
    path: '/shouye',
    name: 'shouye',
    component:shouye,
    children:[
      {
        path: 'yhq',
        component: () => import('../components/yhq')
      },
      {
        path: 'vipliebiao',
        component: () => import('../components/vipliebiao')
      },
      {
        path: 'chouzhisz',
        component: () => import('../components/chouzhisz')
      },
      {
        path: 'jifeng',
        component: () => import('../components/jifeng')
      },
      {
        path: 'jfshezhi',
        component: () => import('../components/jfshezhi')
      },
      {
        path: 'xiaof',
        component: () => import('../components/xiaof')
      },
      {
        path: 'Fenye',
        component: () => import('../components/Fenye')
      },{
        path: 'shangpinliebiao',
        component: () => import('../components/shangpinliebiao')
      },{
        path: 'shangpinfenlei',
        component: () => import('../components/shangpinfenlei')
      },{
        path: 'shangpinding',
        component: () => import('../components/shangpinding')
      },{
        path: 'kefangding',
        component: () => import('../components/kefangding')
      },{
        path: 'zhusuji',
        component: () => import('../components/zhusuji')
      },{
        path: 'fangtaigli',
        component: () => import('../components/fangtaigli')
      }
      ,{
        path: 'wuwu',
        component: () => import('../components/wuwu')
      }
    ],
  },
  {
    path: '/yi',
    name: 'yi',
    component:yi,
  },
  {
    path: '/shuju',
    name: 'shuju',
    component:shuju,
  },
  {
    path: '/jfshezhi',
    name: 'jfshezhi',
    component:jfshezhi,
  }
]

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
})

export default router
