<template>
  <div class="content">
      <span class="iconfont iconjiantou2" @click="$router.back()"></span>
      <span class="iconfont iconnew"></span>
      <div class="btn"  @click="follow" v-if="!post.has_follow">
          <span>关注</span>
      </div>
      <div class="btn change" v-if="post.has_follow" @click="unfollow">
          <span>已关注</span>
      </div>
  </div>
</template>

<script>
export default {
    props:['post'],
    data(){
        return {
            state:false
        }
    },
    methods:{
       follow(){
           this.$axios({
               url:'/user_follows/'+this.post.user.id,
               method:'get'
           }).then(res=>{
            //    console.log(res.data);
               const {message}=res.data
               if(message==='关注成功'){
                   this.post.has_follow=true;
               }
           })
       } ,
       unfollow(){
           this.$axios({
               url:'/user_unfollow/'+this.post.user.id,
               method:'get'
           }).then(res=>{
            //    console.log(res)
               const {message}=res.data;
                if(message==='取消关注成功'){
                   this.post.has_follow=false;
               }
           })
       }
    }
}
</script>

<style lang="less" scoped>
    .content{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 4.167vw;
        // height: 18.056vw;
        .iconnew{
            flex: 1;
            font-size: 15vw;
        }
        .btn{
            width: 17.222vw;
            height: 7.222vw;
            line-height: 7.222vw;
            text-align: center;
            border-radius: 4.444vw;
            font-size: 12px;
            color: #fff;
            background-color: red;
            border: 1px solid #f00;
            box-sizing: border-box;
            &.change{
                color: #000;
                background-color: #eee;
                border: 1px solid #ccc;
            }
        }
    }
</style>