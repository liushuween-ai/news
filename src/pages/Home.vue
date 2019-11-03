<template>
  <div>
      <homeHeader></homeHeader>
      <van-tabs v-model="activeTab" sticky swipeable animated>
        <van-tab v-for="(item,index) in tabList" :key="index" :title="item.name">
          <!-- <div v-for="(posts,index) in item.posts" :key="index">
            {{posts.title}}
          </div> -->
          <van-list v-model="loading" :finished="tabList[activeTab].finished" finished-text="没有更多了" @load="loadMorePost" :immediate-check="false">
            <homePosts v-for="(posts,index) in item.props" :key="index" :posts="posts"></homePosts>
          </van-list>
          </van-tab>
      </van-tabs>
  </div>
</template>

<script>
import homeHeader from '../components/homeHeader'
import homePosts from '../components/homePosts'
export default {
  components:{
    homeHeader,
    homePosts
  },
  data(){
    return {
      activeTab: localStorage.getItem('token')? 1 : 0,
      pageSize:6,
      tabList:[],
      loading:false,
    }
  },
  mounted(){
    this.initTabList();
  },
  watch:{
    activeTab(newActiveTab){
      if(this.tabList[newActiveTab].props.length==0){
        this.getTabProps(newActiveTab)
      }
    }
  },
  methods:{
    initTabList(){
      // 挂载完毕的钩子函数
      if(localStorage.getItem('tabActive')){
        const data=JSON.parse(localStorage.getItem('tabActive'));
         // 给获取的每一项数据添加一个props 用来存放文章数据
          data.forEach(element => {
            element.props=[],
            element.currentPage =1,
            element.finished=false
          });
          this.tabList=data;
          // 获取完了 tab 数据, 马上使用默认 tab (头条) 获取文章列表数据
          this.getTabProps(this.activeTab)
      }else{
        this.$axios({
          url:'/category',
          method:'get',
        }).then(res=>{
          // console.log(res);
          const {data}=res.data;
          // 给获取的每一项数据添加一个props 用来存放文章数据
          data.forEach(element => {
            element.props=[],
            element.currentPage =1,
            element.finished=false
          });
          this.tabList=data;
          // 获取完了 tab 数据, 马上使用默认 tab (头条) 获取文章列表数据
          this.getTabProps(this.activeTab)
        })
      }
      
    },
    loadMorePost(){
      this.tabList[this.activeTab].currentPage++;
      this.getTabProps(this.activeTab);
    },
    getTabProps(tabIndex){
      const categoryId=this.tabList[tabIndex].id;
      const pageIndex=this.tabList[tabIndex].currentPage
      this.$axios({
        url:'/post',
        method:'get',
        params:{
          category:categoryId,
          pageIndex,
          pageSize:this.pageSize,
        }
      }).then(res=>{
        const {data} =res.data
        // this.tabList[tabIndex].props=data;
        const newData=[...this.tabList[tabIndex].props,...data];
        this.tabList[tabIndex].props=newData;
        // console.log(newData);
        if(data.length < this.pageSize){
          // 数据更新完毕后，将loading设置成false即可。若数据已全部加载完毕，则直接将finished设置成true
          this.tabList[tabIndex].finished=true;
          this.loading=false;
        }
      })
    }
  }
}
</script>

<style>

</style>