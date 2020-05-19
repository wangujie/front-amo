<template>
  <div>
  <el-menu default-active="activeIndex" mode="horizontal" style="height: 52px" @select="handleSelect">
    <el-menu-item index="1"><router-link to="/space/message"  style="font-size: 18px;text-decoration: none">消息</router-link></el-menu-item>
    <el-menu-item index="2"><router-link to="/space/dynamics" style="font-size: 18px;text-decoration: none">动态</router-link></el-menu-item>
    <el-menu-item index="3"><router-link to="/space/collections"style="font-size: 18px;text-decoration: none">收藏</router-link></el-menu-item>
    <el-menu-item index="4"><router-link to="/space/manuscript"style="font-size: 18px;text-decoration: none">投稿</router-link></el-menu-item>
    <el-menu-item index="5"><router-link to="/space/friend"style="font-size: 18px;text-decoration: none">好友</router-link></el-menu-item>
  </el-menu>
  </div>
</template>

<script>
  export default {
    name: 'SpaceHead',
    data() {
      //这是导航栏
      return {
        activeIndex: ''
      };
    },
    mounted () {
      if(this.$route.params)
        this.activeIndex=this.$route.params
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>

</style>
