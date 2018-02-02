<template>
	<div class="reader-menu-container">
		<div v-show="isMenuShow" class="reader-menu-top">
				<i class="iconfont icon-fanhui2 icon-reader-back" @click="back()"></i>
		</div>
		<div  v-show="isMenuShow" class="reader-menu-bottom fix">
			<a @click="showcatlog"  class="reader-menu-tabs reader-menu-toc" href="javascript:"><i class="reader-icon-tabs iconfont icon-shuxingliebiaoxiangqing"></i></a>
			<a @click="fontmenu" class="reader-menu-tabs reader-menu-font" href="javascript:"><i class="reader-icon-tabs iconfont icon-ziti"></i></a>
			<a @click="showsources" class="reader-menu-tabs reader-menu-source" href="javascript:"><i class="reader-icon-tabs iconfont icon-qiehuan"></i></a>
			<a @click="nightmode" class="reader-menu-tabs reader-menu-night" href="javascript:"><i class="reader-icon-tabs iconfont" :class="{'icon-yejianmoshi':!isnight,'icon-taiyang-copy':isnight}"></i></a>
			<div v-show="isFontMenuShow" class="reader-font-set">
				<ul class="reader-font-bg">
					<span>背景</span>
					<li :class="{readerFontBgActive:isactive[index]}" @click="bgchange(color,index)" :style="{backgroundColor:color}" v-for="(color,index) in colors">
					</li>
				</ul>
			</div>
			<div class="reader-chapter-go">
				<a @click="chapterup" href="javascript:"></a>
				<a>{{Now}}/{{Total}}</a>
				<a @click="chapterdown" href="javascript:"></a>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
import { Toast } from 'mint-ui'
export default{
	created(){
		let num = localStorage.getItem('wum-bgnum');
		let i=0 ;
		for( i in this.isactive){
			this.$set(this.isactive,i,false);
		}
		this.$set(this.isactive,num,true);
	},
	props:['isMenuShow','Now','Total'],
	data(){
		return{
			isnight:false,
			beforecolor:'',
			isFontMenuShow:false,
			colors:['#f7eee5','#e9dfc7','#a4a4a4','#cdefce','#283548','#0f1410'],
			isactive:[true,false,false,false,false,false]
		}
	},
	watch:{
		'$route.params':function(){
			if(this.$route.name=='reader'){
				this.isMenuShow=false;
			}
		}
	},
	methods:{
		showcatlog(){
			this.$store.commit('ChangeDetail','catlog')
			this.$nextTick(function(){
				let top = (this.Now - 1) * 45
				document.getElementById('test').scrollTop=top;
			})
			
		},
		showsources(){
			this.$store.commit('ChangeDetail','source')
		},
		bgchange(color,num){
			localStorage.setItem('wum-bgcolor',color);
			localStorage.setItem('wum-bgnum',num);
			//  循环无法让class更新
			let i=0 ;
			for( i in this.isactive){
				this.$set(this.isactive,i,false);
			}
			this.$set(this.isactive,num,true);
			document.getElementById('reader-page-view').style.background=color;
		},
		nightmode(){
			if(!this.isnight){
			this.beforecolor = localStorage.getItem('wum-bgcolor')?localStorage.getItem('wum-bgcolor'):'#f7eee5';	
			localStorage.setItem('wum-bgcolor','#0f1410');
			this.isnight=true;
			document.getElementById('reader-page-view').style.background='#0f1410';
			}else{
			localStorage.setItem('wum-bgcolor',this.beforecolor);
			document.getElementById('reader-page-view').style.background=this.beforecolor;
			this.isnight=false;
			}
			
		},
		menuswich(){
			this.isMenuShow=!this.isMenuShow;
			this.isFontMenuShow=false;
		},
		fontmenu(){
			this.isFontMenuShow=!this.isFontMenuShow
		},
		back(){
			this.$router.go(-1);
		},
		chapterup(){
			this.$emit('prev')
		},
		chapterdown(){
			this.$emit('next')
		}
	}
}
</script>
<style type="text/css">
	.reader-menu-top{
		width: 100%;
		height: 50px;
		color: #d5d5d6;
		position: fixed;
		line-height: 50px;
		top: 0;
		left: 0;
		background-color: rgba(0, 0, 0, 0.9);
		z-index: 90;
	}
	.icon-reader-back{
		height: 100%;
		position: absolute;
		left: 10px;
		top:0;
		font-size: 32px;
	}
	.reader-tap-area{
		width: 50%;
		height: 20%;
		position:fixed;
		left: 25%;
		top:40%;
		z-index: 0;
	}
	.reader-menu-bottom{
		width: 100%;
		background-color: rgba(0, 0, 0, 0.9);
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 90;
	}
	.reader-menu-tabs,.reader-menu-tabs:visited,.reader-menu-tabs:hover{
		float: left;
		width: 25%;
		text-align: center;
		line-height: 18px;
		color: #fff;
		height: 60px;
		font-size: 12px;
	}
	.reader-icon-tabs{
		font-size: 20px;
		display: block;
		height: 35px;
		line-height: 40px;
	}
	.reader-menu-toc::after{
		content:'\76ee\5f55';
	}
	.reader-menu-font::after{
		content:'\8bbe\7f6e\000d\000a';
	}
	.reader-menu-source::after{
		content:'\6362\6e90\000d\000a';
	}
	.reader-menu-night::after{
		content:'\65e5\002f\591c';
	}
	.reader-font-set{
		width: 100%;
		height: 60px;
		position: absolute;
		bottom: 60px;
		background-color: rgba(0,0,0,0.9);
		border-bottom: 1px solid #ddd;
		z-index: 90;
	}
	.reader-font-bg{
		width: 100%;
		margin: 10px 0;
		height: 40px;
		padding: 5px 10px;
	}
	.reader-font-bg>span{
		font-size: 14px;
		color: #fff;
		line-height: 20px;
		vertical-align: middle;
		margin:0 10px 0 5px;
	}
	.reader-font-bg>li{
		vertical-align: middle;
		display: inline-block;
		height: 30px;
		width: 30px;
		border-radius: 15px;
		background-color: #fff;
		margin-left: 10px;
	}
	.readerFontBgActive{
		border:2px solid #ff7800;
	}
	.reader-chapter-go{
		width: 100%;
		height: 40px;
		position:absolute;
		bottom: 60px;
		background-color: rgba(0,0,0,0.9);
		font-size: 0;
		padding: 0 20px;
		z-index: 80;
		border-bottom:1px solid #ddd; 
	}
	.reader-chapter-go>a{
		display: inline-block;
		width: 33.33%;
		font-size: 14px;
		line-height: 40px;
		text-align:center;
	}
	.reader-chapter-go>a:first-child::before{
		content:'\4e0a\4e00\7ae0';
	}
	.reader-chapter-go>a:last-child::before{
		content:'\4e0b\4e00\7ae0';
	}
</style>