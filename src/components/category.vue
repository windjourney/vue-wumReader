<template>
	<div class="category-container">
		<m-head :title="'分类'" :center="true"></m-head>
		<div class="category-view">
			<male-Category :maleCategory="categorylist.male"></male-Category>
			<female-Category :femaleCategory="categorylist.female"></female-Category>
		</div>
	<m-foot :iscategory="true"></m-foot>		
	</div>
</template>
<script type="text/javascript">
import header from './common/header'
import maleCategory from './category/male-category'
import femaleCategory from './category/female-category'
import footer from './common/footer'
import api from '@/service/api'
	export default{
		name:'category',
		data(){
			return{
				categorylist:{}
			}
		},
		components:{
			'm-head':header,
			'm-foot':footer,
			'male-Category':maleCategory,
			'female-Category':femaleCategory
		},
		created(){
			api.getCategories().then((res)=>{
				this.categorylist=res.data;
			}).catch((err)=>{
				console.log(err);
			})
		}
	}
</script>
<style type="text/css">
	.category-container{
		position: relative;
		height: 100vh;
		overflow:hidden;
		padding-bottom: 90px;
	}
	.category-view{
		height: 100%;
		overflow-y:scroll;
	}
</style>