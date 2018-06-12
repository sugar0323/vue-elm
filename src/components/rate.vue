<template>
	<div id="rate">
		<h2>你的五星好评是我进步的动力</h2>
		<el-row>
			<el-col :span="8">
				<span>星级</span>
			</el-col>
			<el-col :span="12" :offset="4">
				<el-rate v-model="rating.score" :color="['#99A9BF', '#F7BA2A', '#FF9900']"></el-rate>
			</el-col>
		</el-row>
		<el-row>
			<el-col :span="8">
				<span style="line-height:28px">送达时间</span>
			</el-col>
			<el-col :span="12" :offset="4">
				<el-input v-model="rating.deliveryTime"  size="mini"></el-input>
			</el-col>
		</el-row>
		<el-row>
			<el-input type="textarea" v-model="rating.text" :autosize="{minRows:2,maxrows:4}" placeholder="给个五星好评哦"></el-input>
		</el-row>
		<el-button type="primary">提交评价</el-button>
	</div>
</template>
<script>
export default {
	name:'login',
	data() {
		return{
			rating:{
				orderId:0,
				score:5,
				deliveryTime:30,
				text:'',
				rateTime: 0,
                rateType: 0,		
			}

		}
		
	},
	created(){
		this.rating.orderId = this.$route.query.id;
	}
}
</script>
<style lang="scss" scoped>
#rate {
    padding: 100px 50px;
    h2 {
        line-height: 48px;
        margin-bottom: 50px;
        text-align: center;
    }
    .el-row {
        padding: 18px 0px;
        border-bottom: 1px solid #eee;
        font-size: 14px;
    }
}	
</style>