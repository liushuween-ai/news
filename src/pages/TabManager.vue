<template>
  <div>
      <headerMiddle title="栏目管理"></headerMiddle>
      <div class="active">
           <h3>点击删除以下频道(最少剩下两个频道)</h3>
           <div @click="toDeactive(index)" class="tab" v-for="(item,index) in tabActive" :key="index">{{item.name}}</div>
      </div>
      <div class="deactive">
          <h3>点击添加以下频道</h3>
          <div @click="toActive(index)" class="tab" v-for="(item,index) in tabDeactive" :key="index">{{item.name}}</div>
      </div>
  </div>
</template>

<script>
import headerMiddle from '../components/headerMiddle'
export default {
    components:{
        headerMiddle
    },
    data(){
        return {
            tabActive:[],
            tabDeactive:[]
        }
    },
    watch:{
        tabActive(){
            localStorage.setItem('tabActive',JSON.stringify(this.tabActive))
        },
        tabDeactive(){
            localStorage.setItem('tabDeactive',JSON.stringify(this.tabDeactive))
        }
    },
    mounted(){
        if(localStorage.getItem('tabActive')&&localStorage.getItem('tabDeactive')){
            this.tabActive=JSON.parse(localStorage.getItem('tabActive'))
            this.tabDeactive=JSON.parse(localStorage.getItem('tabDeactive'))
        }else{
            this.$axios({
                url:'/category',
                method:'get'
            }).then(res=>{
                // console.log(res.data.data);
                this.tabActive=res.data.data;
                // console.log(this.tabActive)
                localStorage.setItem('tabActive',JSON.stringify(this.tabActive))
            })
        }
        
    },
    methods:{
        toDeactive(index){
            if(this.tabActive.length==2){
                return
            }
            this.tabDeactive.push(this.tabActive[index]);
            this.tabActive.splice(index,1);
        },
        toActive(index){
            this.tabActive.push(this.tabDeactive[index]);
            this.tabDeactive.splice(index,1);
        }
    }
}
</script>

<style lang="less" scoped>
    .active,.deactive {
        height: 40vh;
        padding: 2.778vw;
    }
    .deacttive{
        h3{
            padding: 2.778vw;
        }
    }
    h3{
        font-size: 16px;
        color: #888;
    }
    .tab {
        height: 8.333vw;
        line-height: 8.333vw;
        padding: 0 2.778vw;
        background: #f8f8f8;
        border: 1px solid #eee;
        float: left;
        margin: 1.389vw 1.778vw;
    }
</style>