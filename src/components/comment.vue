<template>
  <div>
      <div class="commentWrappe">
          <div class="meta">
              <img class="avatar" src="/static/imgs/a.jpg" alt="">
              <div class="info">
                  <div class="name">火星网友</div>
                  <div class="time">2小时前</div>
              </div>
              <div class="btnReply">
                  回复
              </div>
          </div>
          <div class="commentContent">
            {{this.commentItem.content}}
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props:['commentItem']
}
</script>

<style lang="less" scoped>
    .commentWrappe{
        padding: 4.167vw 2.778vw;
        color: #333;
        border-bottom: 1px solid #eee;
        .meta{
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
             .avatar{
                width: 10vw;
                height: 10vw;
                border-radius: 5vw;
                object-fit: cover;
            }
            .info{
                flex: 1;
                padding-left: 2.778vw; 
                .name{
                    font-size: 16px;
                }
                .time{
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