<template>
	<div id="admin">
		<div class="admin-back" @click="goBack">
            <i class="el-icon-arrow-left"></i>
        </div>
        <div class="admin-quit" @click="quit">注销</div>
        <div class="admin-title">
        	<h1>{{user.username}}</h1>
        	<img :src="user.headSrc" alt="">
        </div>
        <div class="admin-infor">
        	<div>
                <span>地址</span>
                <span>{{user.address}}</span>
            </div>
            <div>
                <span>余额</span>
                <span>￥{{user.account}}</span>
            </div>
        </div>
        <div class="admin-order">
        	<span @click="getOrders(1)" :class="{order:true,goodActive:isActive === 1}">
	        	<i class="icon iconfont icon-daifahuo"></i>当前订单
	        </span>
	        <span @click="getOrders(2)" :class="{order:true,goodActive:isActive === 2}">
	        	<i class="icon iconfont icon-daifahuo"></i>待评价订单
	        </span>
	        <span @click="getOrders(3)" :class="{order:true,goodActive:isActive === 3}">
	        	<i class="icon iconfont icon-daifahuo"></i>完成订单
	        </span>
        </div>
        <div class="block"></div>
        <div class="admin-order-content">
        	<ul>
        		<li v-for="(order,index) in orders">
        			<span>{{order.orderTime}}</span>
        			<span>￥{{order.price}}</span>
        			<span v-if="order.orderType === 1" @click="">确认送达</span>
        			<span v-else-if="order.orderType === 2">
        				<router-link :to="{path:'/rate',query:{id:order.orderId}}">评价</router-link>	
        			</span>
        			<span v-else>已评价</span>
        		</li>
        	</ul>
        </div>
	</div>
</template>
<script>
import mockdata from "@/mock/getUser.js";
export default {
	name:'login',
	data() {
		return{
			orders: [],
			user:{},
			isActive:1

		}
		
	},
	methods:{
	    goBack() {
            this.$router.push({
                path: '/shop/order'
            });
        },
        quit(){
        	this.$store.dispatch("changeLoginState");
        	this.$router.push({
        		path:'/login'
        	});
        },
		getOrders(orderType){
			this.isActive = orderType;
			//this.$http.get("/user",{params:{'orderType':orderType}}).then(res => {
			this.$http.get("/user").then(res => {	
				this.orders = res.data.orders;
			})
			/*new Promise((resolve, reject) => {
			    this.orders = mockdata.data.orders;  //直接点出你生成的假数据对象即可
			    console.log(mockdata)
			    //that.foodsListLen = that.foods.length;
			     }).catch(err=>{
			      console.log(err)
			     })*/
		},
		getUserInfo(){
			this.$http.get("/user").then(res => {
				//if(res.data.status){
					this.user = res.data.user;
				//}
			});
		},
	},
	created(){
		this.getUserInfo();
		this.getOrders();
	}
}
</script>
<style lang="scss" scoped>
#admin {
        .admin-back {
            position: absolute;
            top: 20px;
            left: 20px;
            font-size: 20px;
        }
        .admin-quit {
            position: absolute;
            top: 20px;
            right: 20px;
            font-size: 14px;
            color: #00a0dc;
        }
        .admin-title {
            padding: 50px 0px;
            text-align: center;
            background-color: #f3f5f7;
            border-bottom: 1px solid #ccc;
            h1 {
                margin-bottom: 10px;
            }
            img {
                width: 50px;
                height: 50px;
                border-radius: 50%;
            }
        }
        .admin-infor {
            border-bottom: 1px solid #ccc;
            div {
                line-height: 40px;
                overflow: hidden;
                margin: 0px 18px;
                border-bottom: 1px solid #eee;
                span:first-of-type {
                    font-size: 14px;
                    float: left;
                }
                span:last-child {
                    font-size: 12px;
                    float: right;
                    color: #93999f;
                }
            }
            div:last-child {
                border-bottom: none;
            }
        }
        .admin-order {
            padding: 50px 20px;
            span {
                text-align: center;
                border-radius: 10px;
                margin-right: 20px;
                padding: 10px 0px;
                display: inline-block;
                font-size: 14px;
                width: 95px;
                height: 48px;
                i {
                    font-size: 24px;
                    display: block;
                    color: #f3f5f7;
                    margin-bottom: 5px;
                }
            }
            span:last-child {
                margin-right: 0px;
            }
            span:hover {
                background: #00a9dc;
            }
        }
        .admin-order-content {
            ul {
                li {
                    padding: 18px 0px;
                    margin: 0px 18px;
                    border-bottom: 1px solid #ccc;
                    font-size: 14px;
                    span {
                        display: inline-block;
                    }
                    span:first-child {
                        width: 180px;
                        color: #93999f;
                        font-size: 12px;
                    }
                    span:nth-of-type(2) {
                        width: 50px;
                        color: #f01414;
                    }
                    span:last-child {
                        width: 100px;
                        color: #00a0dc;
                        text-align: center;
                    }
                    a {
                        color: #00a0dc;
                    }
                }
            }
        }
    }	
</style>