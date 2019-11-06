<template>
  <div>
    <div class="videoPost" v-if="posts.type==2">
      <div class="title" @click="toDetails">{{posts.title}}</div>
      <div class="cover" @click="toDetails">
        <img :src="$fixImgUrl(posts.cover[0].url)" alt="">
        <div class="btnWrapper">
          <div class="iconfont iconshipin"></div>
        </div>
      </div>
      <div class="info">{{posts.user.nickname}}&nbsp;&nbsp;&nbsp;<span>{{posts.comment_length}}跟帖</span></div>
    </div>
    <div class="singleImgPost" v-else-if="posts.cover.length >0&&posts.cover.length<3">
      <div class="left">
        <div class="title" @click="toDetails">{{posts.title}}</div>
        <div class="info">{{posts.user.nickname}}&nbsp;&nbsp;&nbsp;<span>{{posts.comment_length}}跟帖</span></div>
      </div>
      <div class="rigth" @click="toDetails">
        <img :src="$fixImgUrl(posts.cover[0].url)" alt="">
      </div>
    </div>
    <div class="multipImgPost" v-else-if="posts.cover.length>=3">
      <div class="title" @click="toDetails">{{posts.title}}</div>
      <div class="conter" @click="toDetails">
        <img :src="$fixImgUrl(posts.cover[0].url)" alt="">
        <img :src="$fixImgUrl(posts.cover[1].url)" alt="">
        <img :src="$fixImgUrl(posts.cover[2].url)" alt="">        
      </div>
      <div class="info">
        {{posts.user.nickname}}&nbsp;&nbsp;&nbsp;<span>{{posts.comment_length}}跟帖</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props:['posts'],
    methods:{
      toDetails(){
        this.$router.push({
          name:'postDetailsPage',
          params:{
            id: this.posts.id
          }
        })
      }
    }
}
</script>

<style lang="less" scoped>
  .singleImgPost{
    display:flex;
    justify-content: space-between;
    padding: 4.167vw 2.778vw;
    border-bottom: 1px solid #eee;
    .left{
      margin-right: 1.389vw;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .title{
        font-size: 16px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
      .info{
        font-size: 12px;
        color: #777;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
      }
    }
    .rigth{
     
      img{
        width: 33.611vw;
        height: 20.833vw;
        object-fit: cover;
      }
    }
  }
  .multipImgPost{
    padding: 4.167vw 2.778vw;
    border-bottom: 1px solid #eee;
    .title{
      font-size: 16px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
    .conter{
      display: flex;
      justify-content: space-between;
      margin-top: 1.389vw;
      margin-bottom: 2.778vw;
      img{
        width: 33%;
        height: 20.556vw;
        object-fit: cover;
      }
    }
    .info{
      font-size: 12px;
      color: #777;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
    }
  }
  .videoPost{
    padding: 4.167vw 2.778vw;
    border-bottom: 1px solid #eee;
    .title{
      font-size: 16px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
    .cover{
      width: 100%;
      position: relative;
      img{
        width: 94.444vw;
        height: 47.222vw;
        object-fit: cover;
      }
      .btnWrapper{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .iconfont{
          width: 15.278vw;
          height: 15.278vw;
          border-radius: 50%;
          background-color: #ccc;
          line-height: 12.778vw;
          text-align: center;
          color: #fff;
          font-size: 46px;
        }
      }

    }
    .info{
      font-size: 12px;
      color: #777;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
    }
  }
</style>