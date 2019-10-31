<template>
  <div>
      <postDetailHeader :post="posts"></postDetailHeader>
      <postDetailFooter :post="posts"></postDetailFooter> 
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
  </div>
</template>

<script>
import postDetailHeader from '../components/postDetailHeader'
import postDetailFooter from '../components/postDetailFooter'
export default {
    components:{
        postDetailHeader,
        postDetailFooter
    },
    data(){
        return {
            posts:{}
        }
    },
    mounted(){
        this.$axios({
            url:'/post/'+this.$route.params.id,
            method:'get'
        }).then(res=>{
            // console.log(res);
            this.posts=res.data.data;
            console.log(this.posts)
        })
    },
    methods:{
        like(){
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
        }
    }
}
</script>

<style lang="less" scoped>
    .news{
        padding: 0 4.167vw;
        border-bottom: 1.389vw solid #eee;
        margin-bottom: 80px;
        .video{
            width: 100%;
        }
        .title{
            font-size: 5.556vw;
            font-weight: 600;
        }
        .info{
            font-size: 3.889vw;
            color: #777; 
              
        }
        .content{
            font-size: 3.889vw;
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
                font-size: 3.889vw;
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
</style>