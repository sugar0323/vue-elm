<template>
	<div id="detail">
		<div class="detail-img">
			<img :src="food.image">
		</div>
		<div class="detail-infor">
			<h1>{{food.name}}</h1>
			<p>月售{{food.sellCount}} 好评率{{food.rating}}%</p>
			<span>￥{{food.price}}</span>
			<div>
				<el-button type="primary" round size="small" @click="addFood(food)">加入购物车</el-button>
			</div>
		</div>
		<div class="detail-intro">
			<h2>商品介绍</h2>
			<p>{{food.info}}</p>
		</div>
		<div class="detail-rating">
			
		</div>
		<div class="detail-back" @click="goBack">
			<i class="el-icon-arrow-left"></i>
		</div>
		<Cart></Cart>
	</div>
</template>
<script>
import Cart from "@/components/common/cart"
export default {
	name:'detail',
	data() {
		return{
			food: {},
			activeRating: 'all'
		}
		
	},
	components:{
		Cart
	},
	methods:{
		getFood(){
			let foodId = this.$route.query.id;
			this.$http.get("/goods",{params: {'foodId': foodId}}).then(res => {
				//if(res.data.status){
					
					console.log(res.data.data.foods);
					this.food = res.data.data.foods;
				//}
			})
			.catch(error => {
				console.log(error);
			})
		},
		addFood(food){
			this.$store.dispatch("addOrder", food);
		},
		goBack(){
			this.$router.push({path:'/shop/order'});
		}
	},
	created(){
		this.getFood();
	}
}
</script>
<style lang="scss" scoped>
#detail {
        .detail-img {
            width: 100%;
            height: 300px;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .detail-infor {
            padding: 18px 18px 0px;
            border-bottom: 20px solid #eee;
            h1 {
                font-size: 14px;
            }
            p {
                font-size: 12px;
                color: #999;
                margin: 8px 0px 18px;
            }
            span {
                color: #f01414;
                font-weight: 700;
            }
            div {
                position: relative;
                bottom: 25px;
                left: 240px;
            }
        }
        .detail-intro {
            padding: 18px;
            border-bottom: 20px solid #eee;
            h2 {
                font-size: 14px;
                font-weight: normal;
                margin-bottom: 8px;
            }
            p {
                font-size: 12px;
                color: #4d555d;
                line-height: 24px;
                padding: 0 8px;
                font-weight: 200;
            }
        }
        .detail-rating {}
        .detail-back {
            position: absolute;
            top: 20px;
            left: 20px;
            font-size: 20px;
        }
    }	
</style>