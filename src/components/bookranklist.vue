<template>
	<div class="rank-list-container">
		<m-head :backbtn="true" :title="title"></m-head>
		<listItem :Lists="ranklist"></listItem>
		<m-foot :isbookrank="true"></m-foot>
	</div>
</template>
<script type="text/javascript">
import header from './common/header'
import footer from './common/footer'
import listItem from './listitem/listitem'
import api from '@/service/api'
import {Indicator} from 'mint-ui'
import util from '@/util/util'
	export default{
		components:{
			'm-head':header,
			'm-foot':footer,
			listItem
		},
		data(){
			return{
				ranklist:{},
				title:''
			}
		},
		created(){
			Indicator.open()
			api.getRank(this.$route.params.rankid).then(res=>{
				res.data.ranking.books.forEach(list=>{
					list.cover=util.staticPath+list.cover;
				})
				this.ranklist= res.data.ranking.books;
				this.title=this.$store.state.RankList.title;
				Indicator.close()
			})
		}
	}
</script>
<style type="text/css">
	.rank-list-container{
		height: 100vh;
		overflow: hidden;
		padding-bottom: 90px;
	}
</style>