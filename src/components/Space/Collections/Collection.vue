<template>
  <div>
    <el-container>
      <el-aside style="width: 15%;height: 100%">
        <el-menu> <!--收藏夹目录-->
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-circle-plus" @click="addCollection"></i>我的收藏</template>
            <el-menu-item-group>
              <el-menu-item v-for="item in collections">
                <router-link :to="'/space/collections/detail/'+item.id">{{item.name}}</router-link>
                <el-dropdown placement="bottom-start">
                  <span><i class="el-icon-arrow-down el-icon--right"></i></span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>编辑分组</el-dropdown-item>
                    <el-dropdown-item>删除分组</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>

              </el-menu-item>

              </el-menu-item-group>
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
  name: `Collection`,
  data(){
    return{
      userInfo:{},
      collections:[],
    }
  },
  mounted () {
    this.userInfo=JSON.parse(sessionStorage.getItem('form'))
    console.log(this.userInfo)
    let url =`http://localhost:8088/collect/getAllList`
    axios.get(url,{
      params:{
        user_id:this.userInfo.id
      }
    }).then(res=>{
      console.log(res)
      this.collections=res.data
    })
  },
  methods:{
    addCollection(){

    },
  }
}
</script>

<style scoped>
.el-container{
  padding: 0;
  margin: 10px 0 0 0;
}
.image {
  height: 67%;
  width: 100%;
}
  .image img{
    height: auto;
    width: auto;
    max-height: 100%;
    max-width: 100%;
  }
</style>
