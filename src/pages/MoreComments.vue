<template>
    <div>
        <!-- 已经封装过 comment 组件
        可以直接复用,只需要通过 ajax 获取评论数组
        然后渲染组件即可 -->
        <headerMiddle title="更多跟帖"></headerMiddle>
        <comment :commentItem="item" v-for="(item,index) in comments" :key="index"></comment>
    </div>
</template>

<script>
import headerMiddle from '../components/headerMiddle'
import comment from '../components/comment'
export default {
    components:{
        comment,
        headerMiddle
    },
    data(){
        return {
            comments:[]
        }
    },
    mounted(){
        // 一进来就要根据 url带过来的动态id 获取评论数据
        this.$axios({
                url:'/post_comment/'+this.$route.params.id,
                method:'get',
            }).then(res=>{
                // console.log(res.data.data);
                this.comments=res.data.data;  
            })
    },
    
}
</script>

<style>

</style>