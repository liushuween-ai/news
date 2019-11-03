<template>
  <div>
      <div class="commentWrappe">
          <div class="meta">
              <img class="avatar" v-if="commentItem.user.head_img" :src="commentItem.user.head_img" alt="">
              <img class="avatar" v-else src="/static/imgs/a.jpg" alt="">
              <div class="info">
                  <div class="name">{{commentItem.user.nickname}}</div>
                  <div class="time">2小时前</div>
              </div>
              <div class="btnReply" @click="reply">
                  回复
              </div>
          </div>
          <commentFloor v-if="commentItem.parent" :floorItem="commentItem.parent" :parentLengh="parentLengh" @reply="reply"></commentFloor>
          <div class="commentContent">
            {{this.commentItem.content}}
          </div>
      </div>
  </div>
</template>

<script>
import commentFloor from './commentFloor.vue'
export default {
    props:['commentItem'],
    components:{
       commentFloor 
    },
    data(){
        return {
            parentLengh:this.countParent(0,this.commentItem)
        }
    },
    methods:{
        reply(data){
            if(data.id){
                this.$emit('reply',data);
                // console.log('最外层评论组件接收子级组件的id='+data.id)
            }else{
                this.$emit('reply',{id:this.commentItem.id})
            }
        },
        countParent(number,obj){
            // 获取parent的个数传给commentFloor组件
            if(obj.parent){
                return this.countParent(number+1,obj.parent)
            }else{
                // console.log(number)
                return number;
            }
        }
    }
}
</script>

<style lang="less" scoped>
    .commentWrappe{
        padding: 4.167vw 2.778vw;
        color: #333;
        border-bottom: 1px solid #ccc;
        box-sizing: border-box;
        .meta{
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 2.778vw;
             .avatar{
                width: 10vw;
                height: 10vw;
                border-radius: 5vw;
                object-fit: cover;
            }
            .info{
                flex: 1;
                padding-left: 2.778vw; 
                .name{
                    font-size: 16px;
                }
                .time{
                    font-size: 12px;
                    color: #888;
                }
            }
            .btnReply{
                color: #888;
                font-size: 12px;
            }
        }
        .commentContent{
            font-size: 16px;
            margin-top: 5.556vw;
        }
       
    }
</style>