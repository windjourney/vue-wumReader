<template>
<div>
	<div class="book-info-content">
		<div class="book-info-cover">
			<img :src="Imgurl">
		</div>
		<div class="book-info-describle">
			<h3 class="book-info-title">{{book.title}}</h3>
			<p>作者：{{book.author}}</p>
			<p>字数：{{ WordCount }}</p>
			<p>收藏人数：{{latelyFollower}}</p>
			<p>最后更新：{{datareset}}</p>
		</div>
	</div>
	<ul class="btn-info-group">
		<router-link :to="'/reader/'+book._id" tag="li">开始阅读</router-link>
		<li class="btn-info-bookshelf" :class="{'btn-info-bookshelf-active':isfollowed}" @click="followAction"></li>
	</ul>
	<div class="info-longintro">
		<p>{{book.longIntro}}</p>
	</div>
	<div class="info-last-chapter">
		<p>最后更新:<a @click="quickread()" class="last-update" href="javascript:">
			{{book.lastChapter}}
		</a></p>
	</div>
	<div class="info-tags">
		<span v-for='(tag,key) in book.tags' v-if='key<5'>{{ tag }}</span>
	</div>
</div>

</template>
<script type="text/javascript">
import api from '@/service/api'
import util from '@/util/util'
import moment from 'moment'
import { Indicator } from 'mint-ui'
moment.locale('zh-cn')
	export default {
		data(){
			return {
				book:[],
				isfollowed:false
			}
		},
		computed:{
			Imgurl (){
				if(!this.book.cover && typeof(this.book.cover) === 'undefined')
					return
				return util.staticPath + this.book.cover;
			},
			WordCount (){
				if(this.book.wordCount-10000>0){
					return parseInt(this.book.wordCount/10000)+'万';
				}else{
					return	this.book.wordCount;
				}
				
			},
			latelyFollower(){
				if(this.book.latelyFollower-10000>0){
					return parseInt(this.book.latelyFollower/10000)+'万';
				}else{
					return	this.book.latelyFollower;
				}
			},
			datareset(){
				return moment(this.book.updated).fromNow();
			}
		},
		created(){
			this.getbookInfo();
		},
		watch:{
			'$route.params':'getbookInfo'
		},
		methods:{
			quickread(){
				let localShelf = util.getLocalData('wum-followbook');
				localShelf[this.book._id].lastChapter=this.book.chaptersCount-1
				
				if(localShelf[this.book._id].source){
					this.$store.commit('SetSourceId',localShelf[this.book._id].source)
				}
				util.setLocalData('wum-followbook',localShelf)
				this.$router.push({name:'reader',params:{bookid:this.book._id}});
			},
			isFollow(){
				let localShelf = util.getLocalData('wum-followbook');
				this.isfollowed = !!(localShelf && localShelf[this.book._id]);
			},
			followAction(){
				let localShelf = util.getLocalData('wum-followbook') ? util.getLocalData('wum-followbook') : {};
				if(this.isfollowed){
					delete localShelf[this.book._id];
					util.setLocalData('wum-followbook',localShelf);
					this.isfollowed = !this.isfollowed;
				}else{
					localShelf[this.book._id]={
						title:this.book.title,
						cover:this.book.cover,
						source:this.$store.state.SourceId
					};
					util.setLocalData('wum-followbook',localShelf);
					this.isfollowed = !this.isfollowed;
				}
			},
			getbookInfo(){
				Indicator.open()
				api.getBookInfo(this.$route.params.bookid).then(res=>{
					this.book=res.data;
					this.isFollow();
					this.getbookSource();
					this.$store.commit('SetBookInfo',res.data)
					Indicator.close()
				}),err=>{
					console.log(err)
					Indicator.close()
				}
			},
			getbookSource(){
				if(!this.$store.state.SourceId){
					api.getBookSources({view:'summary',book:this.$route.params.bookid}).then(res=>{
						this.$store.commit('SetSourceId',res.data[0]._id)
					})
				}
			}
		}
	}
</script>
<style type="text/css">
	.book-info-content{	
		background-color: #F2F6FC;
		padding: 30px 20px 30px 30px;
		display: table;
		width: 100%;
	}
	.book-info-cover{
		width:93px;
		height: 124px;
		margin-right: 18px;
		float: left;
		border:1px solid #f0f0f0;
		box-shadow: 0 5px 10px #555;
		border-radius: 4px;
	}
	.book-info-cover>img{
		width: 100%;
		height: 100%;
	}
	.book-info-describle{
		vertical-align: middle;
		overflow:hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.book-info-title{
		font-weight: normal;
		font-size: 16px;
		margin-bottom: 5px;
	}
	.book-info-describle p{
		font-size: 14px;
		overflow:hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.btn-info-group{
		background-color: #F2F6FC;
		width: 100%;
		font-size: 0;
		padding: 0 10px 10px;
		margin-bottom: 10px;
	}
	.btn-info-group>li{
		text-align: center;
		display: inline-block;
		width: 49%;
		background-color: #fff;
		font-size: 14px;
		line-height: 2.8em;
		border-radius: 4px;
		border:solid 1px #ddd;
	}
	.btn-info-group>li:first-child{
		margin-right: 2%;
		background-color: #409EFF;
		color:#efefef;
	}
	.btn-info-bookshelf-active::after{
		content:'\53D6\6D88\6536\85CF'!important;
		background-color: #409EFF!important;
		color: #efefef;
		display: block;
	}
	.btn-info-bookshelf::after{
		content:'\52A0\5165\6536\85CF';
		display: block;
	}
	.info-longintro>p{
		padding: 10px 14px;
		line-height: 2em;
	}
	.info-longintro{
		background-color: #F2F6FC;
		border-bottom: 1px solid #DDD;
	}
	.info-last-chapter{
		background-color: #F2F6FC;
		padding:10px 14px;
		margin-bottom: 10px;
		line-height: 28px;
	}
	.last-update{
		text-overflow: ellipsis;
		overflow:hidden;
		white-space: nowrap;
		color:#42b983;
	}
	.last-update:hover{
		color: #42b983;
	}

	.info-tags{
		padding:10px 14px;
		overflow:hidden;
		background-color: #F2F6FC;
		text-emphasis: ellipsis;
		white-space:nowrap;
	}
	.info-tags>span{
		font-size: 14px;
		padding:5px 10px;
		border-radius: 4px;
		border:1px solid #ddd;
		background-color: #E6A23C;
		color: #F2F6FC;
	}
	.info-tags>span+span{
		margin-left: 10px;
	}
	.info-tags>span:last-child{
		background-color: #53ac7d;
	}
</style>