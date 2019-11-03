<template>
  <div class="header">
      <span class="iconfont iconnew"></span>
      <div class="search" @click="$router.push('/search')">
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
        height: 15vw;
        width: 100%;
        background-color: red;
        color: #fff;
        .iconnew{
            width: 15vw;
            height: 15vw;
            font-size: 15vw;
            color: #fff;
            margin: 0 4.167vw;
        }
        .search{
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            // width: 58.333vw;
            height: 9.444vw;
            background-color: rgba(255, 255, 255, 0.4);
            border-radius: 4.722vw;
        }
        .iconwode{
            font-size: 24px;
            color: #fff;
            margin: 0 5.556vw;

        }
    }
</style>