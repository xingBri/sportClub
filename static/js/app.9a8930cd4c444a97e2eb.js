webpackJsonp([10,9],{0:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var i=n(10),s=o(i),r=n(63),a=o(r),u=n(50),l=o(u),c=n(66),f=o(c),m=n(4),d=o(m),p=n(9),h=(o(p),n(82)),g=o(h),v=n(84),w=o(v);n(48),n(49),s.default.use(a.default),s.default.use(l.default),s.default.use(f.default),d.default.ajaxSettings.crossDomain=!0,window.sessionStorage.user&&w.default.dispatch("setUserInfo",JSON.parse(window.sessionStorage.user)),window.sessionStorage.info&&w.default.dispatch("setNotiNum",window.sessionStorage.info);var _=new f.default({routes:g.default});_.beforeEach(function(t,e,n){console.log(t),t.matched.some(function(t){return t.meta.requiresAuth})?w.default.state.user.userInfo.userId?n():n({path:"/login",query:{redirect:t.fullPath}}):n()}),new s.default({router:_,store:w.default}).$mount("#app")},5:function(t,e,n){n(41);var o=n(1)(n(70),n(56),null,null);t.exports=o.exports},6:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.getTimeStr=e.getTabInfo=void 0;var i=n(69),s=o(i),r=function(t,e,n,o){var i="",s="";if(n)i="置顶",s="top";else if(e)i="精华",s="good";else switch(t){case"share":i="分享",s="share";break;case"ask":i="问答",s="ask";break;case"job":i="招聘",s="job";break;default:i="暂无",s="default"}return o?s:i},a=function(t){var e=new s.default,n=e.format(t,"zh_CN");return n};e.getTabInfo=r,e.getTimeStr=a},7:function(t,e,n){t.exports=n.p+"static/img/loading.00839a0.gif"},9:function(t,e,n){n(44);var o=n(1)(n(76),n(59),null,null);t.exports=o.exports},11:function(t,e,n){n(40);var o=n(1)(n(71),n(55),"data-v-579cf570",null);t.exports=o.exports},40:function(t,e){},41:function(t,e){},44:function(t,e){},48:function(t,e){},49:function(t,e){},55:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"toTop",on:{click:t.toTop}},[n("mu-icon",{attrs:{value:"publish"}})],1)},staticRenderFns:[]}},56:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("mu-appbar",{attrs:{title:t.theme?t.theme:t.title,id:"topic"}},[n("mu-icon-button",{attrs:{icon:"menu"},on:{click:function(e){t.toggle(!0)}},slot:"left"}),t._v(" "),n("mu-icon-menu",{attrs:{icon:"add",anchorOrigin:t.rightTop,targetOrigin:t.rightTop,desktop:"true"},slot:"right"},[n("router-link",{attrs:{to:{name:"add"}}},[n("mu-menu-item",{attrs:{title:"发帖"}})],1),t._v(" "),n("router-link",{attrs:{to:{name:"sport"}}},[n("mu-menu-item",{attrs:{title:"运动"}})],1)],1)],1),t._v(" "),n("mu-drawer",{attrs:{open:t.open,docked:t.docked},on:{close:function(e){t.toggle()}}},[n("mu-list",{on:{itemClick:function(e){t.docked?"":t.toggle()}}},[t.userInfo.loginname?t._e():n("router-link",{attrs:{to:{name:"login"}},nativeOn:{click:function(e){t.open=!1}}},[n("mu-list-item",{attrs:{title:"登陆"}},[n("mu-icon",{attrs:{value:"person_outline"},slot:"left"})],1)],1),t._v(" "),t.userInfo.loginname?[n("router-link",{attrs:{to:{name:"user",params:{loginname:t.userInfo.loginname}}},nativeOn:{click:function(e){t.open=!1}}},[n("mu-list-item",{attrs:{title:t.userInfo.loginname}},[n("mu-icon",{attrs:{value:"person"},slot:"left"})],1)],1),t._v(" "),n("router-link",{attrs:{to:{name:"info"}},nativeOn:{click:function(e){t.open=!1}}},[n("mu-list-item",{attrs:{title:"消息"}},[n("mu-icon",{attrs:{value:"warning"},slot:"left"}),t._v(" "),n("mu-badge",{attrs:{content:this.$store.state.info.notiNum,primary:this.$store.state.info.notiNum>0,circle:""},slot:"after"})],1)],1),t._v(" "),n("router-link",{attrs:{to:{name:"collection"}},nativeOn:{click:function(e){t.open=!1}}},[n("mu-list-item",{attrs:{title:"收藏"}},[n("mu-icon",{attrs:{value:"grade"},slot:"left"})],1)],1),t._v(" "),n("mu-list-item",{attrs:{title:"退出"},on:{click:t.loginOut}},[n("mu-icon",{attrs:{value:"undo"},slot:"left"})],1)]:t._e(),t._v(" "),n("mu-divider"),t._v(" "),n("router-link",{attrs:{to:{name:"list",query:{tab:"all"}}},nativeOn:{click:function(e){t.open=!1}}},[n("mu-list-item",{attrs:{title:"全部"},on:{click:function(e){t.channel("全部")}}},[n("mu-icon",{attrs:{value:"list"},slot:"left"})],1)],1),t._v(" "),n("router-link",{attrs:{to:{name:"list",query:{tab:"good"}}},nativeOn:{click:function(e){t.open=!1}}},[n("mu-list-item",{attrs:{title:"精华"},on:{click:function(e){t.channel("精华")}}},[n("mu-icon",{attrs:{value:"thumb_up"},slot:"left"})],1)],1),t._v(" "),n("router-link",{attrs:{to:{name:"list",query:{tab:"share"}}},nativeOn:{click:function(e){t.open=!1}}},[n("mu-list-item",{attrs:{title:"分享"},on:{click:function(e){t.channel("分享")}}},[n("mu-icon",{attrs:{value:"share"},slot:"left"})],1)],1),t._v(" "),n("router-link",{attrs:{to:{name:"list",query:{tab:"ask"}}},nativeOn:{click:function(e){t.open=!1}}},[n("mu-list-item",{attrs:{title:"问答"},on:{click:function(e){t.channel("问答")}}},[n("mu-icon",{attrs:{value:"live_help"},slot:"left"})],1)],1),t._v(" "),n("router-link",{attrs:{to:{name:"list",query:{tab:"job"}}},nativeOn:{click:function(e){t.open=!1}}},[n("mu-list-item",{attrs:{title:"招聘"},on:{click:function(e){t.channel("招聘")}}},[n("mu-icon",{attrs:{value:"local_mall"},slot:"left"})],1)],1),t._v(" "),n("mu-divider"),t._v(" "),n("router-link",{attrs:{to:{name:"about"}},nativeOn:{click:function(e){t.open=!1}}},[n("mu-list-item",{attrs:{title:"关于"},on:{click:function(e){t.channel("关于")}}},[n("mu-icon",{attrs:{value:"info"},slot:"left"})],1)],1)],2)],1)],1)},staticRenderFns:[]}},59:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"app demo-infinite-container"},[o("mhead",{attrs:{title:t.title}}),t._v(" "),t.success?o("section",{staticClass:"pt56 demo-refresh-container"},[o("mu-refresh-control",{attrs:{refreshing:t.refreshing,trigger:t.trigger},on:{refresh:t.refresh}}),t._v(" "),o("mu-list",[t._l(t.topics,function(e){return[o("router-link",{attrs:{to:{name:"topic",params:{id:e.id}}}},[o("mu-list-item",[o("div",{staticClass:"title",attrs:{title:t.getTabInfo(e.tab,e.good,e.top,!0)},domProps:{innerHTML:t._s(e.title)}}),t._v(" "),o("mu-flexbox",{staticClass:"content"},[o("mu-flexbox-item",{staticClass:"flex-demo",attrs:{grow:"1"}},[o("mu-avatar",{attrs:{src:e.author.avatar_url}})],1),t._v(" "),o("mu-flexbox-item",{staticClass:"flex-demo",attrs:{grow:"7"}},[o("mu-flexbox",[o("mu-flexbox-item",{staticClass:"flex-demo",attrs:{grow:"1"}},[t._v("\n\t\t\t\t\t                      \t"+t._s(e.author.loginname)+"\n\t\t\t\t\t                    ")]),t._v(" "),o("mu-flexbox-item",{staticClass:"flex-demo",attrs:{grow:"1"}},[o("span",{staticClass:"blue"},[t._v(t._s(e.reply_count))]),t._v("/"),o("span",{staticClass:"grey"},[t._v(t._s(e.visit_count))])])],1),t._v(" "),o("mu-flexbox",[o("mu-flexbox-item",{staticClass:"flex-demo",attrs:{grow:"1"}},[t._v("\n\t\t\t\t\t                      \t"+t._s(t._f("getTimeStr")(e.create_at))+"\n\t\t\t\t\t                    ")]),t._v(" "),o("mu-flexbox-item",{staticClass:"flex-demo",attrs:{grow:"1"}},[t._v("\n\t\t\t\t\t                      \t"+t._s(t._f("getTimeStr")(e.last_reply_at))+"\n\t\t\t\t\t                    ")])],1)],1)],1)],1)],1),t._v(" "),o("mu-divider")]})],2),t._v(" "),o("mu-infinite-scroll",{attrs:{scroller:t.scroller,loading:t.loading},on:{load:t.loadMore}}),t._v(" "),o("totop",{attrs:{page:"list"}})],1):t._e(),t._v(" "),t.success?t._e():o("div",{staticClass:"error"},[o("img",{attrs:{src:n(7),alt:""}})])],1)},staticRenderFns:[]}},70:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={replace:!0,name:"hello",props:["theme"],data:function(){return{open:!1,docked:!0,title:"全部",userInfo:{},rightTop:{horizontal:"right",vertical:"top"}}},mounted:function(){this.$store.state.user.userInfo&&(this.userInfo=this.$store.state.user.userInfo)},methods:{toggle:function(t){this.open=!this.open,this.docked=!t},channel:function(t){this.title=t},loginOut:function(){this.docked=!1,window.window.sessionStorage.removeItem("user"),window.window.sessionStorage.removeItem("info"),setTimeout(function(){history.go(0)},200)}}}},71:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(4),s=o(i);e.default={name:"toTop",props:["page"],components:{},filters:{},data:function(){return{show:!1,target:null}},mounted:function(){var t=this;"list"==this.page?this.target=".demo-infinite-container":this.target=window,(0,s.default)(this.target).on("scroll",function(){(0,s.default)(t.target).scrollTop()>200?t.show=!0:t.show=!1})},methods:{toTop:function(){return(0,s.default)(this.target).scrollTop(0),this.show=!1,!1}},watch:{}}},76:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(21),s=o(i),r=n(4),a=o(r),u=n(6),l=n(5),c=o(l),f=n(11),m=o(f);e.default={name:"app",components:{mhead:c.default,totop:m.default},filters:{getTimeStr:function(t){return(0,u.getTimeStr)(t)}},data:function(){return{title:"全部",num:20,loading:!1,scroller:null,success:!1,topics:[],searchKey:{page:1,limit:20,tab:"all",mdrender:!0},refreshing:!1,trigger:null}},mounted:function(){this.scroller=this.$el,this.trigger=this.$el,this.$route.query&&this.$route.query.tab&&(this.searchKey.tab=this.$route.query.tab),window.window.sessionStorage.searchKey&&window.window.sessionStorage.tab===this.searchKey.tab?(this.topics=JSON.parse(window.window.sessionStorage.topics),this.searchKey=JSON.parse(window.window.sessionStorage.searchKey),this.success=!0,this.$nextTick(function(){(0,a.default)(".demo-infinite-container").scrollTop(window.window.sessionStorage.scrollTop)})):this.getTopics()},beforeRouteLeave:function(t,e,n){"topic"===t.name&&(window.window.sessionStorage.scrollTop=(0,a.default)(".demo-infinite-container").scrollTop(),window.window.sessionStorage.topics=(0,s.default)(this.topics),window.window.sessionStorage.searchKey=(0,s.default)(this.searchKey),window.window.sessionStorage.tab=e.query.tab||"all"),(0,a.default)(window).off("scroll"),n()},beforeRouteEnter:function(t,e,n){"topic"!==e.name&&window.window.sessionStorage.tab&&(window.window.sessionStorage.removeItem("topics"),window.window.sessionStorage.removeItem("searchKey"),window.window.sessionStorage.removeItem("tab")),n()},methods:{loadMore:function(){var t=this;this.loading=!0,setTimeout(function(){t.searchKey.limit+=20,t.getTopics(),t.loading=!1},2e3)},getTopics:function(){var t=this;a.default.get("https://cnodejs.org/api/v1/topics?"+a.default.param(this.searchKey),function(e){t.topics=e.data,t.success=!0})},getTabInfo:function(t,e,n,o){return(0,u.getTabInfo)(t,e,n,o)},refresh:function(){var t=this;this.refreshing=!0,setTimeout(function(){t.getTopics(),t.refreshing=!1},2e3)}},watch:{$route:function(t,e){this.success=!1,this.searchKey.tab=t.query.tab,this.searchKey.limit=20,this.getTopics()}}}},82:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){!function(){t(n(9))}(n)},i=function(t){n.e(1,function(){t(n(16))})},s=[{path:"/",name:"loading",component:i},{path:"/list",name:"list",component:o},{path:"/topic/:id",name:"topic",component:function(t){n.e(0,function(){t(n(19))})}},{path:"/add",name:"add",component:function(t){n.e(8,function(){t(n(13))})},meta:{requiresAuth:!0}},{path:"/login",name:"login",component:function(t){n.e(6,function(){t(n(17))})}},{path:"/user/:loginname",name:"user",component:function(t){n.e(5,function(){t(n(20))})}},{path:"/info",name:"info",component:function(t){n.e(3,function(){t(n(15))})}},{path:"/about",name:"about",component:function(t){n.e(2,function(){t(n(12))})}},{path:"/sport",name:"sport",component:function(t){n.e(7,function(){t(n(18))})}},{path:"/collection",name:"collection",component:function(t){n.e(4,function(){t(n(14))})}},{path:"*",component:i}];e.default=s},83:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={state:{notiNum:null},getters:{getNotiNum:function(t){return t.notiNum}},mutations:{setNotiNum:function(t,e){t.notiNum=e}},actions:{setNotiNum:function(t,e){var n=t.commit;n("setNotiNum",e)}}};e.default=n},84:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(10),s=o(i),r=n(65),a=o(r),u=n(85),l=o(u),c=n(83),f=o(c);s.default.use(a.default);var m=new a.default.Store({modules:{user:l.default,info:f.default}});e.default=m},85:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={state:{userInfo:{}},getters:{getUserInfo:function(t){return t.userInfo}},mutations:{setUserInfo:function(t,e){t.userInfo=e}},actions:{setUserInfo:function(t,e){var n=t.commit;n("setUserInfo",e)}}};e.default=n},86:function(t,e){}});