<template>
	<div class="footer">
		<ul class="footer-container">
			<li><router-link to="/"><i class="iconfont  icon-bottom" :class="{'icon-shouye01':ishome,'icon-shouye02':!ishome}"></i>首页</router-link>
			</li>
			<li><router-link to="/category"><i class="iconfont icon-bottom" :class="{'icon-classify-red':iscategory,'icon-classify':!iscategory}"></i>分类</router-link>
			</li>
			<li>
				<router-link to="/rank"><i :class="{'icon-shuxingliebiaoxiangqing2':isbookrank,'icon-shuxingliebiaoxiangqing':!isbookrank}" class="iconfont icon-bottom"></i>排名</router-link>
			</li>
			<li>
				<router-link to="/me"><i :class="{'icon-wode1':isme,'icon-wode':!isme}" class="iconfont icon-bottom"></i>我的</router-link>
			</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
			}
		},
		methods:{
			
		},
		props:{
			ishome:{
				type:Boolean,
				default:false
			},
			iscategory:{
				type:Boolean,
				default:false
			},
			isbookrank:{
				type:Boolean,
				default:false
			},
			isme:{
				type:Boolean,
				default:false
			}
		}
	}
</script>
<style type="text/css">
	.footer-container{
		height: 44px;
		position: fixed;
		bottom: 0;
		left: 0;
		background-color:#fff;
		width: 100%;
		display: -webkit-box;
		--webkit-box-orient: horizontal;
	}
	.footer-container>li{
		-webkit-box-flex:1;
		text-align: center;
	}
	.footer-container>li>a{
		padding: 5px 0;
		height: 44px;
		font-size: 12px;
		line-height: 18px;
		color: #409EFF;
	}
	.icon-bottom{
		font-size: 18px;
		display: block;
	}
</style>