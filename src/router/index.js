import Vue from 'vue'
import VueRouter from 'vue-router'
//404 Not Found 頁面被呼叫的時機是「所有的路由都匹配不到的情況」
import PageNotFound from '../views/PageNotFound.vue'
//首頁
import Product from '../views/Product.vue'

Vue.use(VueRouter)

const routes = [
  //component動態載入
  //設定根目錄-轉址
 {
    path: '/',
    name: 'root',
    redirect: '/Product'
  },
   //產品頁
  {
    path: '/product',
    name: 'product',
    component: Product
  },
  //搜索不到頁面
  {
  //星號 (*) 是萬用字元，這裡代表「所有的網址」
    path: '*',
    name: 'not-found',
    component: PageNotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
