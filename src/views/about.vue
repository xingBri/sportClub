<template>
	<div class="about">
		<mhead theme="关于"></mhead>
		<div class="content">
			<h2>关于项目</h2>
			<p>本项目使用Vue 2.0，根据现有api重写的 <a target="_blank" href="https://cnodejs.org/">Cnode社区</a></p>
			<h2>技术栈</h2>
			<p><a target="_blank" href="https://github.com/vuejs/vue">Vue 2.0</a> 及其生态圈(vueRouter,VueResource,vuex)</p>
			<p><a target="_blank" href="https://github.com/museui/muse-ui">Muse-UI</a> 基于Vue 2.0和Material Desigin的UI组件库 等.</p>
			<h2>源码地址</h2>
			<p>
				<mu-icon-button href="https://github.com/mov1er/cnode-code">
		      		<img src="https://assets-cdn.github.com/favicon.ico" alt="">
		    	</mu-icon-button>
		    </p>
		    <p>if u dont have Access Token,use this↓</p>
		    <p>7ac36cd7-b5c7-4faf-94c6-64076881910e</p>
		
			<div><img src="../assets/imgs/index.png" alt=""></div>
		</div>
	</div>
</template>

<script>
	import mhead from '../components/mhead';
  	export default {
    	name: 'about',
    	components: {
    		mhead
    	},
    	filters :{
    	},
    	data () {
	      	return {
	      	}
    	},
	    mounted () {
	    },
	    methods:{
	    },
	    watch:{
	    }
  	}
</script>

<style scoped lang="scss">
	.about{
		.content{
			padding: 66px 10px 0;
			img{
				width: 100%;
			}
		}
	}
</style>
