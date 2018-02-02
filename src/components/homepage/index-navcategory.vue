<template>
	<div class="index-category">
		<ul class="index-category-nav">
			<li><img class="index-category-icon" src="../../assets/img/male-icon.png"><p>男生</p></li>
			<li><img class="index-category-icon" src="../../assets/img/female-icon.png"><p>女生</p></li>
			<li><img class="index-category-icon" src="../../assets/img/category-icon.png"><p>分类</p></li>
			<li><img class="index-category-icon" src="../../assets/img/rank-icon.png"><p>排行</p></li>
			<li><i class="iconfont icon-fire el-icon-success" src="../../assets/img/finish-icon.png"></i><p>完结</p></li>
		</ul>
	</div>
</template>
<style type="text/css" scoped>
	.index-category{
		margin-bottom: 10px;
		background-color: #F2F6FC;
	}
	.index-category-nav{
		display: -webkit-box;
		-webkit-box-orient: horizontal;
		margin: 0 0 14px 0;
		padding-top: 14px;
	}
	.index-category-nav>li{
		-webkit-box-flex: 1;
		text-align: center;
		line-height: 2.4;
		font-size: 12px;
	}
	.index-category-icon{
		width: 22px;
		height: 22px;
		margin:0 auto;
	}
	.el-icon-success{
		display: block;
		color: #c91623;
		font-size: 22px;
		line-height: 22px;	
	}
</style>