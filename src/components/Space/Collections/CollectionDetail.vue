<template>
  <el-row>
    <el-col :span="8" v-for="info in collectionInfo">
      <el-card :body-style="{ padding: '0px'}">
        <div class="image">
          <img :src="info.cover">
        </div>
        <div style="padding: 14px;">
          <span>{{info.title}}</span>
           <time>{{info.publishdate}}</time>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'CollectionDetail',
    data(){
      return{
        collectionId:'',
        collectionInfo:[],
      }
    },
    mounted () {
      this.collectionId=this.$route.params.id
      let url =`http://localhost:8088/collect/getAllManuscriptOfList`
      axios.get(url,{
        params:{
          list_id:this.collectionId
        }
      }).then(res=>{
        console.log(res)
        this.collectionInfo=res.data
      })
    },
  }
</script>

<style scoped>

</style>
