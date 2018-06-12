import Vue from 'vue'
import Router from 'vue-router'
import store from '../vuex'

import Login from '@/components/login.vue'
import Home from '@/components/home.vue'
import Admin from '@/components/admin.vue'
import Detail from '@/components/detail.vue'
import Account from '@/components/account.vue'
import Rate from '@/components/rate.vue'

import Index from '@/components/shop/index.vue'
import Order from '@/components/shop/order.vue'
import Rating from '@/components/shop/rating.vue'
import Shop from '@/components/shop/shop.vue'

Vue.use(Router)

const router = new Router({
	routes:[
		{
            path:'/',
            redirect: '/login'
        },
		{
			path:'/login',
			name:'login',
			component:Login
		},
		{
			path:'/home',
			name:'home',
			component:Home
		},
		{
			path:'/admin',
			name:'admin',
			component:Admin
		},
		{
			path:'/detail',
			name:'detail',
			component:Detail
		},
		{
			path:'/account',
			name:'account',
			component:Account
		},
		{
			path:'/rate',
			name:'rate',
			component:Rate
		},
		{
			path:'/shop',
			component:Index,
			children:[
				{
					path:'/',
					redirect:'order'
				},
				{
					path:'order',
					component:Order
				},
				{
					path:'rating',
					component:Rating
				},
				{
					path:'shop',
					component:Shop
				}
			]
		}

	],

})

// 路由钩子
router.beforeEach(({path},from,next)=>{

  let isLogin = store.state.isLogin;

  if(!isLogin && path !== '/login'){
    return next({path:'/login'})
  }

  next();

})

export default router