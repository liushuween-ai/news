<template>
  <div class="login">
      <div class="loginIcon">
          <span class="iconfont iconicon-test"></span>
      </div>
      <div class="logo">
          <span class="iconfont iconnew"></span>
      </div>
      <div class="UserName"></div>
      <div class="password"></div>
      <div class="loginBtn"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
    .login{
        box-sizing: border-box;
        width: 100%;
        padding: 0 6.667vw;
        .loginIcon{
            padding-top: 20px;
            width: 100%;  
            .iconicon-test{
                width: 27px;
                height: 27px;
                font-size: 6.667vw;
                color: #333333;
            }
        }
        .logo{
            display: flex;
            justify-content: center;
            .iconnew{
                width: 126px;
                height: 126px;
                font-size: 126px;
                color: #d81e06;
            }
        }
    }
</style>