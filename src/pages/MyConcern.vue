<template>
  <div>
      <headerMiddle title="我的关注"></headerMiddle>
      <div v-for="(item,index) in userData" :key="index" class="list"> 
        {{item.head_img}}
        <img  v-if="item.head_img" :src=" item.head_img"  alt="">
        <img v-else src="@/assets/logo.png" alt="">
        <div class="content">
          <p>{{item.nickname}}</p>
          <span class="time">2019.10.10</span>
        </div>
        <div class="btn">取消关注</div>
      </div>
  </div>
</template>

<script>
import headerMiddle from '../components/headerMiddle'
export default {
  data(){
    return{
      userData:[],
    }
  },
  components:{
    headerMiddle,
  },
  mounted(){
    this.$axios({
      url:'/user_follows/',
      method:'get',
      headers:{
        Authorization:localStorage.getItem('token')
      }
    }).then(res=>{
      console.log(res.data.data);
      this.userData=res.data.data
    })
  }
}
</script>

<style lang="less" scoped>
  .list{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5.556vw;
    border-bottom: 1px solid #ccc;
    img{
      width: 11.111vw;
      height: 11.111vw;
      border-radius: 50%;
    }
    .content{
      flex:1;
      margin-left: 4.167vw;
      font-size: 4.444vw;
      .time{
        font-size: 3.889vw;
        color: #aaa;
      }
    }
    .btn{
      height: 8.333vw;
      padding: 0 2.778vw;
      line-height: 8.333vw;
      border-radius: 4.167vw;
      background: #eee;
      font-size: 3.889vw;
      color: #000;
    }
  }
</style>