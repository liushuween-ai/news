<template>
  <div class="searchHeader">
      <span class="iconfont iconjiantou2" @click="$router.back()"></span>
      <div class="search">
          <span class="iconfont iconsearch"></span>
          <input type="text" placeholder="通灵兽消失术">
      </div>
      <span>搜索</span>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
    .searchHeader{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 4.167vw 0;
        font-size: 16px;
        color: #333;
        .search{
            width: 71.667vw;
            height: 10.556vw;
            display: flex;
            align-items: center;
            border-radius: 4.444vw;
            padding-left: 4.167vw;
            overflow: hidden;
            border: 1px solid #ccc;
            box-sizing: border-box;
            .iconfont{
                font-size: 15px;
                margin-right: 2.778vw;
            }
            input{
                border: none;
                outline: none;
                width: 100%;
                height: 100%;
                font-size: 12px;
            }
        }
    }
</style>