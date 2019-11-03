<template>
  <div class="btn" @click='send'>{{text}}</div>
</template>

<script>
export default {
    props:['text'],
    methods:{
        send(){
            // 向父组件传送一个事件监听按钮被点击事件
            this.$emit('send')
        }
    }
}
</script>

<style lang="less" scoped>
.btn{
    height: 13.333vw;
    line-height: 13.333vw;
    text-align: center;
    color: #fff;
    background: #cc3300;
    font-size: 20px;
    border-radius: 6.667vw;
}
</style>