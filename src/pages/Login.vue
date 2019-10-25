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
      <div class="loginBtn">
          <authBtn text="登录" send="sendLogin"></authBtn>
      </div>
  </div>
</template>

<script>
import authInput from '../components/authInput.vue';
import authBtn from '../components/authBtn'
export default {
    data(){
        return {
            UserName:'',
            password:''
        }
    },
    components:{
        authInput:authInput,
        authBtn:authBtn
    },
    methods:{
        setUserName(name){
            this.UserName=name
        },
        setPassword(name){
            this.password=name
        },
        sendLogin(){
            // 发送ajks请求
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
            padding-top: 5.556vw;
            width: 100%;  
            .iconicon-test{
                width: 7.5vw;
                height: 7.5vw;
                font-size: 24.001px;
                color: #333333;
            }
        }
        .logo{
            display: flex;
            justify-content: center;
            .iconnew{
                font-size: 35vw;
                color: #d81e06;
            }
        }
        .loginBtn{
            margin-top: 6.667vw;
        }
    }
</style>