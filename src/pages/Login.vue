<template>
  <div class="login">
      <div class="loginIcon">
          <span class="iconfont iconicon-test"></span>
      </div>
      <div class="logo">
          <span class="iconfont iconnew"></span>
      </div>
      <div class="UserName">
          <authInput type='text' placeholder='请输入手机号' rule='^\d{4,16}$' err_message="请输入正确的手机号"  @input="setUserName"></authInput>
      </div>
      <div class="password">
          <authInput type='password' placeholder='请输入密码' rule='^\d{3,16}$' err_message="请输入正确的密码"  @input="setPassword"></authInput>
      </div>
      <div class="loginBtn"></div>
  </div>
</template>

<script>
import authInput from '../components/authInput.vue';

export default {
    data(){
        return {
            UserName:'',
            password:''
        }
    },
    components:{
        authInput:authInput
    },
    methods:{
        setUserName(name){
            this.UserName=name
        },
        setPassword(name){
            this.password=name
        }
    }
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