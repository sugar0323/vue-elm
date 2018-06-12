<template>
	<div>
		<TopBar></TopBar>
		<router-view/>
	</div>
</template>
<script>
import TopBar from '@/components/common/topBar.vue'
export default {
    name:"app",
    data() {
      return {
       
      }
    },
    components:{
		TopBar
    }
    
  }

</script>
<style scoped>
	
</style>