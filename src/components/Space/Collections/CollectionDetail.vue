<template>
  <el-row>
    <el-col :span="6" v-for="(info,i) in collectionInfo" :key="i">
      <el-card :body-style="{ padding: '0px'}">
        <div class="image">
          <img :src="info.cover">
        </div>
        <div style="padding: 14px;">
          <span>{{info.title}}</span>
           <time>{{info.publishdate}}</time>
          <el-dropdown placement="bottom-start">
            <span class="el-dropdown-link"><i class="el-icon-arrow-down el-icon--right"></i></span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="noCollection(i)">取消收藏</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
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
        dialogVisible:false,

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
    methods:{
      noCollection(index){
        let url =`http://localhost:8088/collect/moveOutList`
        axios.get(url,{
          params:{
            manuscript_id:this.collectionInfo[index].id,
            list_id:this.collectionId,
          }
        }).then(res=>{
          if(res.data.success==true)
            this.$router.go(0)
        })
      },
    }
  }
</script>

<style scoped>

</style>
