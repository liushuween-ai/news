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
             <p class="content" v-for="(item, index) in historyList" :key="index">{{item}}</p>
         </div>
         <div class="hot">
             <p class="title">热门搜索</p>
             <div class="content">
                 <span v-for="(item,index) in hotList" :key="index" @click="searchByWord(item)">{{item}}</span>
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
            hotList:[],
            historyList:localStorage.getItem('historyList')?JSON.parse(localStorage.getItem('historyList')):[],
        }
    },
    watch:{
        searchText(){
            // 监听当输入框内容为空的时候显示的文章数组变为空
            if(this.searchText==''){
                this.resultList=[];
            }
        },
        historyList(){
            localStorage.setItem('historyList',JSON.stringify(this.historyList))
        },
    },
    mounted(){
        // 页面挂载完毕后就要获取热门数据列表的数据
        this.getHotList();
    },
    methods:{
        back(){
            // 当输入框中有内容点击返回箭头清空输入框的内容
            if(this.searchText){
                this.searchText=''
            }else{
                // 输入框没有内容返回我上一个页面
                this.$router.back();
            }
        },
        searchByWord(item){
            // 点击热门搜索的内容就，搜索框就搜索该内容
            this.searchText=item;
            this.search();
        },
        search(){
            // 获取搜索文章数据
            this.$axios({
                 url: '/post_search',
                method: 'get',
                params: {
                    keyword: this.searchText
                }
            }).then(res=>{
                // console.log(res);
                const {data} = res.data;
                // 获取到了数据,先存在 data 当中,遍历之后渲染
                this.resultList = data;
                // 判断historyList数组中有没有这个元素没有就添加进去
                if(this.historyList.indexOf(this.searchText)<0){
                    this.historyList.push(this.searchText);
                }
                
            })
        },
        getHotList() {
            // 应该发送 ajx 请求
            // 获取到热门搜索数组
            this.hotList = [
                '关晓彤',
                '王祖贤',
                '女歌手'
            ]
        },
    }
}
</script>

<style lang="less" scoped>
    .search{
        margin: 0 3vw;
        color: #333;
        .searchHeader{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 4.167vw 0;
            font-size: 16px;
            color: #333;
            .search{
                width: 71.667vw;
                height: 10.556vw;
                display: flex;
                align-items: center;
                border-radius: 4.444vw;
                padding-left: 4.167vw;
                overflow: hidden;
                border: 1px solid #ccc;
                box-sizing: border-box;
                .iconfont{
                    font-size: 15px;
                    margin-right: 2.778vw;
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
            margin: 5.556vw 0;
        }
        .content{
            font-size: 14px;
        }
        .history{
            border-bottom: 1px solid #ccc;
            padding-bottom: 5.556vw;
            .content{
                height: 26px;
                line-height: 26px;
            }
        }
        .hot{
            .content{
                width:100%;
                box-sizing: border-box;
                // display: flex;
                span{
                    float: left;
                    display: block;
                    width: 45%;
                    height: 26px;
                    line-height: 26px;
                    border-bottom: 1px solid #ccc;
                    padding-left: 10px;
                    margin-right: 10px;
                    box-sizing: border-box;
                }
            }
        }
    }
</style>