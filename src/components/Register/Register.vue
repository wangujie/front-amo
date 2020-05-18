<template>
  <div id=register_form>
    <el-form ref="form" :rules="rules" :model="form" label-width="80px" label-position="right">
      <el-form-item label="用户名" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item label="再次输入" prop="password2">
        <el-input type="password" v-model="form.password2"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('form')">注册</el-button>
        <router-link to="/login"><el-button>登录</el-button></router-link>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import axios from 'axios'
  import {hex_md5} from "../../assets/MD5";
  export default {
    name: 'Register',
    data() {
      return {
        form: {
          name: '',
          password: '',
          password2:'',
        },
        info:{
          username:'',
          password:'',
        },
        rules: {
          name: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 4, max: 20, message: '长度在 4 到 20 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
          ],
          password2:[
            {required: true,message:'请再次输入密码',trigger: 'blur'}
          ],
        }
      }
    },
    methods: {
      onSubmit(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            if(this.form.password!=this.form.password2){
              alert('两次密码不一致！');
            }
            else{
              this.info.username=this.form.name
              this.info.password=hex_md5(this.form.password)
              let url = `http://localhost:8088/user/register`
              //console.log("我在这")
              axios.post(url,this.info).then((res=>{
                //console.log(res)
                if(res.data.success='true'){
                  alert('注册成功')

                  this.$router.push('/login')
                }
              }))
            }
          } else {
            alert('请正确输入！');
            return false;
          }
        });

      }
    },
  }
</script>

<style scoped>

</style>
