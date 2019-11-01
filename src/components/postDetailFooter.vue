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
          <textarea cols="30" rows="3" v-model="content" @blur="handleBlur" ref="commentArea"></textarea>
          <div class="sendBtn" @click="send">发送</div>
      </div>
  </div>
</template>

<script>
export default {
    props:['post','replyActive','commentId'],
    data(){
        return{
            isFocus:false,
            content:''
        }
    },
    watch:{
        replyActive(){
            this.isFocus=this.replyActive
        }
    },
    methods:{
        handleBlur(){
            if(this.content===''){
                this.isFocus=false
            }
        },
        send(){
            this.$axios({
                url:'/post_comment/'+this.post.id,
                method:'post',
                data:{
                    content:this.content,
                    parent_id:this.commentId.id ? this.commentId.id :null
                },
            }).then(res=>{
                // console.log(res.data)
                const {message}=res.data
                // 发送ajax请求请求回来后清空输入框将输入框变小
                this.content='',
                this.isFocus=false;
                 // 请求发送完毕,为了更新页面数据,需要向父组件触发一个自定义事件
                this.$emit('newComment');
            })
        },
        showDate(){
            // 获取焦点像是文本域
            this.isFocus=true;
            // this.$refs.commentArea.focus();  
            this.$nextTick(()=>{
                //文本域获取焦点 获取焦点
                this.$refs.commentArea.focus();                                        
            })
        },
        star(){
            // 获取收藏
          this.$axios({
              url:'/post_star/'+this.post.user.id,
              method:'get',
          }).then(res=>{
            //   console.log(res);
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
        bottom: 3.333vw;
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