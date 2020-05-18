<template>
    <el-container>
      <el-main>
        <div class="data-card">
          <h4>粉丝数</h4>
          <p>{{msData.numOfFans}}</p>
        </div>
        <div class="data-card">
          <h4>点击量</h4>
          <p>{{msData.numOfClicks}}</p>
        </div>
        <div class="data-card">
          <h4>点赞数</h4>
          <p>{{msData.numOfLikes}}</p>
        </div>
        <div class="data-card">
          <h4>评论数</h4>
          <p>{{msData.numOfReviews}}</p>
        </div>
        <div class="data-card">
          <h4>分享数</h4>
          <p>{{msData.numOfShares}}</p>
        </div>
      </el-main>
    </el-container>
</template>

<script>
  export default {
    name: 'MsHomepage',
    data(){
      return{
        msData:{
          numOfFans:'1',
          numOfClicks:'2',
          numOfLikes:'3',
          numOfReviews:'4',
          numOfShares:'5',
        }
      }
    }
  }
</script>

<style scoped>
.data-card{
  width: 33%;
  height: 100px;
  flex: 0 0 auto;
  float: left;

}
</style>
