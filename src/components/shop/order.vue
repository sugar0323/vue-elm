<template>
	<div id="order">
		<el-row>
			<el-col :span="6">
				<div class="order-type">
					<ul>
						<li v-for="(type,index) in goods" :key="index">
							<a :href="'#'+index">{{type.name}}</a>
						</li>
			
					</ul>
				</div>
			</el-col>
			<el-col :span="18">
				<div class="order-good">
					<ul>
						<li v-for="(type,index) in goods" :key="index" :id="index">
							<h2>{{type.name}}</h2>
							<ul>
								<router-link tag="li" :to="{path:'/detail',query: {id:food.foodId}}" v-for="(food,index) in type.foods" :key="index">
									<div>
										<img :src="food.image">
									</div>
									<div>
										<h3>{{food.name}}</h3>
										<p>月售{{food.sellCount}}份 好评率{{food.rating}}%</p>
										<span>￥{{food.price}}</span>
									</div>
									<i class="icon iconfont icon-jia" @click.prevent="addFood(food)">+</i>
									<i class="icon iconfont icon-jian" @click.prevent="subFood(food)" :ref="food.foodId">-</i>
								</router-link>
							</ul>
						</li>
					</ul>
				</div>
			</el-col>
		</el-row>
		<Cart></Cart>
	</div>
</template>
<script>
import "@/mock/getGood.js";
import Cart from '@/components/common/cart.vue'
export default {
	name:'order',
	data() {
		return{
			goods: []
		}
		
	},
	components:{
		Cart
	},
	methods:{
		getGood(){
			this.$http.get("/goods").then(res => {
				if(res.data.status){
					this.goods = res.data.data;
				}
			});	
		},
		addFood(food){
			this.$refs[food.foodId][0].style.display = 'block';
			this.$store.dispatch("addOrder",food);	
		},
		subFood(food){
			this.$store.dispatch("subOrder",food);
		},
	},
	created (){
		this.getGood();
	}
}
</script>
<style lang="scss" scoped>
	#order {
    .order-type {
      background-color: #f3f5f7;
      font-size: 12px;
      font-weight: 200;
      li {
        padding: 20px 15px;
        border-bottom: 1px solid #ccc;
      }
      li:hover {
        background-color: #fff;
      }
      li:last-child {
        border-bottom: none;
      }
    }
    .order-good {
      height: 500px;
      overflow-y: scroll;
      ul {
        li {
          h2 {
            height: 12px;
            padding: 8px;
            background-color: #f3f5f7;
            font-size: 12px;
            font-weight: normal;
            border-left: 2px solid #ccc;
          }
          ul {
            li {
              position: relative;
              padding: 18px 0;
              margin: 0px 18px;
              height: 60px;
              border-bottom: 1px solid #ccc;
              div {
                float: left;
              }
              div:first-of-type {
                margin-right: 10px;
                img {
                  width: 57px;
                  height: 57px;
                }
              }
              div:nth-child(2) {
                h3 {
                  font-size: 14px;
                }
                p {
                  margin: 8px 0px 2px;
                  font-size: 10px;
                  color: #93999f;
                }
                span {
                  font-size: 14px;
                  color: #f01414;
                }
              }
              i {
                position: absolute;
                top: 64px;
                font-size: 14px;
                color:red;
                font-style: normal;
                cursor: pointer
              }
              .icon-jia {
                left: 200px;
              }
              .icon-jian {
                left: 160px;
                display: none;
              }
            }
            li:last-child {
              border-bottom: none;
            }
          }
        }
      }
    }
  }
</style>