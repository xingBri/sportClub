<template>
	<div class="loading">
		<img src="../assets/imgs/index.png" alt="">
	</div>
</template>

<script>

  	export default {
    	name: 'loading',

    	components: {
    	
    	},
    	filters :{
 
    	},
    	data () {
	      	return {
	      	}
    	},
	    mounted () {
	    	setTimeout(() => {
                this.$router.push({name : 'list'});
            }, 3000);
	    },
	    methods:{
			
	    },
	    watch:{
	    	
	    }
  	}
</script>

<style lang="scss">
	@keyframes index{
		0{
			width: 100%;
			opacity: 1;
			transform: rotate(0);
		}
		100%{
			width: 0;
			opacity: 0;
			transform: rotate(720deg);
		}
	}
	.loading{
		width: 100vw;
		height: 100vh;
		display: -webkit-flex;
		display: flex;
		justify-content: center;
		align-items: center;
		img{
			width: 100%;
			animation: index 2s ease-out 1s;
		}
	}
	
</style>

