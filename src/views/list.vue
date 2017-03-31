<template>
  	<div class="app demo-infinite-container">
	    <mhead :title="title"></mhead>
	    <section class="pt56 demo-refresh-container" v-if="success">
	    	<mu-refresh-control :refreshing="refreshing" :trigger="trigger" @refresh="refresh"/>
	      	<mu-list>
		        <template v-for="item in topics">
					<router-link :to="{name:'topic',params:{id:item.id}}">
			          	<mu-list-item>
			            	<div class="title" :title="getTabInfo(item.tab,item.good,item.top,true)" v-html="item.title"></div>
			              	<mu-flexbox class="content">
				                <mu-flexbox-item grow="1" class="flex-demo">
				                  	<mu-avatar :src="item.author.avatar_url"/>
				                </mu-flexbox-item>
				                <mu-flexbox-item grow="7" class="flex-demo">
				                  	<mu-flexbox>
					                    <mu-flexbox-item grow="1" class="flex-demo">
					                      	{{item.author.loginname}}
					                    </mu-flexbox-item>
					                    <mu-flexbox-item grow="1" class="flex-demo">
					                      <span class="blue">{{item.reply_count}}</span>/<span class="grey">{{item.visit_count}}</span>
					                    </mu-flexbox-item>
				                  	</mu-flexbox>
				                  	<mu-flexbox>
					                    <mu-flexbox-item grow="1" class="flex-demo">
					                      	{{item.create_at | getTimeStr}}
					                    </mu-flexbox-item>
					                    <mu-flexbox-item grow="1" class="flex-demo">
					                      	{{item.last_reply_at | getTimeStr}}
					                    </mu-flexbox-item>
				                  	</mu-flexbox>
				                </mu-flexbox-item>
			              	</mu-flexbox>
			          	</mu-list-item>
					</router-link>

		          	<mu-divider/>
		        </template>
	      	</mu-list>
	      	<mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>
	    	<totop page="list"></totop>

	    </section>
	  	<div class="error" v-if="!success">
	      <img src="../assets/imgs/loading.gif" alt="">
	    </div>
  	</div>
</template>

<script>
  	import $ from 'webpack-zepto';
  	import {getTabInfo,getTimeStr} from '../filters';
  	import mhead from '../components/mhead';
  	import totop from '../components/toTop';

  	export default {
    	name: 'app',
    	components: {
      		mhead,totop
    	},
    	filters :{
    		getTimeStr(time){
    			return getTimeStr(time);
    		}
    	},
    	data () {
	      	return {
	        	title:'全部',
	        	num: 20,
	        	loading: false,
	        	scroller: null,
	        	success:false,
	        	topics: [],
	        	searchKey: {
	          		page: 1,
	          		limit: 20,
	          		tab: 'all',
	          		mdrender: true
	        	},
	        	refreshing: false,
      			trigger: null
	      	}
    	},
	    mounted () {
	      	this.scroller = this.$el;
	      	this.trigger = this.$el;
	      	if(this.$route.query && this.$route.query.tab)this.searchKey.tab = this.$route.query.tab;
            //	use data if data's exist when back from topic page
            if (window.window.sessionStorage.searchKey && window.window.sessionStorage.tab === this.searchKey.tab) {
                this.topics = JSON.parse(window.window.sessionStorage.topics);
                this.searchKey = JSON.parse(window.window.sessionStorage.searchKey);
                this.success=true;
                this.$nextTick(() => {
                	$('.demo-infinite-container').scrollTop(window.window.sessionStorage.scrollTop);
                });
            } else {
                this.getTopics();
            }
	    },
	    beforeRouteLeave(to, from, next) {
            // set sessionStorage before enter router for later use
            if (to.name === 'topic') {
                window.window.sessionStorage.scrollTop = $('.demo-infinite-container').scrollTop();
                window.window.sessionStorage.topics = JSON.stringify(this.topics);
                window.window.sessionStorage.searchKey = JSON.stringify(this.searchKey);
                window.window.sessionStorage.tab = from.query.tab || 'all';
            }
            $(window).off('scroll');
            next();
        },
        beforeRouteEnter(to, from, next) {
            if (from.name !== 'topic') {
                // delete data before enter router
                if (window.window.sessionStorage.tab) {
                    window.window.sessionStorage.removeItem('topics');
                    window.window.sessionStorage.removeItem('searchKey');
                    window.window.sessionStorage.removeItem('tab');
                }
            }
            next();
        },
	    methods:{
	      	loadMore () {
	        	this.loading = true
	        	setTimeout(() => {
		          	this.searchKey.limit += 20;
		          	this.getTopics();
		          	this.loading = false;
	        	}, 2000)

	      	},
	      	getTopics(){
	        	$.get('https://cnodejs.org/api/v1/topics?'+$.param(this.searchKey), (res) => {
		          	this.topics=res.data;
		          	this.success=true;
	        	})
	      	},
	      	getTabInfo(tab, good, top, isClass) {
                return getTabInfo(tab, good, top, isClass);
            },
            refresh () {
		      	this.refreshing = true;
		      	setTimeout(() => {
		       		this.getTopics();
			        this.refreshing = false;
		      	}, 2000)
		    }
	    },
	    watch:{
	    	//watch router's change
	    	'$route' (to, from) {
                this.success=false;
                this.searchKey.tab = to.query.tab;
                this.searchKey.limit = 20;
                this.getTopics();
            }
	    }
  	}
</script>

<style lang="">
	#app {
	  font-family: 'microsoft yahei';
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	  color: #2c3e50;
	}
	h2{
		margin: 0
	}
	.pt56{
	  padding-top: 56px
	}
	.demo-infinite-container{
	  width: 100%;
	  overflow: auto;
	  height: 100vh;
	  /*-webkit-overflow-scrolling: touch;*/
	}
	.demo-refresh-container{
		position: relative;
		user-select: none;
		overflow: auto;
	}
	.title{
	  margin-bottom: 10px;
	  white-space: pre;
	  overflow: hidden;
	  text-overflow: ellipsis;
	  height: 24px;
	  font-weight: 900;
	}
	.title:before{
	    content: attr(title);
	    margin-right: 10px;
	    margin-top: -3px;
	    padding: 4px 6px;
	    color: #fff;
	    font-size: 10px;
	    font-weight: 400;
	    border-radius: 4px;
	    background-color: #e7e7e7;
	    text-align: center;
	    vertical-align: middle;
	}
	.mu-flexbox-item>.mu-flexbox div:nth-child(2){
	  text-align: right;
	}
	.blue{
	  color: #03A9F4;
	  font-weight: 900
	}
	.app .error,.user .error,.topic .error,.collection .error{
	    width: 100vw;
	    height: 100vh;
	    line-height: 140vh;
	    font-size: 24px;
	    display: -webkit-flex;
	  	display: flex;
	  	justify-content: center;
	  	align-items: center;
	  	overflow: hidden;
	}
	.error img{
		width: 400px;
		height: 300px;
	}
	[title='top']:before{
		background: #E74C3C;
		content: '置顶';
	}
	[title='ask']:before{
		background: #159951;
		content: '问答';
	}
	[title='share']:before{
		background: #03A9F4;
		content: '分享';
	}
	[title='job']:before{
		background: #C898DE;
		content: '招聘';
	}
	[title='good']:before{
		background: #EFBD05;
		content: '精华';
	}
	[title='default']:before{
		display: none;
	}
	.app .mu-item{
		padding: 8px 16px;
	}
</style>
