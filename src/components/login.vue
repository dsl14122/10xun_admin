<template>
  <div class="box">
    <div class="logo">
      <img src="../assets/login.png" alt />
    </div>
    <div class="login">
      <span class="title">后台网站管理系统</span>
      <el-input placeholder="请输入内容" v-model="input" clearable></el-input>
      <el-input placeholder="请输入密码" v-model="input1" show-password></el-input>
      <el-button type="danger" class="submit">登录</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: ""
    };
  }
};
</script>
<style lang="less">
.box {
  background-color: #f2f2f2;
  height: 100vh;
  position: relative;
  .logo {
    position: absolute;
    left: 50%;
    top: 24%;
    margin-left: -156px;
  }
  .login {
    width: 500px;
    height: 300px;
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -150px 0 0 -250px;
    padding: 0 20px;
    .title {
      display: inline-block;
      width: 100%;
      height: 40px;
      text-align: center;
      line-height: 40px;
      font-size: 25px;
      font-weight: bold;
    }
    .submit {
      width: 100%;
      margin-top: 30px;
    }
    .el-input {
      margin-top: 20px;
    }
  }
}
</style>