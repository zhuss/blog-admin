<template>
  <div class="page-login">
      <div class="top"></div>
      <el-form>
          <el-form-item>
              <el-input v-model="user.account" placeholder="请输入账号"></el-input>
          </el-form-item>
          <el-form-item>
              <el-input type="password" v-model="user.password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item>
              <el-button @click="buttonClick" :disabled="disabled" type="primary" style="width:100%">登录 <i class="el-icon-circle-check"></i></el-button>
          </el-form-item>
      </el-form>
  </div>
</template>
<script>
export default {
   data(){
       return {
           user:{
               account:'',
               password:''
           }
       }
   },
   computed:{
       disabled(){
           return !(this.user.account&&this.user.password);
       }
   },
   methods:{
       buttonClick(){
           sessionStorage.setItem('account',this.user.account);
           this.$router.push({name:'blogList'});
       }
   }
}
</script>

<style lang="less" scoped>
.page-login{
    .top{
        width: 100%;
        height: 80px;
        background: #333;
    }
    .el-form{
        width: 300px;
        margin: 50px auto;
    }
}
</style>

