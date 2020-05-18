<template>
  <div>
    <div v-for="(item,i) in manudata" :key="i" class="s-content">
        <h2>{{item.title}}</h2>
        <div class="manu-data">
          <span><i class="el-icon-thumb"></i>{{item.love}}</span>
          <span><i class="el-icon-chat-line-round"></i>{{item.comment}}</span>
          <span><i class="el-icon-link"></i>{{item.forward}}</span>
          <span><i class="el-icon-collection"></i>{{item.collection}}</span>
        </div>
        <div class="manu-cover" v-bind:style="{backgroundImage:'url('+item.cover+ ')'}">

        </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'Manu',
    data(){
      return{
        manudata:[
          {
            title:'1234',
            love:'5',
            comment:'4',
            forward:'3',
            collection:'2',
            cover:'blob:http://localhost:8080/47b4b8f4-801c-4e74-9add-51d0d683ad65'
          }
        ],
      }
    },
    mounted () {
      let id = JSON.parse(sessionStorage.getItem('form')).id
      let url =`http://localhost:8088/manuscript/publish`
    },
  }
</script>

<style scoped>
  .s-content{
    width: 720px;
  }
  .s-content h2{
    max-height: 26px;
    font-size: 18px;
    color: #222;
    line-height: 26px;
    overflow: hidden;
    display: block;
  }
  .manu-data{
    margin-top: 15px;
    color: #999;
    font-size: 0;
  }
  .manu-data span{
    display: inline-block;
    font-size: 12px;
    overflow: hidden;
    margin-right: 20px;
    height: 14px;
    line-height: 14px;
    white-space: nowrap;
    float: left;
  }
  .manu-cover{
    height: 100%;
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: cover;
    width: 117px;
    height: 88px;
    float: right;
    border-radius: 4px;
    line-height: 54px;
    text-align: center;
  }
</style>
