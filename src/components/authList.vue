<template>
  <div class="list" @click="redirect">
      <div class="title">{{title}}</div>
      <div class="particulars">{{particulars}}
          <span class="iconfont iconjiantou1"></span>
      </div>
  </div>
</template>

<script>
export default {
    props:['title','particulars'],
    methods:{
       redirect(){
           this.$emit('redirect',this.title)
       } 
    }
}
</script>

<style lang="less" scoped>
    .list{
        display: flex;
        justify-content: space-between;
        height: 13.889vw;
        line-height: 13.889vw;
        margin-left: 5.556vw;
        border-bottom: 1px solid #eee;
        .particulars{
            color: #999;
            font-size: 14px;
        }
    }
</style>