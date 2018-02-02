<template>
	<div class="female-category">
		<h3 class="category-title">女生</h3>
		<ul class="category-list">
			<li v-for="list in femaleCategory" class="category-list-item">
				<a @click="golist(list)">{{list.name}}<p class="category-list-number">{{list.bookCount}}本</p></a></li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	export default{
		props:['femaleCategory'],
		methods:{
			golist(list){
				this.$store.commit('SetCategoryList',list);
				this.$router.push({name:'categorylist',query:{gender:'female',type:'hot',major:list.name,start:0,limit:50}})
			}
		}
	}
</script>