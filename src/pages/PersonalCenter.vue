<template>
  <div class="case">
      <div class="headerTop" @click="editDataPage">
          <div class="headPortrait" >
              <img :src="data.head_img" alt="">
              <!-- <img v-else src="@/assets/logo.png" alt=""> -->
          </div>
          <div class="content">
              <div class="userMessage">
                  <span v-if="data.gender==1" class="iconfont iconxingbienan"></span>
                  <span v-else class="iconfont iconxingbienv"></span>
                  {{data.nickname}}
              </div>
              <div class="time">2019-10-10</div>
          </div>
          <div class="right">
              <span class="iconfont iconjiantou1"></span>
          </div>
      </div>  
      <authList title="我的关注" particulars="关注的用户" @redirect="$router.push('/myConcern')"></authList>
      <authList title="我的跟帖" particulars="跟帖/回复" @redirect="$router.push('/myComments')"></authList>
      <authList title="我的收藏" particulars="文章/视频" @redirect="$router.push('/myCollections')"></authList>
      <authList title="设置"  @redirect="editDataPage"></authList>
      <authList title="退出登录"  @redirect="loginPage"></authList>
  </div>
  
</template>

<script>
// 引入自己的插件
import authList from '../components/authList'
export default {
    data(){
        return {
            data:[]
        }
    },
    components:{
        authList
    },
    methods:{
       redirect(title){
        //    跳转页面带有参数
        //   console.log(title);
       } ,
       editDataPage(title){
        //    跳转到编辑资料页面
           this.$router.push({
               name: 'editDataPage'
           })
       },
       loginPage(){
           //退出登录时把本地储存的token数据和user_id清除
           localStorage.removeItem('token'),
           localStorage.removeItem('user_id')
           this.$router.replace({
               name:'LoginPage'
           })
       }
    },
    mounted(){
        // console.log(localStorage.getItem('token'));
        // 向后台发送请求
        this.$axios({
            url:'http://127.0.0.1:3000/user/'+localStorage.getItem('user_id'),
            method:'get',
            headers:{
                Authorization:localStorage.getItem('token')
            }
        }).then(res=>{
            // console.log(res.data.data);
            this.data=res.data.data;
            if(this.data.head_img) {
                this.data.head_img=this.$axios.defaults.baseURL+ this.data.head_img;
                // console.log(this.$axios.defaults.baseURL)
            }else{
                this.data.head_img='/static/imgs/a.jpg'
            }
        })
    }
}
</script>

<style lang="less" scoped>
// scope是只能在当前页面有用，lang="less"  告诉vue使用less写的
    .case{
        .headerTop{
            display: flex;
            justify-content: space-around;
            padding:8.333vw 6.944vw;
            align-items: center;
            border-bottom: 1.389vw solid #eee;
          .headPortrait{
              width:69.998px;
              height: 69.998px;
              border-radius: 50%;
              img{
                width: 100%;
                border-radius: 50%;
              }
          } 
          .content{
              flex: 1;
              margin-left: 20.002px;

              .time{
                  font-size: 3.889vw;
                  color: #777;
              }
          } 
          .right{
              padding-right: 20.002px;
          }
        }
    }
</style>