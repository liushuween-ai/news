<template>
  <div class="header">
      <span class="iconfont iconnew"></span>
      <div class="search">
          <span class="iconfont iconsearch"></span>
          搜索新闻
      </div>
      <span class="iconfont iconwode" @click="$router.push('/personalCenter')"></span>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 54px;
        width: 100%;
        background-color: red;
        color: #fff;
        .iconnew{
            width: 54px;
            height: 54px;
            font-size: 54px;
            color: #fff;
            margin: 0 15px;
        }
        .search{
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            // width: 210px;
            height: 34px;
            background-color: rgba(255, 255, 255, 0.4);
            border-radius: 17px;
        }
        .iconwode{
            font-size: 24px;
            color: #fff;
            margin: 0 20px;

        }
    }
</style>