<template>
  <div class="comment">
      <div class="commentActive" v-show="!isFocus">
          <input type="text" placeholder="写跟帖" @focus="showDate">
          <div class="commenticon">
              <div class="commentNumber">{{post.comment_length}}</div>
              <span class="iconfont iconpinglun-"></span>
          </div>
          <span class="iconfont iconshoucang" :class={red:post.has_star} @click="star"></span>
          <a href="https://developers.weixin.qq.com/doc/offiaccount/Getting_Started/Explanation_of_interface_privileges.html">
          <span class="iconfont iconfenxiang"></span>
          </a>
      </div>
      <div class="commentInactive" v-show="isFocus">
          <textarea cols="30" rows="3" @blur="isFocus=false" ref="commentArea"></textarea>
          <div class="sendBtn">发送</div>
      </div>
  </div>
</template>

<script>
export default {
    props:['post'],
    data(){
        return{
            isFocus:false
        }
    },
    methods:{
        showDate(){
            this.isFocus=true;
            // this.$refs.commentArea.focus();  
            this.$nextTick(()=>{
                this.$refs.commentArea.focus();                                        
            })
        },
        star(){
          this.$axios({
              url:'/post_star/'+this.post.user.id,
              method:'get',
          }).then(res=>{
              console.log(res);
              const {message}=res.data;
              if(message==='收藏成功'){
                  this.post.has_star=true;
              }else if(message==='取消成功'){
                 this.post.has_star=false 
              }
          })   
        }
    }
}
</script>

<style lang="less" scoped>
    .comment{
        position: fixed;
        bottom: 0;
        left: 0;
        .red{
            color: red;
        }
        .commentActive{
            padding: 0 4.167vw;
            display: flex;
            justify-content: space-around;
            input{
                width: 50.278vw;
                height: 8.611vw;
                border: none;
                outline: none;
                background-color: #d7d7d7;
                color: #333;
                border-radius: 4.444vw;
                padding-left: 2.222vw;
                font-size: 3.889vw;
            }
            .iconfont{
                font-size: 6.389vw;
                margin-left: 6.667vw;
            }
            .commenticon{
                position: relative;
                .commentNumber{
                    position: absolute;
                    top: -6px;
                    left: 28px;
                    height: 16px;
                    line-height: 16px;
                    border-radius: 8px;
                    color: #fff;
                    font-size: 12px;
                    background-color: red;
                    padding: 0 8px;
                }
            }
        }
        .commentInactive{
           display: flex;
           width: 100%;
           padding: 0 4.167vw;
           justify-content: space-between;
           align-items: flex-end;
           textarea{
                width: 69.444vw;
                background-color: #d7d7d7;
                border: none;
                outline: none;
                border-radius: 1.389vw;
                resize: none;
                
           }
           .sendBtn{
               width: 16.389vw;
               height: 7.222vw;
               border-radius: 3.611vw;
               background-color: red;
               color: #fff;
               line-height: 7.222vw;
               text-align: center;
               font-size: 3.333vw;
           }
        }
    }
</style>