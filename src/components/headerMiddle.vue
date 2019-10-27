<template>
  <div class="vessel">
      <span class="iconfont iconjiantou2"></span>
      <div class="text">{{title}}</div>
  </div>
</template>

<script>
export default {
    props:['title']
}
</script>

<style lang="less" scoped>
.vessel{
    height: 13.889vw;
    line-height: 13.889vw;
    .iconfont{
        padding-left: 5.556vw;
    }
    .text{
        position: absolute;
        left: 41.111vw;
        top: 0;
        font-weight: 600
    }
}
</style>