<template>
  <div>
      <headerMiddle title="编辑资料"></headerMiddle>
      <div class="headPortraits">
         <img  :src="data.head_img" alt="">
         <van-uploader :after-read="afterRead" class="upFile" />   
      </div>
      <authList title="昵称" :particulars='data.nickname' @redirect="isShowNickname=true"></authList>
      <authList title="密码" particulars='******' @redirect="isShowPassword=true"></authList>
      <authList title="性别" :particulars='data.gender' @redirect="isShowGender=true"></authList>
      <!-- <authList v-else title="性别" particulars='女' ></authList>   -->
      <!-- 这里是放组件的组件       -->
      <van-dialog v-model="isShowNickname" title="编辑昵称" show-cancel-button="" @confirm="editNackname">
          <van-field type="text" placeholder="输入昵称" v-model="nickname" ></van-field>
      </van-dialog>
      <van-dialog v-model="isShowPassword" title="编辑密码" show-cancel-button="" @confirm="editPassword">
          <van-field type="password" placeholder="输入密码" v-model="password" ></van-field>
      </van-dialog>
      <van-action-sheet v-model="isShowGender" :actions="gender" @select="editGender" cancel-text="取消"></van-action-sheet>
      
  
  </div>
</template>

<script>
import headerMiddle from '../components/headerMiddle'
import authList from '../components/authList'
export default {
    data(){
        return({
            data:[],
            isShowNickname:false,
            nickname:'',
            isShowPassword:false,
            password:'',
            newData:{},
            isShowGender:false,
            gender:[{name:'男'},{name:'女'}],
            editGenderNub:'',
            
        })
    },
    components:{
        headerMiddle,
        authList
    },
    methods:{
         afterRead(uploaderFile) {
            //  uploaderFile接收上传的图片参数
            // 此时可以自行将文件上传至服务器
            // console.log(uploaderFile.file);    
            const data =new FormData();
            data.append('file',uploaderFile.file);
            this.$axios({
                url:'/upload',
                method:'post',
                data:data
            }).then(res=>{
                // console.log(res.data.data);
                // console.log(this.$axios.defaults.baseURL + res.data.data.url);  
                this.editPageData({head_img:res.data.data.url})
            })
        },
        getPageData(){
             this.$axios({
            url:'/user/'+localStorage.getItem('user_id'),
            method:'get',
            headers:{
                Authorization:localStorage.getItem('token')
            }
            }).then(res=>{
            // console.log(res.data.data)
            this.data=res.data.data;
            if(this.data.head_img) {
                this.data.head_img=this.$axios.defaults.baseURL+ this.data.head_img;
                // console.log(this.$axios.defaults.baseURL)
            }else{
                this.data.head_img='/static/imgs/a.jpg'
            }
            this.data.gender= this.data.gender===1? '男':'女';
        })
        },
        editPageData(newData){
            this.$axios({
                url:'/user_update/'+localStorage.getItem('user_id'),
                method:'POST',
                headers:{
                    Authorization:localStorage.getItem('token')
                },
                data:newData,
            }).then(res=>{
                this.getPageData();
            })
        },
        editNackname(){
           this.editPageData({nickname:this.nickname})
        },
        editPassword(){
            this.editPageData({password:this.password})
        },
        editGender(item){
            // this.gender=event.detail;
            // console.log(item)
            this.editGenderNub = item.name==='女' ? 0 : 1;
            // console.log(this.editGenderNub)
            this.editPageData({gender:this.editGenderNub});
            this.isShowGender=false;
        }
    },
    mounted(){
       this.getPageData();
    }
}
</script>

<style lang="less" scoped>
    .headPortraits{
        position: relative;
        display: flex;
        margin: 5.556vw 0;
        justify-content: center;
        img{  
            width: 19.444vw;
            height: 19.444vw;
            border-radius: 50%;
        }
        .upFile{
            position: absolute;
            top: 0;
            margin: 0;
            opacity: 0;
        }
    }
</style>