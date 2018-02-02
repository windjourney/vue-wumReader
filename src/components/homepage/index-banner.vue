<template>
	<div class="index-banner">
			<el-carousel :interval='3000' arrow='never'>
				<el-carousel-item v-for='imgurl in urls'>
					<img class="carousel-img" :src='imgurl'>
				</el-carousel-item>
			</el-carousel>
	</div>	
</template>
<script type="text/javascript">
import banner1 from '../../assets/img/banner-1.jpg'
import banner2 from '../../assets/img/banner-2.jpg'
	export default {
		data(){
			return{
				urls:{
					pic1:banner1,
					pic2:banner2
				}
			}
		}
	}
</script>
<style type="text/css">
	.carousel-img,.el-carousel__item,.el-carousel__container,.el-carousel{
		width: 100%;
		max-height:32vw;
	}
	.el-carousel__container{
		height: 500px;
	}
</style>