<template>
  <div>
    <el-container>
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu default-active="activeIndex">
          <el-submenu index="1">
          <template slot="title"><i class="el-icon-circle-plus" @click="addGroup"></i>我的关注</template>
            <el-menu-item-group>
            <el-menu-item v-for="item in groups">
              <router-link :to="'/space/friend/focus/'+item.id" style="text-decoration: none" @click.native="flushCom">
                {{item.name}}
              </router-link>
            </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
        <el-menu>
          <el-submenu index="1">
          <template slot="title">我的粉丝</template>
            <el-menu-item index="1-1">
              <router-link to="/space/friend/fans" style="text-decoration: none"><template slot="title"><i class="el-icon-s-custom"></i>我的粉丝</template></router-link>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'Friend',
    data(){
      return{
        groups:[],
        activeIndex:'1'
      }
    },
    mounted () {
      console.log("mounted")
      let url = `http://localhost:8088/friend/getAllGroup`
      axios.get(url,{
        params:{
          user_id:JSON.parse(sessionStorage.getItem('form')).id
        }
      }).then(res=>{
        console.log(res)
        this.groups=res.data
        let group = JSON.stringify(this.groups)
        sessionStorage.setItem('group',group)
      })
    },
    methods:{
      addGroup(){
        console.log("fuck")
      },
      flushCom(){
        this.$router.go(0)
      },
    }
  }
</script>

<style scoped>
  .el-container{
    padding: 0;
    margin: 10px 0 0 0;
  }
</style>
