<template>
	<div id="login">
		<h1>用户登录页</h1>
		
	</div>
</template>
<script>
export default {
	name:'login',
	data() {
		return{
			user:{
				username:'admin',
				password:'1111'
			}
		}
		
	},
	methods:{
		
	}
}
</script>
<style scoped>
.home{
  width: 100%;
  padding-bottom: $NavHeight + 5px;
  padding-top: $HomeHeaderHeight;
}
.home-main{
  width: 100%;
  overflow-x: hidden;
}
.goods{
  width: 100%;
  list-style: none;
  padding: 0;
}
.goods>li{
  width: 100%;
}
.no-more-goods{
  height: 40px;
  line-height: 40px;
}
.slideInRight{
  animation-duration: 0.25s;
}
</style>