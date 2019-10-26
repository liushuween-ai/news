<template>
    
    <div class="register">
        <div class="registerIcon">
          <span class="iconfont iconicon-test" @click=$router.back()></span>
      </div>
      <div class="logo">
          <span class="iconfont iconnew"></span>
      </div>
        <div class="UserName">
          <authInput type='text' placeholder='用户名/手机号码' rule='^\d{4,16}$' err_message="请输入正确的手机号"  @input="setUserName"></authInput>
      </div>
      <div class="nickname">
          <authInput type='text' placeholder='昵称' rule='^\w{4,16}$' err_message="请输入正确的昵称"  @input="setNickname"></authInput>
      </div>
      <div class="password">
          <authInput type='password' placeholder='请输入密码' rule='^\d{3,16}$' err_message="请输入正确的密码"  @input="setPassword"></authInput>
      </div>
      <div class="registerBtn">
          <authBtn text="注册" @send="sendRegister"></authBtn>
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
            password:'',
            nickname:''
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
        setNickname(name){
            this.nickname=name;
        },
        sendRegister(){
             this.$axios({
                url: "/register",
                method:'post',
                data:{
                    username:this.UserName,
                    password:this.password,
                    nickname:this.nickname
                }    
            }).then(res=>{
                // console.log(res.data.statusCode);
                if(!res.data.statusCode){
                    this.$toast.success(res.data.message)               
                }
            })
        }
     }
}
</script>

<style lang='less' scoped>
     .register{
        box-sizing: border-box;
        width: 100%;
        padding: 0 6.667vw;
        .registerIcon{
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
        .registerBtn{
            margin-top: 6.667vw;            
        }
    }
</style>