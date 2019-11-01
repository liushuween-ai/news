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
        padding: 15px 0;
        font-size: 16px;
        color: #333;
        .search{
            width: 258px;
            height: 38px;
            display: flex;
            align-items: center;
            border-radius: 16px;
            padding-left: 15px;
            overflow: hidden;
            border: 1px solid #ccc;
            box-sizing: border-box;
            .iconfont{
                font-size: 15px;
                margin-right: 10px;
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