<template>
  <div>
    <HomeHead></HomeHead>
  </div>
</template>

<script>
import HomeHead from '../Head/HomeHead'
export default {
  name: 'Homepage',
  components: {HomeHead},
  data(){
    return{

    }
  },
  mounted () {
    //console.log(sessionStorage.getItem("form"))
  },
  methods:{

  }
}
</script>

<style scoped>

</style>
