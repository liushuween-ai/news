webpackJsonp([1],{"1cGU":function(t,e){},"4ml/":function(t,e){},"7IlP":function(t,e){},DrfL:function(t,e){},FKcS:function(t,e){},FKkx:function(t,e){},Gbtc:function(t,e){},"LJV/":function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var i=s("VU/8")({name:"App"},n,!1,function(t){s("FKkx")},null,null).exports,o=s("/ocq"),r=s("Gu7T"),c=s.n(r),l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header"},[s("span",{staticClass:"iconfont iconnew"}),t._v(" "),s("div",{staticClass:"search",on:{click:function(e){return t.$router.push("/search")}}},[s("span",{staticClass:"iconfont iconsearch"}),t._v("\n        搜索新闻\n    ")]),t._v(" "),s("span",{staticClass:"iconfont iconwode",on:{click:function(e){return t.$router.push("/personalCenter")}}})])},staticRenderFns:[]};var d=s("VU/8")({},l,!1,function(t){s("l/A0")},"data-v-e7467234",null).exports,u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[2==t.posts.type?s("div",{staticClass:"videoPost"},[s("div",{staticClass:"title",on:{click:t.toDetails}},[t._v(t._s(t.posts.title))]),t._v(" "),s("div",{staticClass:"cover",on:{click:t.toDetails}},[s("img",{attrs:{src:t.$fixImgUrl(t.posts.cover[0].url),alt:""}}),t._v(" "),t._m(0)]),t._v(" "),s("div",{staticClass:"info"},[t._v(t._s(t.posts.user.nickname)+"   "),s("span",[t._v(t._s(t.posts.comment_length)+"跟帖")])])]):t.posts.cover.length>0&&t.posts.cover.length<3?s("div",{staticClass:"singleImgPost"},[s("div",{staticClass:"left"},[s("div",{staticClass:"title",on:{click:t.toDetails}},[t._v(t._s(t.posts.title))]),t._v(" "),s("div",{staticClass:"info"},[t._v(t._s(t.posts.user.nickname)+"   "),s("span",[t._v(t._s(t.posts.comment_length)+"跟帖")])])]),t._v(" "),s("div",{staticClass:"rigth",on:{click:t.toDetails}},[s("img",{attrs:{src:t.$fixImgUrl(t.posts.cover[0].url),alt:""}})])]):t.posts.cover.length>=3?s("div",{staticClass:"multipImgPost"},[s("div",{staticClass:"title",on:{click:t.toDetails}},[t._v(t._s(t.posts.title))]),t._v(" "),s("div",{staticClass:"conter",on:{click:t.toDetails}},[s("img",{attrs:{src:t.$fixImgUrl(t.posts.cover[0].url),alt:""}}),t._v(" "),s("img",{attrs:{src:t.$fixImgUrl(t.posts.cover[1].url),alt:""}}),t._v(" "),s("img",{attrs:{src:t.$fixImgUrl(t.posts.cover[2].url),alt:""}})]),t._v(" "),s("div",{staticClass:"info"},[t._v("\n      "+t._s(t.posts.user.nickname)+"   "),s("span",[t._v(t._s(t.posts.comment_length)+"跟帖")])])]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"btnWrapper"},[e("div",{staticClass:"iconfont iconshipin"})])}]};var h=s("VU/8")({props:["posts"],methods:{toDetails:function(){this.$router.push({name:"postDetailsPage",params:{id:this.posts.id}})}}},u,!1,function(t){s("rHcO")},"data-v-59629102",null).exports,m={components:{homeHeader:d,homePosts:h},data:function(){return{activeTab:localStorage.getItem("token")?1:0,pageSize:6,tabList:[],loading:!1}},mounted:function(){this.initTabList()},watch:{activeTab:function(t){0==this.tabList[t].props.length&&this.getTabProps(t)}},methods:{initTabList:function(){var t=this;if(localStorage.getItem("tabActive")){var e=JSON.parse(localStorage.getItem("tabActive"));e.forEach(function(t){t.props=[],t.currentPage=1,t.finished=!1}),this.tabList=e,this.getTabProps(this.activeTab)}else this.$axios({url:"/category",method:"get"}).then(function(e){var s=e.data.data;s.forEach(function(t){t.props=[],t.currentPage=1,t.finished=!1}),t.tabList=s,t.getTabProps(t.activeTab)})},loadMorePost:function(){this.tabList[this.activeTab].currentPage++,this.getTabProps(this.activeTab)},getTabProps:function(t){var e=this,s=this.tabList[t].id,a=this.tabList[t].currentPage;this.$axios({url:"/post",method:"get",params:{category:s,pageIndex:a,pageSize:this.pageSize}}).then(function(s){var a=s.data.data,n=[].concat(c()(e.tabList[t].props),c()(a));e.tabList[t].props=n,a.length<e.pageSize&&(e.tabList[t].finished=!0,e.loading=!1)})}}},v={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("homeHeader"),t._v(" "),s("van-tabs",{attrs:{sticky:"",swipeable:"",animated:""},model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},t._l(t.tabList,function(e,a){return s("van-tab",{key:a,attrs:{title:e.name}},[s("van-list",{attrs:{finished:t.tabList[t.activeTab].finished,"finished-text":"没有更多了","immediate-check":!1},on:{load:t.loadMorePost},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(e.props,function(t,e){return s("homePosts",{key:e,attrs:{posts:t}})}),1)],1)}),1)],1)},staticRenderFns:[]};var p=s("VU/8")(m,v,!1,function(t){s("o68/")},null,null).exports,f={props:["type","placeholder","rule","err_message"],data:function(){return{isOk:!0}},methods:{dataChange:function(t){if(t.target.value){var e=new RegExp(this.rule);this.isOk=e.test(t.target.value)}else this.isOk=!0;this.$emit("input",t.target.value)},showTips:function(){this.isOk||this.$toast.fail(this.err_message)}}},_={render:function(){var t=this.$createElement;return(this._self._c||t)("input",{staticClass:"input",class:{error:!this.isOk},attrs:{type:this.type,placeholder:this.placeholder},on:{input:this.dataChange,blur:this.showTips}})},staticRenderFns:[]};var g=s("VU/8")(f,_,!1,function(t){s("LJV/")},null,null).exports,C={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"btn",on:{click:this.send}},[this._v(this._s(this.text))])},staticRenderFns:[]};var k=s("VU/8")({props:["text"],methods:{send:function(){this.$emit("send")}}},C,!1,function(t){s("lv6g")},"data-v-7d88ea8a",null).exports,b={data:function(){return{UserName:"",password:""}},components:{authInput:g,authBtn:k},methods:{setUserName:function(t){this.UserName=t},setPassword:function(t){this.password=t},sendLogin:function(){var t=this;this.$axios({url:"/login",method:"post",data:{username:this.UserName,password:this.password}}).then(function(e){200==e.data.statusCode&&(localStorage.setItem("token",e.data.data.token),localStorage.setItem("user_id",e.data.data.user.id),setTimeout(function(){t.$router.push({name:"PersonalCenterPage"})},1e3),t.$toast.success(e.data.message))})}}},x={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"UserName"},[s("authInput",{attrs:{type:"text",placeholder:"请输入手机号",rule:"^\\d{4,16}$",err_message:"请输入正确的手机号"},on:{input:t.setUserName}})],1),t._v(" "),s("div",{staticClass:"password"},[s("authInput",{attrs:{type:"password",placeholder:"请输入密码",rule:"^\\d{3,16}$",err_message:"请输入正确的密码"},on:{input:t.setPassword}})],1),t._v(" "),s("div",{staticClass:"loginBtn"},[s("authBtn",{attrs:{text:"登录"},on:{send:t.sendLogin}})],1),t._v(" "),s("div",{staticClass:"register"},[t._v("\n        还没有账号? "),s("router-link",{attrs:{to:"/register"}},[t._v("立即注册")])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"loginIcon"},[e("span",{staticClass:"iconfont iconicon-test"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("span",{staticClass:"iconfont iconnew"})])}]};var $=s("VU/8")(b,x,!1,function(t){s("dJZ+")},"data-v-359e25ec",null).exports,w={data:function(){return{UserName:"",password:"",nickname:""}},components:{authInput:g,authBtn:k},methods:{setUserName:function(t){this.UserName=t},setPassword:function(t){this.password=t},setNickname:function(t){this.nickname=t},sendRegister:function(){var t=this;this.$axios({url:"/register",method:"post",data:{username:this.UserName,password:this.password,nickname:this.nickname}}).then(function(e){e.data.statusCode||t.$toast.success(e.data.message)})}}},y={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"register"},[s("div",{staticClass:"registerIcon"},[s("span",{staticClass:"iconfont iconicon-test",on:{click:function(e){return t.$router.back()}}})]),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"UserName"},[s("authInput",{attrs:{type:"text",placeholder:"用户名/手机号码",rule:"^\\d{4,16}$",err_message:"请输入正确的手机号"},on:{input:t.setUserName}})],1),t._v(" "),s("div",{staticClass:"nickname"},[s("authInput",{attrs:{type:"text",placeholder:"昵称",rule:"^\\w{4,16}$",err_message:"请输入正确的昵称"},on:{input:t.setNickname}})],1),t._v(" "),s("div",{staticClass:"password"},[s("authInput",{attrs:{type:"password",placeholder:"请输入密码",rule:"^\\d{3,16}$",err_message:"请输入正确的密码"},on:{input:t.setPassword}})],1),t._v(" "),s("div",{staticClass:"registerBtn"},[s("authBtn",{attrs:{text:"注册"},on:{send:t.sendRegister}})],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("span",{staticClass:"iconfont iconnew"})])}]};var I=s("VU/8")(w,y,!1,function(t){s("NnX5")},"data-v-775222f8",null).exports,P={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"list",on:{click:t.redirect}},[s("div",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),s("div",{staticClass:"particulars"},[t._v(t._s(t.particulars)+"\n        "),s("span",{staticClass:"iconfont iconjiantou1"})])])},staticRenderFns:[]};var L=s("VU/8")({props:["title","particulars"],methods:{redirect:function(){this.$emit("redirect",this.title)}}},P,!1,function(t){s("SnFp")},"data-v-7f7711f3",null).exports,S={data:function(){return{data:[]}},components:{authList:L},methods:{redirect:function(t){},editDataPage:function(t){this.$router.push({name:"editDataPage"})},loginPage:function(){localStorage.removeItem("token"),localStorage.removeItem("user_id"),this.$router.replace({name:"LoginPage"})}},mounted:function(){var t=this;this.$axios({url:"/user/"+localStorage.getItem("user_id"),method:"get",headers:{Authorization:localStorage.getItem("token")}}).then(function(e){t.data=e.data.data,t.data.head_img?t.data.head_img=t.$axios.defaults.baseURL+t.data.head_img:t.data.head_img="/static/imgs/a.jpg"})}},D={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"case"},[s("div",{staticClass:"headerTop",on:{click:t.editDataPage}},[s("div",{staticClass:"headPortrait"},[s("img",{attrs:{src:t.data.head_img,alt:""}})]),t._v(" "),s("div",{staticClass:"content"},[s("div",{staticClass:"userMessage"},[1==t.data.gender?s("span",{staticClass:"iconfont iconxingbienan"}):s("span",{staticClass:"iconfont iconxingbienv"}),t._v("\n                "+t._s(t.data.nickname)+"\n            ")]),t._v(" "),s("div",{staticClass:"time"},[t._v("2019-10-10")])]),t._v(" "),t._m(0)]),t._v(" "),s("authList",{attrs:{title:"我的关注",particulars:"关注的用户"},on:{redirect:function(e){return t.$router.push("/myConcern")}}}),t._v(" "),s("authList",{attrs:{title:"我的跟帖",particulars:"跟帖/回复"},on:{redirect:function(e){return t.$router.push("/myComments")}}}),t._v(" "),s("authList",{attrs:{title:"我的收藏",particulars:"文章/视频"},on:{redirect:function(e){return t.$router.push("/myCollections")}}}),t._v(" "),s("authList",{attrs:{title:"栏目管理",particulars:"栏目"},on:{redirect:function(e){return t.$router.push("/tabManager")}}}),t._v(" "),s("authList",{attrs:{title:"设置"},on:{redirect:t.editDataPage}}),t._v(" "),s("authList",{attrs:{title:"退出登录"},on:{redirect:t.loginPage}})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"right"},[e("span",{staticClass:"iconfont iconjiantou1"})])}]};var U=s("VU/8")(S,D,!1,function(t){s("DrfL")},"data-v-20128fec",null).exports,F={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"vessel"},[s("span",{staticClass:"iconfont iconjiantou2",on:{click:function(e){return t.$router.back()}}}),t._v(" "),s("div",{staticClass:"text"},[t._v(t._s(t.title))])])},staticRenderFns:[]};var A=s("VU/8")({props:["title"]},F,!1,function(t){s("bQHV")},"data-v-52dc2345",null).exports,E={data:function(){return{data:[],isShowNickname:!1,nickname:"",isShowPassword:!1,password:"",newData:{},isShowGender:!1,gender:[{name:"男"},{name:"女"}],editGenderNub:""}},components:{headerMiddle:A,authList:L},methods:{afterRead:function(t){var e=this,s=new FormData;s.append("file",t.file),this.$axios({url:"/upload",method:"post",data:s}).then(function(t){e.editPageData({head_img:t.data.data.url})})},getPageData:function(){var t=this;this.$axios({url:"/user/"+localStorage.getItem("user_id"),method:"get",headers:{Authorization:localStorage.getItem("token")}}).then(function(e){t.data=e.data.data,t.data.head_img?t.data.head_img=t.$axios.defaults.baseURL+t.data.head_img:t.data.head_img="/static/imgs/a.jpg",t.data.gender=1===t.data.gender?"男":"女"})},editPageData:function(t){var e=this;this.$axios({url:"/user_update/"+localStorage.getItem("user_id"),method:"POST",headers:{Authorization:localStorage.getItem("token")},data:t}).then(function(t){e.getPageData()})},editNackname:function(){this.editPageData({nickname:this.nickname})},editPassword:function(){this.editPageData({password:this.password})},editGender:function(t){this.editGenderNub="女"===t.name?0:1,this.editPageData({gender:this.editGenderNub}),this.isShowGender=!1}},mounted:function(){this.getPageData()}},N={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("headerMiddle",{attrs:{title:"编辑资料"}}),t._v(" "),s("div",{staticClass:"headPortraits"},[s("img",{attrs:{src:t.data.head_img,alt:""}}),t._v(" "),s("van-uploader",{staticClass:"upFile",attrs:{"after-read":t.afterRead}})],1),t._v(" "),s("authList",{attrs:{title:"昵称",particulars:t.data.nickname},on:{redirect:function(e){t.isShowNickname=!0}}}),t._v(" "),s("authList",{attrs:{title:"密码",particulars:"******"},on:{redirect:function(e){t.isShowPassword=!0}}}),t._v(" "),s("authList",{attrs:{title:"性别",particulars:t.data.gender},on:{redirect:function(e){t.isShowGender=!0}}}),t._v(" "),s("van-dialog",{attrs:{title:"编辑昵称","show-cancel-button":""},on:{confirm:t.editNackname},model:{value:t.isShowNickname,callback:function(e){t.isShowNickname=e},expression:"isShowNickname"}},[s("van-field",{attrs:{type:"text",placeholder:"输入昵称"},model:{value:t.nickname,callback:function(e){t.nickname=e},expression:"nickname"}})],1),t._v(" "),s("van-dialog",{attrs:{title:"编辑密码","show-cancel-button":""},on:{confirm:t.editPassword},model:{value:t.isShowPassword,callback:function(e){t.isShowPassword=e},expression:"isShowPassword"}},[s("van-field",{attrs:{type:"password",placeholder:"输入密码"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),s("van-action-sheet",{attrs:{actions:t.gender,"cancel-text":"取消"},on:{select:t.editGender},model:{value:t.isShowGender,callback:function(e){t.isShowGender=e},expression:"isShowGender"}})],1)},staticRenderFns:[]};var R=s("VU/8")(E,N,!1,function(t){s("efl3")},"data-v-b76630ac",null).exports,T={data:function(){return{userData:[]}},components:{headerMiddle:A},methods:{loadPage:function(){var t=this;this.$axios({url:"/user_follows/",method:"get",headers:{Authorization:localStorage.getItem("token")}}).then(function(e){t.userData=e.data.data,t.userData.forEach(function(e){e.head_img?e.head_img=t.$axios.defaults.baseURL+e.head_img:e.head_img="/static/imgs/a.jpg"})})},cancelConcern:function(t){var e=this;this.$axios({url:"/user_unfollow/"+t,method:"get"}).then(function(t){e.loadPage()})}},mounted:function(){this.loadPage()}},V={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("headerMiddle",{attrs:{title:"我的关注"}}),t._v(" "),t._l(t.userData,function(e,a){return s("div",{key:a,staticClass:"list"},[s("img",{attrs:{src:e.head_img,alt:""}}),t._v(" "),s("div",{staticClass:"content"},[s("p",[t._v(t._s(e.nickname))]),t._v(" "),s("span",{staticClass:"time"},[t._v("2019.10.10")])]),t._v(" "),s("div",{staticClass:"btn",on:{click:function(s){return t.cancelConcern(e.id)}}},[t._v("取消关注")])])})],2)},staticRenderFns:[]};var M=s("VU/8")(T,V,!1,function(t){s("h3iw")},"data-v-056b479c",null).exports,O={components:{headerMiddle:A},data:function(){return{data:[],pageIndex:1,pageSize:3}},mounted:function(){this.getPagindData(this.pageIndex)},methods:{getPagindData:function(t){var e=this;this.$axios({url:"/user_comments",method:"get",params:{pageIndex:t,pageSize:this.pageSize}}).then(function(t){var s=[].concat(c()(e.data),c()(t.data.data));e.data=s,t.data.data.length<e.pageSize&&e.$toast.fail("亲,没有更多跟帖了")})},getCommentData:function(){this.pageIndex++,this.getPagindData(this.pageIndex)}}},z={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"comment"},[s("headerMiddle",{attrs:{title:"我的跟帖"}}),t._v(" "),t._l(t.data,function(e,a){return s("div",{key:a,staticClass:"content"},[s("div",{staticClass:"date"},[t._v("2019.10.28  12.08.11")]),t._v(" "),e.parent?s("div",{staticClass:"parent"},[s("div",{staticClass:"nickname"},[t._v("回复:"+t._s(e.parent.user.nickname))]),t._v(" "),s("div",{staticClass:"discuss"},[t._v(t._s(e.parent.content))])]):t._e(),t._v(" "),s("div",{staticClass:"reply"},[t._v(t._s(e.content))]),t._v(" "),s("div",{staticClass:"postOrigin"},[s("span",{staticClass:"post"},[t._v("原文:"+t._s(e.post.title))]),t._v(" "),s("span",{staticClass:"iconfont iconjiantou1"})])])}),t._v(" "),s("div",{staticClass:"getcomments",on:{click:t.getCommentData}},[t._v("更多跟帖\n        "),s("span",{staticClass:"iconfont iconjiantou1"}),t._v(" "),s("span",{staticClass:"iconfont iconjiantou1"})])],2)},staticRenderFns:[]};var H=s("VU/8")(O,z,!1,function(t){s("wfOq")},"data-v-11ba0406",null).exports,G={data:function(){return{data:[]}},components:{headerMiddle:A,homePosts:h},mounted:function(){var t=this;this.$axios({url:"/user_star",method:"get"}).then(function(e){t.data=e.data.data,t.data.forEach(function(e){e.comment_length=e.comments.length,e.cover.forEach(function(e){e.url.indexOf("http")<0&&(e.url=t.$axios.defaults.baseURL+e.url)})})})}},j={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"collections"},[e("headerMiddle",{attrs:{title:"我的收藏"}}),this._v(" "),this._l(this.data,function(t,s){return e("homePosts",{key:s,attrs:{posts:t}})})],2)},staticRenderFns:[]};var B=s("VU/8")(G,j,!1,function(t){s("sOHS")},"data-v-2d7a419e",null).exports,J={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("span",{staticClass:"iconfont iconjiantou2",on:{click:function(e){return t.$router.back()}}}),t._v(" "),s("span",{staticClass:"iconfont iconnew"}),t._v(" "),t.post.has_follow?t._e():s("div",{staticClass:"btn",on:{click:t.follow}},[s("span",[t._v("关注")])]),t._v(" "),t.post.has_follow?s("div",{staticClass:"btn change",on:{click:t.unfollow}},[s("span",[t._v("已关注")])]):t._e()])},staticRenderFns:[]};var q=s("VU/8")({props:["post"],data:function(){return{state:!1}},methods:{follow:function(){var t=this;this.$axios({url:"/user_follows/"+this.post.user.id,method:"get"}).then(function(e){"关注成功"===e.data.message&&(t.post.has_follow=!0)})},unfollow:function(){var t=this;this.$axios({url:"/user_unfollow/"+this.post.user.id,method:"get"}).then(function(e){"取消关注成功"===e.data.message&&(t.post.has_follow=!1)})}}},J,!1,function(t){s("kKAq")},"data-v-c9c093a4",null).exports,W={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"comment"},[s("div",{directives:[{name:"show",rawName:"v-show",value:!t.isFocus,expression:"!isFocus"}],staticClass:"commentActive"},[s("input",{attrs:{type:"text",placeholder:"写跟帖"},on:{focus:t.showDate}}),t._v(" "),s("div",{staticClass:"commenticon"},[s("div",{staticClass:"commentNumber"},[t._v(t._s(t.post.comment_length))]),t._v(" "),s("span",{staticClass:"iconfont iconpinglun-"})]),t._v(" "),s("span",{staticClass:"iconfont iconshoucang",class:{red:t.post.has_star},on:{click:t.star}}),t._v(" "),t._m(0)]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isFocus,expression:"isFocus"}],staticClass:"commentInactive"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],ref:"commentArea",attrs:{cols:"30",rows:"3"},domProps:{value:t.content},on:{blur:t.handleBlur,input:function(e){e.target.composing||(t.content=e.target.value)}}}),t._v(" "),s("div",{staticClass:"sendBtn",on:{click:t.send}},[t._v("发送")])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"https://developers.weixin.qq.com/doc/offiaccount/Getting_Started/Explanation_of_interface_privileges.html"}},[e("span",{staticClass:"iconfont iconfenxiang"})])}]};var K=s("VU/8")({props:["post","replyActive","commentId"],data:function(){return{isFocus:!1,content:""}},watch:{replyActive:function(){this.isFocus=this.replyActive}},methods:{handleBlur:function(){""===this.content&&(this.isFocus=!1)},send:function(){var t=this;this.$axios({url:"/post_comment/"+this.post.id,method:"post",data:{content:this.content,parent_id:this.commentId.id?this.commentId.id:null}}).then(function(e){e.data.message,t.content="",t.isFocus=!1,t.$emit("newComment")})},showDate:function(){var t=this;this.isFocus=!0,this.$nextTick(function(){t.$refs.commentArea.focus()})},star:function(){var t=this;this.$axios({url:"/post_star/"+this.post.user.id,method:"get"}).then(function(e){var s=e.data.message;"收藏成功"===s?t.post.has_star=!0:"取消成功"===s&&(t.post.has_star=!1)})}}},W,!1,function(t){s("7IlP")},"data-v-63ca17d6",null).exports,Q={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.floorItem.parent?s("floor",{attrs:{floorItem:t.floorItem.parent,parentLengh:t.parentLengh-1},on:{reply:t.reply}}):t._e(),t._v(" "),s("div",{staticClass:"floorWrapper"},[s("div",{staticClass:"meta"},[s("div",{staticClass:"info"},[s("div",{staticClass:"name"},[t._v(t._s(t.parentLengh)+":   "+t._s(t.floorItem.user.nickname))]),t._v(" "),s("div",{staticClass:"time"},[t._v("2小时前")])]),t._v(" "),s("div",{staticClass:"btnReply",on:{click:t.reply}},[t._v("\n                回复\n            ")])]),t._v(" "),s("div",{staticClass:"commentContent"},[t._v("\n            "+t._s(t.floorItem.content)+"\n        ")])])],1)},staticRenderFns:[]};var X={props:["commentItem"],components:{commentFloor:s("VU/8")({name:"floor",props:["floorItem","parentLengh","commentId"],methods:{reply:function(t){t.id?this.$emit("reply",{id:t.id}):this.$emit("reply",{id:this.floorItem.id})}}},Q,!1,function(t){s("kMgI")},"data-v-23718fcd",null).exports},data:function(){return{parentLengh:this.countParent(0,this.commentItem)}},methods:{reply:function(t){t.id?this.$emit("reply",t):this.$emit("reply",{id:this.commentItem.id})},countParent:function(t,e){return e.parent?this.countParent(t+1,e.parent):t}}},Y={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"commentWrappe"},[s("div",{staticClass:"meta"},[t.commentItem.user.head_img?s("img",{staticClass:"avatar",attrs:{src:t.commentItem.user.head_img,alt:""}}):s("img",{staticClass:"avatar",attrs:{src:"/static/imgs/a.jpg",alt:""}}),t._v(" "),s("div",{staticClass:"info"},[s("div",{staticClass:"name"},[t._v(t._s(t.commentItem.user.nickname))]),t._v(" "),s("div",{staticClass:"time"},[t._v("2小时前")])]),t._v(" "),s("div",{staticClass:"btnReply",on:{click:t.reply}},[t._v("\n                回复\n            ")])]),t._v(" "),t.commentItem.parent?s("commentFloor",{attrs:{floorItem:t.commentItem.parent,parentLengh:t.parentLengh},on:{reply:t.reply}}):t._e(),t._v(" "),s("div",{staticClass:"commentContent"},[t._v("\n          "+t._s(this.commentItem.content)+"\n        ")])],1)])},staticRenderFns:[]};var Z=s("VU/8")(X,Y,!1,function(t){s("1cGU")},"data-v-7b0f2e74",null).exports,tt={components:{postDetailHeader:q,postDetailFooter:K,comment:Z},data:function(){return{posts:{},postsId:this.$route.params.id,comments:[],commentId:{},replyActive:0}},mounted:function(){var t=this;this.$axios({url:"/post/"+this.$route.params.id,method:"get"}).then(function(e){t.posts=e.data.data}),this.getComments()},methods:{toMoreComments:function(){this.$router.push({name:"moreCommentsPage",params:{id:this.$route.params.id}})},reply:function(t){this.commentId=t,this.replyActive+=1},like:function(){var t=this;this.$axios({url:"/post_like/"+this.posts.id,method:"get"}).then(function(e){var s=e.data.message;"取消成功"===s?(t.posts.has_like=!1,t.posts.like_length-=1):"点赞成功"===s&&(t.posts.has_like=!0,t.posts.like_length+=1)})},getComments:function(){var t=this;this.$axios({url:"/post_comment/"+this.$route.params.id,method:"get",params:{pageSize:3}}).then(function(e){t.comments=e.data.data})}}},et={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("postDetailHeader",{attrs:{post:t.posts}}),t._v(" "),2==t.posts.type?s("div",{staticClass:"news"},[s("video",{staticClass:"video",attrs:{src:"https://video.pearvideo.com/mp4/adshort/20191031/cont-1617852-11947733-132928_adpkg-ad_hd.mp4",controls:"controls"}}),t._v(" "),s("div",{staticClass:"title"},[t._v(t._s(t.posts.title))]),t._v(" "),t.posts.user?s("div",{staticClass:"info"},[t._v(t._s(t.posts.user.nickname)+"    2019-10-10")]):t._e(),t._v(" "),s("div",{staticClass:"btn"},[s("div",{staticClass:"iconfont icondianzan",class:{like:t.posts.has_like},on:{click:t.like}},[s("span",[t._v(t._s(t.posts.like_length))])]),t._v(" "),t._m(0)])]):s("div",{staticClass:"news"},[s("div",{staticClass:"title"},[t._v(t._s(t.posts.title))]),t._v(" "),t.posts.user?s("div",{staticClass:"info"},[t._v(t._s(t.posts.user.nickname)+"    2019-10-10")]):t._e(),t._v(" "),s("div",{staticClass:"content",domProps:{innerHTML:t._s(t.posts.content)}},[t._v("为营造临时泊位“干静、整洁、平安、有序”面貌迎国庆，市交通部门拟在9月下旬对部分城市道路临时泊位进行清洁保养，请市民群众配合在清洁保养期间将车辆驶离泊位。第一阶段临时泊位清洁保养计划（涉及17条路段）：")]),t._v(" "),s("div",{staticClass:"btn"},[s("div",{staticClass:"iconfont icondianzan",class:{like:t.posts.has_like},on:{click:t.like}},[s("span",[t._v(t._s(t.posts.like_length))])]),t._v(" "),t._m(1)])]),t._v(" "),s("div",{staticClass:"comments"},[t._m(2),t._v(" "),0==t.comments.length?s("div",{staticClass:"commentext"},[t._v("暂无跟帖,抢占沙发")]):s("div",{staticClass:"commentList"},[t._l(t.comments,function(e,a){return s("comment",{key:a,attrs:{commentItem:e},on:{reply:t.reply}})}),t._v(" "),s("div",{staticClass:"btnMoreComments",on:{click:t.toMoreComments}},[t._v("\n                  更多跟帖\n            ")])],2)]),t._v(" "),s("postDetailFooter",{attrs:{post:t.posts,replyActive:t.replyActive,commentId:t.commentId},on:{newComment:t.getComments}})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"iconfont iconweixin"},[e("span",[this._v("微信")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"iconfont iconweixin"},[e("span",[this._v("微信")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("h2",[this._v("精彩跟帖")])])}]};var st=s("VU/8")(tt,et,!1,function(t){s("Gbtc")},"data-v-fed5fccc",null).exports,at=s("mvHQ"),nt=s.n(at),it={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"searchHeader"},[s("span",{staticClass:"iconfont iconjiantou2",on:{click:function(e){return t.$router.back()}}}),t._v(" "),t._m(0),t._v(" "),s("span",[t._v("搜索")])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"search"},[e("span",{staticClass:"iconfont iconsearch"}),this._v(" "),e("input",{attrs:{type:"text",placeholder:"通灵兽消失术"}})])}]};var ot={components:{searchHeader:s("VU/8")({},it,!1,function(t){s("e2uB")},"data-v-14be34d9",null).exports,homePosts:h},data:function(){return{searchText:"",resultList:[],hotList:[],historyList:localStorage.getItem("historyList")?JSON.parse(localStorage.getItem("historyList")):[]}},watch:{searchText:function(){""==this.searchText&&(this.resultList=[])},historyList:function(){localStorage.setItem("historyList",nt()(this.historyList))}},mounted:function(){this.getHotList()},methods:{back:function(){this.searchText?this.searchText="":this.$router.back()},searchByWord:function(t){this.searchText=t,this.search()},search:function(){var t=this;""!=this.searchText&&this.$axios({url:"/post_search",method:"get",params:{keyword:this.searchText}}).then(function(e){var s=e.data.data;t.resultList=s,t.historyList.indexOf(t.searchText)<0&&t.historyList.push(t.searchText)})},getHotList:function(){this.hotList=["关晓彤","王祖贤","女歌手"]}}},rt={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"search"},[s("div",{staticClass:"searchHeader"},[s("span",{staticClass:"iconfont iconjiantou2",on:{click:t.back}}),t._v(" "),s("div",{staticClass:"search"},[s("span",{staticClass:"iconfont iconsearch"}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.searchText,expression:"searchText"}],attrs:{type:"text",placeholder:"通灵兽消失术"},domProps:{value:t.searchText},on:{input:function(e){e.target.composing||(t.searchText=e.target.value)}}})]),t._v(" "),s("span",{staticClass:"btn",on:{click:t.search}},[t._v("搜索")])]),t._v(" "),t.resultList.length>0?s("div",t._l(t.resultList,function(t,e){return s("homePosts",{key:e,attrs:{posts:t}})}),1):s("div",[s("div",{staticClass:"history"},[s("p",{staticClass:"title"},[t._v("历史记录")]),t._v(" "),t._l(t.historyList,function(e,a){return s("p",{key:a,staticClass:"content"},[t._v(t._s(e))])})],2),t._v(" "),s("div",{staticClass:"hot"},[s("p",{staticClass:"title"},[t._v("热门搜索")]),t._v(" "),s("div",{staticClass:"content"},t._l(t.hotList,function(e,a){return s("span",{key:a,on:{click:function(s){return t.searchByWord(e)}}},[t._v(t._s(e))])}),0)])])])},staticRenderFns:[]};var ct=s("VU/8")(ot,rt,!1,function(t){s("NOoR")},"data-v-ecd401e2",null).exports,lt={components:{comment:Z,headerMiddle:A,postDetailFooter:K},data:function(){return{posts:{},commentId:{},comments:[],replyActive:0}},mounted:function(){var t=this;this.$axios({url:"/post/"+this.$route.params.id,method:"get"}).then(function(e){t.posts=e.data.data,console.log(t.posts)}),this.getComments()},methods:{reply:function(t){this.commentId=t,console.log(this.commentId),this.replyActive+=1},getComments:function(){var t=this;this.$axios({url:"/post_comment/"+this.$route.params.id,method:"get"}).then(function(e){t.comments=e.data.data})}}},dt={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("headerMiddle",{attrs:{title:"更多跟帖"}}),t._v(" "),t._l(t.comments,function(e,a){return s("comment",{key:a,attrs:{commentItem:e},on:{reply:t.reply}})}),t._v(" "),s("postDetailFooter",{attrs:{post:t.posts,replyActive:t.replyActive,commentId:t.commentId},on:{newComment:t.getComments}})],2)},staticRenderFns:[]};var ut=s("VU/8")(lt,dt,!1,function(t){s("FKcS")},null,null).exports,ht={components:{headerMiddle:A},data:function(){return{tabActive:[],tabDeactive:[]}},watch:{tabActive:function(){localStorage.setItem("tabActive",nt()(this.tabActive))},tabDeactive:function(){localStorage.setItem("tabDeactive",nt()(this.tabDeactive))}},mounted:function(){var t=this;localStorage.getItem("tabActive")&&localStorage.getItem("tabDeactive")?(this.tabActive=JSON.parse(localStorage.getItem("tabActive")),this.tabDeactive=JSON.parse(localStorage.getItem("tabDeactive"))):this.$axios({url:"/category",method:"get"}).then(function(e){t.tabActive=e.data.data,localStorage.setItem("tabActive",nt()(t.tabActive))})},methods:{toDeactive:function(t){2!=this.tabActive.length&&(this.tabDeactive.push(this.tabActive[t]),this.tabActive.splice(t,1))},toActive:function(t){this.tabActive.push(this.tabDeactive[t]),this.tabDeactive.splice(t,1)}}},mt={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("headerMiddle",{attrs:{title:"栏目管理"}}),t._v(" "),s("div",{staticClass:"active"},[s("h3",[t._v("点击删除以下频道(最少剩下两个频道)")]),t._v(" "),t._l(t.tabActive,function(e,a){return s("div",{key:a,staticClass:"tab",on:{click:function(e){return t.toDeactive(a)}}},[t._v(t._s(e.name))])})],2),t._v(" "),s("div",{staticClass:"deactive"},[s("h3",[t._v("点击添加以下频道")]),t._v(" "),t._l(t.tabDeactive,function(e,a){return s("div",{key:a,staticClass:"tab",on:{click:function(e){return t.toActive(a)}}},[t._v(t._s(e.name))])})],2)],1)},staticRenderFns:[]};var vt=s("VU/8")(ht,mt,!1,function(t){s("Y5z6")},"data-v-b86f79a6",null).exports;a.a.use(o.a);var pt=new o.a({routes:[{path:"/",name:"home",component:p},{path:"/login",name:"LoginPage",component:$},{path:"/register",name:"registerPage",component:I},{path:"/personalCenter",name:"PersonalCenterPage",component:U},{path:"/editData",name:"editDataPage",component:R},{path:"/myConcern",name:"myConcernPage",component:M},{path:"/myComments",name:"myCommentsPage",component:H},{path:"/myCollections",name:"myCollectionsPage",component:B},{path:"/postDetails/:id",name:"postDetailsPage",component:st},{path:"/search",name:"searchPage",component:ct},{path:"/moreComments/:id",name:"moreCommentsPage",component:ut},{path:"/tabManager",name:"tabManagerPage",component:vt}]}),ft=s("mtWM"),_t=s.n(ft),gt=s("Fd2+");s("4ml/");pt.beforeEach(function(t,e,s){var a=localStorage.getItem("token");if(["/personalCenter","/editData","/myConcern","/myComments","/myCollections"].indexOf(t.path)>=0)return a?s():s("/login");s()}),a.a.use(gt.b),a.a.prototype.$axios=_t.a,_t.a.defaults.baseURL="http://111.230.181.206:3000",a.a.prototype.$fixImgUrl=function(t){return t.indexOf("http")<0?_t.a.defaults.baseURL+t:t},_t.a.interceptors.request.use(function(t){return!t.headers.Authorization&&localStorage.getItem("token")&&(t.headers.Authorization=localStorage.getItem("token")),t}),_t.a.interceptors.response.use(function(t){var e=t.data,s=e.message,a=e.statusCode;return(s&&401==a||400==t.data.statusCode)&&gt.a.fail(s),"用户信息验证失败"===s&&pt.push("/login"),t}),new a.a({el:"#app",router:pt,components:{App:i},template:"<App/>"})},NOoR:function(t,e){},NnX5:function(t,e){},SnFp:function(t,e){},Y5z6:function(t,e){},bQHV:function(t,e){},"dJZ+":function(t,e){},e2uB:function(t,e){},efl3:function(t,e){},h3iw:function(t,e){},kKAq:function(t,e){},kMgI:function(t,e){},"l/A0":function(t,e){},lv6g:function(t,e){},"o68/":function(t,e){},rHcO:function(t,e){},sOHS:function(t,e){},wfOq:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.0178568be044384e7a9a.js.map