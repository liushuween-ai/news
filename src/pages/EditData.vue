<template>
  <div>
      <headerMiddle title="编辑资料"></headerMiddle>
      <div class="headPortraits">
         <img v-if="data.head_img" :src="data.head_img" alt="">
         <img v-else src="@/assets/logo.png" alt="">          
      </div>
      <authList title="昵称" :particulars='data.nickname'></authList>
      <authList title="密码" particulars='******'></authList>
      <authList v-if="data.gender===1" title="性别" particulars='男'></authList>
      <authList v-else title="性别" particulars='女'></authList>      
  </div>
</template>

<script>
import headerMiddle from '../components/headerMiddle'
import authList from '../components/authList'
export default {
    data(){
        return({
            data:[]
        })
    },
    components:{
        headerMiddle,
        authList
    },
    mounted(){
        this.$axios({
            url:'http://127.0.0.1:3000/user/'+localStorage.getItem('user_id'),
            method:'get',
            headers:{
                Authorization:localStorage.getItem('token')
            }
        }).then(res=>{
            console.log(res.data.data),
            this.data=res.data.data
        })
    }
}
</script>

<style lang="less" scoped>
    .headPortraits{
        img{  
           margin: 5.556vw 0 5.556vw 41.667vw;
            width: 19.444vw;
            height: 19.444vw;
            border-radius: 50%;
        }

    }
</style>