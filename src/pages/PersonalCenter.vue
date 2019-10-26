<template>
  <div class="case">
      <div class="headerTop">
          <div class="headPortrait">
              <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1023155365,4000686310&fm=26&gp=0.jpg" alt="">
          </div>
          <div class="content">
              <div class="userMessage">
                  <span class="iconfont iconxingbienan"></span>
                  火星网友
              </div>
              <div class="time">2019-10-10</div>
          </div>
          <div class="right">
              <span class="iconfont iconjiantou1"></span>
          </div>
      </div>  
      <authList title="我的关注" particulars="关注的用户" @redirect="redirect"></authList>
      <authList title="我的跟帖" particulars="跟帖/回复" @redirect="redirect"></authList>
      <authList title="我的收藏" particulars="文章/视频" @redirect="redirect"></authList>
      <authList title="设置"  @redirect="redirect"></authList>
      <authList title="退出登录"  @redirect="loginPage"></authList>
  </div>
  
</template>

<script>
import authList from '../components/authList'
export default {
    data(){
        return {
            
        }
    },
    components:{
        authList
    },
    methods:{
       redirect(title){
        //    跳转页面带有参数
          console.log(title);
       } ,
       loginPage(){
           this.$router.push({
               name:'LoginPage'
           })
       }
    }
}
</script>

<style lang="less" scoped>
    .case{
        .headerTop{
            display: flex;
            justify-content: space-around;
            padding:30px 25px;
            align-items: center;
            border-bottom: 5px solid #eee;
          .headPortrait{
              width:19.444vw;
              height: 19.444vw;
              border-radius: 50%;
              img{
                width: 100%;
                border-radius: 50%;
              }
          } 
          .content{
              flex: 1;
              margin-left: 5.556vw;

              .time{
                  font-size: 14px;
                  color: #777;
              }
          } 
          .right{
              padding-right: 5.556vw;
          }
        }
    }
</style>