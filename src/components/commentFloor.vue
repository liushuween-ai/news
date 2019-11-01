<template>
  <div>
      <floor v-if="floorItem.parent" :floorItem="floorItem.parent" :parentLengh="parentLengh-1"></floor>
      <div class="floorWrapper">
          <div class="meta">
              
              <div class="info">
                  <div class="name">{{parentLengh}}: &nbsp; {{floorItem.user.nickname}}</div>
                  <div class="time">2小时前</div>
              </div>
              <div class="btnReply">
                  回复
              </div>
          </div>
          <div class="commentContent">
              {{floorItem.content}}
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'floor',
    props:['floorItem','parentLengh','commentId']
}
</script>

<style lang="less" secoped>
    .floorWrapper{
        padding: 4.167vw 2.778vw;
        color: #333;
        border: 1px solid #ccc;
        box-sizing: border-box;
        background-color: #f3f3f3;
        .meta{
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            .info{
                flex: 1;
                display: flex;
                align-items: center;
                
                .name{
                   
                    font-size: 16px;
                }
                .time{
                    margin-left: 10px; 
                    font-size: 12px;
                    color: #888;
                }
            }
            .btnReply{
                color: #888;
                font-size: 12px;
            }
        }
        .commentContent{
            font-size: 16px;
            margin-top: 5.556vw;
        }
       
    }
</style>