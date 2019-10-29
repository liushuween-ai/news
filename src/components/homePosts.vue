<template>
  <div>
    <div class="videoPost" v-if="posts.type==2">
      <div class="title">{{posts.title}}</div>
      <div class="cover">
        <img :src="posts.cover[0].url" alt="">
        <div class="btnWrapper">
          <div class="iconfont iconshipin"></div>
        </div>
      </div>
      <div class="info">{{posts.user.nickname}}&nbsp;&nbsp;&nbsp;<span>{{posts.comment_length}}跟帖</span></div>
    </div>
    <div class="singleImgPost" v-else-if="posts.cover.length >0&&posts.cover.length<3">
      <div class="left">
        <div class="title">{{posts.title}}</div>
        <div class="info">{{posts.user.nickname}}&nbsp;&nbsp;&nbsp;<span>{{posts.comment_length}}跟帖</span></div>
      </div>
      <div class="rigth">
        <img :src="posts.cover[0].url" alt="">
      </div>
    </div>
    <div class="multipImgPost" v-else-if="posts.cover.length>=3">
      <div class="title">{{posts.title}}</div>
      <div class="conter">
        <img :src="posts.cover[0].url" alt="">
        <img :src="posts.cover[1].url" alt="">
        <img :src="posts.cover[2].url" alt="">        
      </div>
      <div class="info">
        {{posts.user.nickname}}&nbsp;&nbsp;&nbsp;<span>{{posts.comment_length}}跟帖</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props:['posts']
}
</script>

<style lang="less" scoped>
  .singleImgPost{
    display:flex;
    justify-content: space-between;
    padding: 15px 10px;
    border-bottom: 1px solid #eee;
    .left{
      margin-right: 5px;
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
        width: 121px;
        height: 75px;
        object-fit: cover;
      }
    }
  }
  .multipImgPost{
    padding: 15px 10px;
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
      margin-top: 5px;
      margin-bottom: 10px;
      img{
        width: 33%;
        height: 74px;
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
    padding: 15px 10px;
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
        width: 340px;
        height: 170px;
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
          width: 55px;
          height: 55px;
          border-radius: 50%;
          background-color: #ccc;
          line-height: 46px;
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