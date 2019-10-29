<template>
  <div class="collections">
    <headerMiddle title="我的收藏"></headerMiddle>
    <homePosts v-for="(item,index) in data" :key="index" :posts="item"></homePosts>
    <!-- <div class="content" v-for="(item,index) in data" :key="index">
      <div class="singleCover" v-if="item.cover.length==1">
      <div class="left">
        <div class="title">{{item.title}}</div>
        <div class="info">{{item.user.nickname}}&nbsp;&nbsp;{{item.comments.length}}跟帖 </div>
      </div>
      <div class="right">
        <img :src="item.cover[0].url" alt="">
      </div>
    </div>
    <div  v-else class="multipCove">
      <div class="title">{{item.title}}</div>
      <div class="imgWrapper"  :key="index">
        <img :src="item.cover[0].url" alt="">
        <img :src="item.cover[1].url" alt="">
        <img :src="item.cover[2].url" alt="">
      </div>
      <div class="info">{{item.user.nickname}}&nbsp;&nbsp;{{item.comments.length}}跟帖</div>
    </div>
    </div> -->
  </div>
</template>

<script>
import headerMiddle from '../components/headerMiddle'
import homePosts from '../components/homePosts'
export default {
  data(){
    return {
      data:[]
    }
  },
  components:{
    headerMiddle,
    homePosts
  },
  mounted(){
    this.$axios({
      url:'/user_star',
      method:'get',
    }).then(res=>{
      // console.log(res.data.data);
      this.data=res.data.data;
        this.data.forEach(element=>{
          element.comment_length=element.comments.length;
          element.cover.forEach(element=>{
            if(element.url.indexOf('http')<0){
              element.url = this.$axios.defaults.baseURL + element.url
            }
          })
        })
    })
  }
}
</script>

<style lang="less" scoped>
  .collections{
    .singleCover{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 4.167vw 2.778vw;
      border-bottom: 1px solid #ccc;
      .left{
        flex:2;
        .title{
          font-size: 5vw;
          margin-bottom: 5.556vw;
        }
        .info{
          font-size: 3.889vw;
          color: #777;
        }
      }
      .right{
        flex: 1;
        height: 20.556vw;
        overflow: hidden;
        img{
          width: 100%;
        }
      }
    }
    .multipCove{
       padding: 4.167vw 2.778vw;
        border-bottom: 1px solid #ccc;
        .title{
          font-size: 5vw;
        }
        .imgWrapper{
          display: flex;
          width: 100%;
          margin: 1.389vw 0;
          overflow: hidden;
          height: 20.556vw;
          img{
            width: 33%;
            height: auto;
            margin-left: 1px;
          }
        }
        .info{
          font-size: 3.889vw;
          color: #777;
        }
    }
  }
</style>