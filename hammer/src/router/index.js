import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/list'
import Detail from '@/components/detail'
import shopCart from '@/components/shop-cart'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'List',
      component: List
    },
    {
      path: '/detail/:skuId?',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/shop-cart',
      name: 'shopCart',
      component: shopCart
    }
  ]
})
