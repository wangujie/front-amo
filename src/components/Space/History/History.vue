<template>
  <div>
    <div v-for="(item,i) in history" :key="i">
      <div style="float: left">
        <span>{{item.date}}</span>
        <el-dropdown placement="bottom-start">
          <span><i class="el-icon-arrow-down el-icon--right"></i></span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="deleteHistory(item.id)">删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div>
        <p>
          <a>
            <el-avatar :src="require('../../../assets/'+manuInfo[i].picture+'.JPG')">
            </el-avatar>
            <span>{{manuInfo[i].username}}</span>
          </a>
        </p>
        <a :href="'/article/'+manuInfo[i].id"><el-image :src="require('../../../assets/'+manuInfo[i].cover+'.JPG')"></el-image></a>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "History",
    data(){
      return{
        history:[],
        manuInfo:[],
      }
    },
    mounted() {
      let url =`http://localhost:8088/history/getAllHistoryOfUser`
      axios.get(url,{
        params:{
          user_id:JSON.parse(sessionStorage.getItem('form')).id
        }
      }).then(res=>{
        console.log(res)
        this.history=res.data
        console.log(this.history)
        for(let i in history){
          this.getManuData(history[i].manuscript_id)
        }
      })
    },
    methods:{
      getManuData(id){
        /*传稿件id获取稿件数据的方法*/
        let url = `http://localhost:8088/user/${id}`
        axios.post(url).then(res=>{
          this.manuInfo.push(res.data)
        })
      },
      deleteHistory(id){
        let url = `http://localhost:8088/history/deleteHistory`
        axios.get(url,{
          params:{
            id:id,
          }
        }).then(res=>{
          if(res.data.success==true){
            alert('删除成功')
            this.$router.go(0)
          }
        })
      },
      goArticle(id){

      }
    }
  }
</script>

<style scoped>

</style>
