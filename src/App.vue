<template>
  <div id="app">
	  	<keep-alive include="homepage,category,bookrank">
	  			<router-view/>	
	  	</keep-alive>
  </div>
</template>

<script>
export default {
  name: 'app',
    mounted(){
	}
}
</script>

<style>
	.slide-enter-active,.slide-leave-active{
		transition:transform 0.5s;
	}
	.slide-enter,.slide-leave-to{
		transform:translate3d(-100vw,0px,0px);
	}
</style>
