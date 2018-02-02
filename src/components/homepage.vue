<template>
	<div class="index-container">
		<div class="index-main-box">
			<m-head :searchbtn="true" :menubtn="true" :title="'书城'" :center="true"></m-head>
			<div class="index-scroll-view" ref="indexview">
				    <indexMale :malelist="malelist"></indexMale>
				    <indexFemale :femalelist="femalelist"></indexFemale> 
				    <indexNewbook :newslist="newslist"></indexNewbook>
				    <indexChannel></indexChannel>
			</div> 
			<m-foot :ishome="true"></m-foot>
		</div>
	</div>
</template>
<script>
import indexHeader from './common/header'
import indexNewbook from './homepage/index-newbook'
import indexMale from './homepage/index-male'
import indexFemale from './homepage/index-female'
import indexChannel from './homepage/index-channel'
import indexFooter from './common/footer'
import {Indicator} from 'mint-ui'
import api from '@/service/api'
import util from '@/util/util'
export default {
	name:'homepage',
	components:{
		'm-head':indexHeader,
        indexNewbook,
        indexMale,
        indexFemale,
        indexChannel,
        'm-foot':indexFooter
	},
	data(){
		return{
			malelist:[],
			femalelist:[],
			newslist:[]
		}
	},
	created(){
		api.getRankCategory().then(res=>{
			let maleid = res.data.male[this.randomnum(res.data.male)]._id;
			let femaleid = res.data.female[this.randomnum(res.data.female)]._id;
			let newsid = res.data.epub[this.randomnum(res.data.epub)]._id;
			this.getbooklist(maleid,this.malelist);
			this.getbooklist(femaleid,this.femalelist);
			this.getbooklist(newsid,this.newslist);
		}).catch(err=>{
			console.log(err)
		})

	},
	methods:{
		randomnum(arr){
			return parseInt((Math.random()*(arr.length - 1)));
		},
		getbooklist(id,list){
			Indicator.open();
			api.getRank(id).then(res=>{
				let books=res.data.ranking.books.slice(0,10);
				books.forEach((book)=>{
					book.cover=util.staticPath+book.cover;
					list.push(book);
				})	
				Indicator.close()
			}).catch(err=>{
				console.log(err)
				Indicator.close()
			})
		}
	}
}
</script>
<style type="text/css">
	.index-main-box{
		height: 100vh;
		overflow: hidden;
		padding-bottom: 90px;
		background-color: #EBEEF5;
	}
	.index-scroll-view{
		overflow-y: scroll;
		height: 100%;
		
	}
</style>