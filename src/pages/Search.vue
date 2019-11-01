<template>
  <div class="search">
     <div class="searchHeader">
      <span class="iconfont iconjiantou2" @click="back"></span>
      <div class="search">
          <span class="iconfont iconsearch"></span>
          <input type="text" placeholder="通灵兽消失术" v-model="searchText">
      </div>
      <span class="btn" @click="search">搜索</span>
  </div>
  <div v-if="resultList.length > 0">
        <homePosts :posts='item' v-for="(item, index) in resultList" :key="index"/>
    </div>
     <div v-else>
         <div class="history">
             <p class="title">历史记录</p>
             <p class="content">美女</p>
         </div>
         <div class="hot">
             <p class="title">热门搜索</p>
             <div class="content">
                 <span>办公室小野否认解散</span>
                 <span>月季如何嫁接</span>
             </div>
         </div>
     </div>
  </div>
</template>

<script>
import searchHeader from '../components/searchHeader'
import homePosts from '../components/homePosts'
export default {
    components:{
        searchHeader,
        homePosts
    },
    data(){
        return {
            searchText:'',
            resultList:[],
        }
    },
    methods:{
        back(){
            this.$router.back()
        },
        search(){
            // 获取搜索数据
            this.$axios({
                 url: '/post_search',
                method: 'get',
                params: {
                    keyword: this.searchText
                }
            }).then(res=>{
                console.log(res);
                const {data} = res.data;
                // 获取到了数据,先存在 data 当中,遍历之后渲染
                this.resultList = data;
                
            })
        }
    }
}
</script>

<style lang="less" scoped>
    .search{
        margin: 0 15px;
        color: #333;
        .searchHeader{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 0;
            font-size: 16px;
            color: #333;
            .search{
                width: 258px;
                height: 38px;
                display: flex;
                align-items: center;
                border-radius: 16px;
                padding-left: 15px;
                overflow: hidden;
                border: 1px solid #ccc;
                box-sizing: border-box;
                .iconfont{
                    font-size: 15px;
                    margin-right: 10px;
                }
                input{
                    border: none;
                    outline: none;
                    width: 100%;
                    height: 100%;
                    font-size: 12px;
                }
            }
        }
        .title{
            font-size: 16px;
            font-weight: 600;
            margin: 20px 0;
        }
        .content{
            font-size: 14px;
        }
        .history{
            border-bottom: 1px solid #ccc;
            padding-bottom: 20px;
        }
        .hot{
            .content{
                display: flex;
                span{
                    flex: 1
                }
            }
        }
    }
</style>