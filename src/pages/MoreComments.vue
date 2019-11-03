<template>
    <div>
        <!-- 已经封装过 comment 组件
        可以直接复用,只需要通过 ajax 获取评论数组
        然后渲染组件即可 -->
        <headerMiddle title="更多跟帖"></headerMiddle>
        <comment :commentItem="item" v-for="(item,index) in comments" :key="index" @reply="reply"></comment>
        <postDetailFooter :post="posts" :replyActive="replyActive" :commentId="commentId"  @newComment="getComments"></postDetailFooter>
    </div>
</template>

<script>
import headerMiddle from '../components/headerMiddle'
import comment from '../components/comment'
import postDetailFooter from '../components/postDetailFooter'
export default {
    components:{
        comment,
        headerMiddle,
        postDetailFooter
    },
    data(){
        return {
            posts:{},
            commentId:{},
            comments:[],
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
            console.log(this.posts)
        })
        // 获取评论数据
        this.getComments();    
    },
    methods:{
         reply(commentId){
            // 监听comment组件传递的参数
            this.commentId=commentId;
            console.log(this.commentId)
            this.replyActive+=1;
        },
        getComments(){
            // 一进来就要根据 url带过来的动态id 获取评论数据
            this.$axios({
                    url:'/post_comment/'+this.$route.params.id,
                    method:'get',
                }).then(res=>{
                    // console.log(res.data.data);
                    this.comments=res.data.data;  
                })
        }
    }
    
}
</script>

<style>

</style>