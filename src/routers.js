const List = resolve => {
    require.ensure(['./views/list.vue'], () => {
        resolve(require('./views/list.vue'));
    });
};
const Home = resolve => {
    require.ensure(['./views/loading.vue'], () => {
        resolve(require('./views/loading.vue'));
    });
};
const routers= [{
	path:'/',
	name:'loading',
	component:Home
},{ 
	path: '/list', 
	name:'list',
	component:List
},{
	path: '/topic/:id', 
	name:'topic',
	component(resolve){
		require.ensure(['./views/topic.vue'], () => {
	        resolve(require('./views/topic.vue'));
	    });
	}
},{
	path: '/add', 
	name:'add',
	component(resolve){
		require.ensure(['./views/add.vue'], () => {
	        resolve(require('./views/add.vue'));
	    });
	},
	meta: { requiresAuth: true }
},
{
	path: '/login', 
	name:'login',
	component(resolve){
		require.ensure(['./views/login.vue'], () => {
	        resolve(require('./views/login.vue'));
	    });
	}
},
{
	path: '/user/:loginname', 
	name:'user',
	component(resolve){
		require.ensure(['./views/user.vue'], () => {
	        resolve(require('./views/user.vue'));
	    });
	}
},
{
	path: '/info', 
	name:'info',
	component(resolve){
		require.ensure(['./views/info.vue'], () => {
	        resolve(require('./views/info.vue'));
	    });
	}
},
{
	path: '/about', 
	name:'about',
	component(resolve){
		require.ensure(['./views/about.vue'], () => {
	        resolve(require('./views/about.vue'));
	    });
	}
},
{
	path: '/sport',
	name: 'sport',
	component(resolve) {
		require.ensure(['./views/sport.vue'], () => {
			resolve(require('./views/sport.vue'));
		});
	}
},
{
	path:'/collection',
	name:'collection',
	component(resolve){
		require.ensure(['./views/collection.vue'], () => {
	        resolve(require('./views/collection.vue'));
	    });
	}
},{
    path: '*',
    component: Home
}
]
export default routers;