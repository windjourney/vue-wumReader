<template>
	<div class="search-contaier">
		<m-head :ifsearch="true" :backbtn="true"></m-head>
		<ul v-show="showHotword" class="search-hotwords-container fix">
			<h3>热门搜索</h3>
				<li class="search-hotwords" :style="bgcolor[index]" v-for="(item,index) in hotwords">
					<a @click="tags(item.word)" href="javascript:">{{ item.word}}</a>
				</li>
		</ul>
		<div class="no-result" v-show="noResult">
			<p>搜索结果未找到</p>
		</div>
		<listItem :Lists="lists"></listItem>
		<m-foot :ishome='true'></m-foot>	
	</div>
</template>
<script type="text/javascript">
import footer from './common/footer'
import header from './common/header'
import listitem from './listitem/listitem'
import api from '@/service/api'
import util from '@/util/util'
	export default{
		components:{
			'm-foot':footer,
			'm-head':header,
			'listItem':listitem
		},
		data(){
			return{
				lists:{},
				hotwords:{},
				bgcolor:[],
				noResult:false,
				showHotword:true
			}
		},
		created(){
			api.getSearchHotwords().then(res=>{
				this.hotwords = res.data.searchHotWords.slice(0,10);
				this.randomcolor()
			})
		},
		beforeRouteLeave(to,from,next){
			this.$store.commit('SetSearchResult',{})
			next();
		},
		watch:{
			'$store.state.SearchResult':function(){
				if(this.$store.state.SearchResult.total==0){
					this.noResult=true;
				}else{
					this.noResult=false;
					this.showHotword=false
					document.getElementById('list-view').scrollTop= 0;
					this.lists=this.$store.state.SearchResult.books;
				}
			}
		},
		methods:{
			randomcolor(){
				let colors=['#FF6666','#33CC99','#006699','#FF9966','#0066CC','#339933','#FFCC33','#336699','#FF9900','#99CC33','#0099CC','#FF0033']
				for(let i=0;i<10;i++){
					let num = parseInt(Math.random()*colors.length - 1)
					this.bgcolor[i]={
						'background':colors[num]
					}
				}
			},
			tags(word){
	          api.getSearchResult({query:word}).then(res=>{
	              res.data.books.forEach(book=>{
	                book.cover = util.staticPath+book.cover;
	              })
	              this.$store.commit('SetSearchResult',res.data);
	            })
			}
		}
	}
</script>
<style type="text/css">
	.search-contaier{
		height: 100vh;
		overflow: hidden;
		padding-bottom: 90px;
		position: relative;
	}
	.search-input-group{
		position: absolute;
		height: 34px;
		top: 5px;
		left: 0;
		width: 100%;
		padding:0 60px;
		font-size: 0;
	}
	.search-input-text{
		height: 34px;
		width: 100%;
		outline: none;
		border-radius: 4px;
		padding:5px 0 5px 10px;
		font-size: 16px;
		color: #fff;
		background-color:#65b1ff;
		border:1px solid #65b1ff;
	}
	.search-input-text::-webkit-input-placeholder{
		color:#fff;
	}
	.search-input-text:-moz-placeholder{
		color:#fff;
	}
	.search-input-text::-moz-placeholder{
		color:#fff;
	}
	.search-input-text:-ms-input-placeholder{
		color:#fff;
	}
	.search-input-btn{
		position: absolute;
		right: 15px;
		top:0;
		line-height: 35px;
		background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAMAAABxCz6aAAAAclBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9eWEHEAAAAJXRSTlMAXmVDAvvo3cDi0Ly4mgbrpCEdGce1n5R+dG1WThMODO2EgTowVKGoPwAAAKdJREFUGNN1zukOgyAQBGAUOQTU1vu217z/KzaEgDSx82eSLwu7xOaY9QOVng9yJqngwpNgT8AsG9kWA7z8HJASlxRws3tlLSjfbU/oyJkOky2JNcIV0hZHE2GD3BZDGWEJZitH/TPJbRkkESYw7godoXb3lQJFsALCbaAMRTBG/T8M7Ug/dGwBmflHbwUXxdEHzegglRwouee4eQ35p+JKa4GeXKj6AvRZDUCS0srCAAAAAElFTkSuQmCC') no-repeat;
		width: 34px;
		height: 34px;
		background-size:20px 20px;
		background-position:center;
	}
	.no-result{
		height: 30px;
		line-height: 30px;
		text-align: center;
		font-size:18px;
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		margin:auto;
	}
	.search-hotwords-container{
		padding: 10px 14px;
	}
	.search-hotwords-container>h3{
		font-weight: normal;
		font-size: 16px;
		margin-bottom: 10px;
	}
	.search-hotwords{	
		margin:0 10px 10px 0;
		float: left;
	}
	.search-hotwords>a{
		padding:5px 10px;
		border-radius: 4px;
		color:#fff;
	}
</style>