import Vue from 'vue'
import Vuex from 'vuex' //状态管理


Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		isLogin: false,  //登录状态
		cart:[],         //购物车对象
		total:0          //总消费
	},
	getters:{
		//获取订单商品
		getCart(state){
			return state.cart;
		},
		//获取总消费
		getTotal(state){
			return state.total;
		}
	},
	actions:{
		//改变登录状态
		//{{commit,state},n}写法是es6语法的简写，state是默认传参，就是上面的state，就算写aaa也是指向state。n为组件传过来的参数。
		//eslint-disable-next-line no-unused-vars
		changeLoginState({commit,state}){
			state.isLogin = !state.isLogin;
		},
		//购物车添加一件商品
		//eslint-disable-next-line no-unused-vars
		addOrder({commit,state},food){
			let orders = state.cart;
			state.total += food.price;
			for(let i=0;i<orders.length;i++){
				//如果商品已经在订单中
				if(orders[i].foodId === food.foodId){
					orders[i].count++;
					orders[i].total += food.price;
					return;
				}
			}
			//如果商品不在订单中
			food.count = 1;
			food.total = food.price;
			orders.push(food);
		},
		//eslint-disable-next-line no-unused-vars
		subOrder({commit,state},food){
			let orders = state.cart;
			state.total -= food.price;
			for(let i=0;i<orders.length;i++){
				//如果商品已经在订单里
				if(orders[i].foodId === food.foodId){
					//如果购物车里就最后一件商品了
					if(orders[i].count === 1){
						orders.splice(i, 1);
					}else{
						orders[i].count--;
						orders[i].total -= food.price;
					}
					return;
				}
				//如果商品不在订单中 高级漏洞
			}

		},
		//eslint-disable-next-line no-unused-vars
		cleanOrder({commit,state}){
			state.cart = [];
			state.total = 0;
		}
	}
});


