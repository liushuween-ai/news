<template>
  <div class="comment">
      <headerMiddle title="我的跟帖"></headerMiddle>
      <div class="content" v-for="(item,index) in data" :key="index">
          <div class="date">2019.10.28  12.08.11</div>
          <div class="parent" v-if="item.parent">
              <div class="nickname">回复:{{item.parent.user.nickname}}</div>
              <div class="discuss">{{item.parent.content}}</div>
          </div>
          <div class="reply">{{item.content}}</div>
          <div class="postOrigin">
              <span class="post">原文:{{item.post.title}}</span>
              <span class="iconfont iconjiantou1"></span>
          </div>
      </div>
      <div class="getcomments" @click="getCommentData">更多跟帖
          <span class="iconfont iconjiantou1"></span>
          <span class="iconfont iconjiantou1"></span>
      </div>
  </div>
</template>

<script>
import headerMiddle from '../components/headerMiddle'
export default {
    components:{
        headerMiddle
    },
    data(){
        return{
            data:[],
            pageIndex:1,
            pageSize:3
        }
    },
    mounted(){
       this.getPagindData(this.pageIndex)
    },
    methods:{
        getPagindData(pageIndex){
            this.$axios({
            url:'/user_comments',
            method:'get',
            params:{
                pageIndex,
                pageSize:this.pageSize,
            }
         }).then(res=>{
            // console.log(res.data.data);
            const newData=[...this.data,...res.data.data]
            // this.data=res.data.data;
            this.data=newData;
            if(res.data.data.length<this.pageSize){
                this.$toast.fail('亲,没有更多跟帖了')
            }
        })
        },
        getCommentData(){
            this.pageIndex++;
            // console.log(this.pageIndex)
            this.getPagindData(this.pageIndex)
        }
    }
}
</script>

<style lang="less" scoped>
    .comment{
        font-size: 3.889vw;
        color: #777;
        .content{
            padding: 5.556vw;
            border: 1px solid #ccc;
            .parent{
                margin: 4.167vw 0;
                padding: 5vw 3.333vw;
                background: #eee;
                color: #777;
                .nickname{
                    margin-bottom: 3.333vw;
                }
            }
            .postOrigin{
                display: flex;
                justify-content: space-between;
                .post{
                    // width: 200px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
                .iconfont{
                    padding-left: 25px;
                }
            }
            .reply{
                font-size: 5.556vw;
                color: #000;
                margin-bottom: 2.778vw;
            }
        }
        .getcomments{
            margin: 20px 0;
            display: flex;
            justify-content: center;
            .iconfont:nth-child(2){
                margin-left: -12px;
               
            }
        }
    }
</style>