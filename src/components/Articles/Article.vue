<template>
  <div>
  <SpaceHead></SpaceHead>
  <el-container>
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <div class="author-box">
        <div class="row-1">
          <a>作者：{{article.username}}</a>
        </div>
        <div class="row-2">
          <span>粉丝数：{{numOfFans}}</span><br>
          <el-button>关注</el-button>
        </div>
      </div>
    </el-aside>
    <el-container>
      <el-header>
          <h1>{{article.title}}</h1>
          <div class="info">
            <span>{{article.publishDate}}</span>
            <span>{{article.love}} 点赞</span>
            <span>{{article.forward}} 转发</span>
            <span>{{article.comment}} 评论</span>
            <span>{{article.collection}} 收藏</span>
          </div>
      </el-header>
    <el-main style="background-color: rgb(238, 241, 246)">
      <div v-html="article.content"></div>
    </el-main>
      <el-footer>
        <el-row>
          <el-button type="success" size="mini" icon="el-icon-thumb" round @click="thumbUping" v-if="thumbUp">
            {{article.love}} 已点赞
          </el-button>
          <el-button type="primary" size="mini" icon="el-icon-thumb" round @click="thumbUping" v-else="thumbUp">
            {{article.love}} 点赞
          </el-button>
          <el-button type="primary" size="mini" icon="el-icon-link" round @click="forwarding">
            {{article.forward}} 转发
          </el-button>
          <el-button type="primary" size="mini" icon="el-icon-collection" round @click="collecting">
            {{article.collection}} 收藏
          </el-button>
        </el-row>
      </el-footer>
      <el-main>
        <p>评论区</p>
        <el-form :inline="true">
          <el-form-item label="我的评论" >
            <el-input type="textarea" :rows="2" v-model="comment" >
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button size="mini">发表评论</el-button>
          </el-form-item>
        </el-form>
      </el-main>
    </el-container>
  </el-container>
  </div>
</template>

<script>
  import axios from 'axios'
  import SpaceHead from '../Head/SpaceHead'
export default {
  name: 'Article',
  components: {SpaceHead},
  data(){
    return {
      article:{
        id: '',
        title: '',
        content: '',
        publishDate:'',
        love:'',
        forward:'',
        comment:'',
        collection:'',
        userId:'',
        username:'',
      },
      numOfFans:'',
      thumbUp:'',
      comment:'',
    }
  },
  mounted () {
    this.article.id=this.$route.params.id
    let url1 = `http://localhost:8088/manuscript/selById/${this.article.id}`
    axios.get(url1).then((res)=>{
      this.article = res.data
      let url2 = `http://localhost:8088/friend/getFansNumber`
      axios.get(url2,{
        params:{
          user_id:this.article.userId
        }
      }).then((res)=>{
        this.numOfFans=res.data
      })
      let url3 = `http://localhost:8088/loveData/selByUser`
      let tmp ={
        userId: this.article.id,
        manuscriptId:this.article.id
      }
      axios.post(url3,tmp).then(res=>{
        console.log(res)
        this.thumbUp=res.data.success
        console.log(this.thumbUp)
      })
    })
  },
  methods:{
    thumbUping(){
      console.log("我点赞了")
      console.log(this.thumbUp)
      let tmp ={
        userId: this.article.id,
        manuscriptId:this.article.id
      }
      if(this.thumbUp==true){
        let url = `http://localhost:8088/manuscript/cancelLove`
        axios.post(url,tmp)
      }
      else {
        let url = `http://localhost:8088/manuscript/loveAddOne`
        axios.post(url,tmp)
      }
      this.$router.go(0)
    },
    forwarding(){

    },
    collecting(){
      let url =``
    }
  }
}
</script>

<style scoped>
  .el-container{
    padding: 0;
    margin: 10px 5px 0 5px;
  }
  .el-aside{

  }
  .author-box{
    height: 100px;

  }
  .el-header{
    margin-top: 0;
    text-align: left;
    line-height: 1.4;
    max-width: 660px;
  }
  .el-main{
    height: auto;
    line-height: normal;
    margin: 50px 0 50px 0;
    text-align: left;
  }
   h1{
    font-size: 28px;
    color: #222;
    margin-bottom: 14px;
    font-weight: 700;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  .info span{
    margin-right: 18px;
    color: #9b9b9b;
    transition: .3s;
    -webkit-transition: .3s;
  }


</style>
