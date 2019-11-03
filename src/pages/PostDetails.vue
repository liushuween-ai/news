<template>
  <div>
      <postDetailHeader :post="posts"></postDetailHeader>
      <div class="news" v-if="posts.type==2">
          <video class="video" src="https://video.pearvideo.com/mp4/adshort/20191031/cont-1617852-11947733-132928_adpkg-ad_hd.mp4" controls="controls"></video>
          <div class="title">{{posts.title}}</div>
          <div class="info" v-if="posts.user">{{posts.user.nickname}}    2019-10-10</div>
          <div class="btn">
              <div class="iconfont icondianzan" :class={like:posts.has_like} @click="like"><span>{{posts.like_length}}</span></div>
              <div class="iconfont iconweixin">
                  <span>微信</span>
              </div>
          </div>
      </div>
      <div class="news" v-else>
          <div class="title">{{posts.title}}</div>
          <div class="info" v-if="posts.user">{{posts.user.nickname}}    2019-10-10</div>
          <div class="content" v-html="posts.content">为营造临时泊位“干静、整洁、平安、有序”面貌迎国庆，市交通部门拟在9月下旬对部分城市道路临时泊位进行清洁保养，请市民群众配合在清洁保养期间将车辆驶离泊位。第一阶段临时泊位清洁保养计划（涉及17条路段）：</div>
          <div class="btn">
              <div class="iconfont icondianzan" :class={like:posts.has_like} @click="like"><span>{{posts.like_length}}</span></div>
              <div class="iconfont iconweixin"><span>微信</span></div>
          </div>
      </div>
      <div class="comments">
          <div class="title">
              <h2>精彩跟帖</h2>
          </div>
          <div class="commentext" v-if="comments.length ==0">暂无跟帖,抢占沙发</div>
          <div class="commentList" v-else>
              <comment :commentItem="item" v-for="(item,index) in comments" :key="index" @reply="reply"></comment>
              <div class="btnMoreComments" @click="toMoreComments">
                    更多跟帖
              </div>
          </div>
      </div>
      <postDetailFooter :post="posts" :replyActive="replyActive" :commentId="commentId"  @newComment="getComments"></postDetailFooter> 
  </div>
</template>

<script>
import postDetailHeader from '../components/postDetailHeader'
import postDetailFooter from '../components/postDetailFooter'
import comment from '../components/comment'
export default {
    components:{
        postDetailHeader,
        postDetailFooter,
        comment
    },
    data(){
        return {
            posts:{},
            postsId:this.$route.params.id,
            comments:[],
            commentId:{},
            replyActive: 0
        }
    },
    mounted(){
        // 获取文章数据
        this.$axios({
            url:'/post/'+this.$route.params.id,
            method:'get'
        }).then(res=>{
            // console.log(res);
            this.posts=res.data.data;
            // console.log(this.posts)
        })
        // 获取评论数据
        this.getComments();
    },
    methods:{
        toMoreComments(){
            // 点击更多跟帖按钮跳转到更多庚帖的页面
            this.$router.push({
                name:'moreCommentsPage',
                params:{
                   id:this.$route.params.id 
                }
            })
            
        },
        reply(commentId){
            // 监听comment组件传递的参数
            this.commentId=commentId;
            this.replyActive+=1;
        },
        like(){
            // 获取点赞个数
            this.$axios({
                url:'/post_like/'+this.posts.id,
                method:'get'
            }).then(res=>{
                console.log(res);
                const {message}=res.data
                if(message==='取消成功'){
                    this.posts.has_like=false;
                    this.posts.like_length-=1;
                }else if(message==="点赞成功"){
                    this.posts.has_like=true;
                    this.posts.like_length+=1;
                }
            })
        },
        getComments(){
            // 获取评论数据
            this.$axios({
                url:'/post_comment/'+this.$route.params.id,
                method:'get',
                params:{
                    pageSize:3
                }
            }).then(res=>{
                // console.log(res.data.data);
                this.comments=res.data.data;  
            })
        }
    }
}
</script>

<style lang="less" scoped>
    .news{
        padding: 0 4.167vw;
        border-bottom: 5px solid #eee;
        
        .video{
            width: 100%;
        }
        .title{
            font-size: 20px;
            font-weight: 600;
        }
        .info{
            font-size: 14px;
            color: #777; 
              
        }
        .content{
            font-size: 14px;
            line-height: 7.778vw;
            color: #333;
            margin: 6.944vw 0;
            /deep/ img{
                max-width: 100%;
            }
        }
        .btn{
            display: flex;
            justify-content: space-around;
            margin-bottom: 5.556vw;
            .iconfont{
                width: 22.222vw;
                height: 8.333vw;
                line-height: 8.333vw;
                text-align: center;
                border: 1px solid #ccc;
                border-radius: 4.167vw;
                font-size: 14px;
                color: #333;
                &.like{
                    color: red;
                }
                span{
                    margin-left: 1.389vw;
                    color: #333;                    
                }
                &.iconweixin{
                    color: #00c800;
                }
            }
            
        }
    }
    .comments{
        width: 100%;
        padding: 8.333vw 0 22.222vw;
        // margin-bottom: 22.222vw;
        box-sizing: border-box;
        color: #333;
        border-bottom: 1px solid #ccc;
        .title{
            h2{
                text-align: center;
                font-weight: normal;
                font-size: 20px;
            }
        }
        .commentext{  
            text-align: center;
            height: 27.778vw;
            line-height: 27.778vw; 
            font-size: 16px;
        }
        .btnMoreComments{
            width: 33.333vw;
            height: 8.333vw;
            border-radius: 4.167vw;
            line-height: 8.333vw;
            text-align: center;
            border: 1px solid #333;
            margin: 4.167vw auto 0;
        }
    }
</style>