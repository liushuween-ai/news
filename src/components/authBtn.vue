<template>
  <div class="btn" @click='send'>{{text}}</div>
</template>

<script>
export default {
    props:['text'],
    methods:{
        send(){
            this.$emit('send')
        }
    }
}
</script>

<style>
.btn{
    height: 13.333vw;
    line-height: 13.333vw;
    text-align: center;
    color: #fff;
    background: #cc3300;
    font-size: 5.556vw;
    border-radius: 6.667vw;
}
</style>