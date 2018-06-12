<template>
	<div id="login">
		<h1>用户登录页</h1>
		<el-form :model="user" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
			<el-form-item label="用户名" prop="username">
				<el-input v-model="user.username"></el-input>
			</el-form-item>
			<el-form-item label="密码" prop="password">
				<el-input v-model="user.password"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="login('ruleForm')">登录</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>
<script>
export default {
	name:'login',
	data() {
		return{
			user:{
				username:'',
				password:''
			},
			rules:{
				username:[
					{required:true,message:'请输入正确的用户名', trigger: 'blur' },
					{min:3, max:6,message:'长度在3到5个字符', trigger: 'blur' }
				],
				password:[
					{required:true,message:'请输入正确的密码', trigger: 'blur' }
				]
			}
		}
		
	},
	methods:{
		login(formName){
			this.$refs[formName].validate((valid) =>{
				if(valid){
					alert("success");
					//分发
					this.$store.dispatch('changeLoginState');
					//
					this.$router.push('/shop');
				}else{
					console.log("error");
					return false;
	
				}
			})
			
			
		}
	}
}
</script>
<style scoped>
#login {
    padding: 150px 0px 250px;
    background-color: #00a0dc; 
    text-align: center;
    color: #fff;
}
h1 {
    font-size: 28px;
    margin-bottom: 20px;
}
.el-form {
    margin-right: 20px;
    margin-top: 50px;
 
}
.el-button {
    width: 100%;
}
</style>