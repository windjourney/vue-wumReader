<template>
	<div class="index-channel">
		<div class="title">
			<h3>最热书单</h3>
		</div>
		<ul class="index-channel-box fix">
			<li class="index-channel-item">
				<a href="javascript:">
					<img src="../../assets/img/book-cover.jpg">
					<p class="index-channel-shortintro">修炼一途，乃窃阴阳，夺造化，转涅盘，握生死，掌轮回。
武之极，破苍穹，动乾坤！
新书求收藏，求推荐，谢大家O(∩_∩)O~</p>
					<p class="index-channel-tags"><span>共xxxx本书</span>|<span>人收藏</span></p>
				</a>
			</li>
			<li class="index-channel-item">
				<a href="javascript:">
					<img src="../../assets/img/book-cover.jpg">
					<p class="index-channel-shortintro">cccccccccccccccccccccccccccccccccccccccccccccccc</p>
					<p class="index-channel-tags"><span>共xxxx本书</span>|<span>人收藏</span></p>
				</a>
			</li>
			<li class="index-channel-item">
				<a href="javascript:">
					<img src="../../assets/img/book-cover.jpg">
					<p class="index-channel-shortintro">bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb</p>
					<p class="index-channel-tags">共300000本书3000人收藏</span></p>
				</a>
			</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	export default {
		data(){
			return{
				
			}
		},
		componets:{

		}
	}
</script>
<style type="text/css">
	.title{
		font-size: 14px;
		border-left:6px solid #F56C6C;
		padding: 10px 14px;
		background-color: #F2F6FC;
		border-bottom: 1px solid #DCDFE6;
	}
	.title>h3{
		font-size: 14px;
		font-weight: normal;
	}
	.index-channel-box{
		width: 100%;
		font-size: 0;
		background-color: #F2F6FC;
	}
	.index-channel-item{
		float: left;
		width: 33.3%;
		padding: 10px 14px 0 14px;
		overflow: hidden;
	}
	.index-channel-box>li:nth-child(3n+1){
		text-align: left;
	}
	.index-channel-box>li:nth-child(3n+2){
		text-align: center;
	}
	.index-channel-box>li:nth-child(3n+3){
		text-align: right;
	}
	.index-channel-item>a{
		display: inline-block;
		width: 86px;
	}
	.index-channel-item img{
		width: 86px;
		height: 113px;
	}
	.index-channel-shortintro{
		font-size: 16px;
		color: #555;
		line-height: 16px;
		max-height: 32px; 
		overflow: hidden;
		text-overflow: ellipsis;
		text-align: left;
		word-wrap: break-word;
		margin:5px auto;
	}
	.index-channel-tags{
		text-align: left;
		font-size: 12px;
		color: rgba(0,0,0,0.4);
		line-height: 1.2;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
</style>