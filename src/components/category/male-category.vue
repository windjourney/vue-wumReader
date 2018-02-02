<template>
	<div class="male-category">
		<h3 class="category-title">男生</h3>
		<ul class="category-list">
			<li v-for="list in maleCategory" class="category-list-item">
				<a @click="golist(list)">{{list.name}}<p class="category-list-number">{{list.bookCount}}本</p></a></li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	export default{
		props:['maleCategory'],
		methods:{
			golist(list){
				this.$store.commit('SetCategoryList',list);
				this.$router.push({name:'categorylist',query:{gender:'male',type:'hot',major:list.name,start:0,limit:50}})
			}
		}
	}
</script>
<style type="text/css">
	.category-title{
		padding:10px;
		border-bottom: 1px solid #EBEEF5;
		font-size: 16px;
	}
	.category-list{
		font-size: 0;
	}
	.category-list-item{
		width: 33.3%;
		display: inline-block;
		vertical-align: middle;
	}
	.category-list-item>a{
		font-size: 16px;
		color:#555;
		padding:5px 10px;
		text-align: center;
		border-right:1px solid #EBEEF5;
		border-bottom: 1px solid #EBEEF5;
		overflow: hidden;
	}
	.category-list-item>a>p{
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.category-list-number{
		font-size: 12px;
		color:rgba(0,0,0,0.5);
	}
</style>