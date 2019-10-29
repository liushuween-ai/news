<template>
  <div>
      <homeHeader></homeHeader>
      <van-tabs v-model="activeTab" sticky swipeable animated>
        <van-tab v-for="(item,index) in tabList" :key="index" :title="item.name">
          <!-- <div v-for="(posts,index) in item.posts" :key="index">
            {{posts.title}}
          </div> -->
          <homePosts v-for="(posts,index) in item.props" :key="index" :posts="posts"></homePosts>
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
      tabList:[],
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
      this.$axios({
      url:'/category',
      method:'get',
    }).then(res=>{
      // console.log(res);
      const {data}=res.data;
      // 给获取的每一项数据添加一个props 用来存放文章数据
      data.forEach(element => {
        element.props=[]
      });
      this.tabList=data;
       // 获取完了 tab 数据, 马上使用默认 tab (头条) 获取文章列表数据
       this.getTabProps(this.activeTab)
    })
    },
    getTabProps(tabIndex){
      const categoryId=this.tabList[tabIndex].id
      this.$axios({
        url:'/post',
        method:'get',
        params:{
          category:categoryId
        }
      }).then(res=>{
        // console.log(res);
        const {data} =res.data
        this.tabList[tabIndex].props=data;
        console.log(this.tabList[tabIndex].props)
      })
    }
  }
}
</script>

<style>

</style>