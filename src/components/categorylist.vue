<template>
	<div class="list-book-container">
		<m-head :backbtn="true" :title="title"></m-head>
		<listItem :Lists="Categorylist"></listItem>
		<m-foot :iscategory="true"></m-foot>
	</div>
</template>
<script type="text/javascript">
import header from './common/header'
import footer from './common/footer'
import listItem from './listitem/listitem'
import {Indicator} from 'mint-ui'
import api from '@/service/api'
import util from '@/util/util'
	export default{
		data(){
			return{
				title:'',
				Categorylist:{}
			}
		},
		components:{
			'm-head':header,
			'm-foot':footer,
			listItem
		},
		created(){
			Indicator.open();
			api.getCategoryInfo(this.$route.query).then(res=>{
				res.data.books.forEach((book)=>{
					book.cover=util.staticPath+book.cover;
				})
				this.Categorylist=res.data.books;
				this.title=this.$store.state.CategoryList.name;
				Indicator.close()
			})
		}
	}
</script>
<style type="text/css">
	.list-book-container{
		height: 100vh;
		overflow: hidden;
		padding-bottom: 90px;
	}
</style>