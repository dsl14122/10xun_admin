<template >
  <el-container class="indexBox">
    <el-header class="indexTitle">
      <el-row>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <img src="../assets/logo.png" alt="">
          </div>
        </el-col>
        <el-col :span="10">
          <div class="grid-content bg-purple-light ">首页</div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
              您好  xxx 欢迎您登陆 退出
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="277px" class="indexLeft">
           <el-menu router
      default-active="2"
      class="el-menu-vertical-demo">
      <el-submenu index="/">
        <template slot="title">
          <i class="el-icon-caret-right"></i>
          <span class="title-name">栏目管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/column">网站栏目管理</el-menu-item>
          <el-menu-item index="/arclist">所有文档列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-caret-right"></i>
          <span class="title-name">图片管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item  index="/advertising">广告区图片</el-menu-item>
          <el-menu-item  index="/live">直播区图片</el-menu-item>
          <el-menu-item  index="/radio">视频区图片</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
      </el-aside>
      <el-main class="indexRight">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  name:'index',
  methods: {
   
  }
};
</script>
<style scoped lang="less">
.indexBox {
  height: 100vh;
  .indexTitle {
    background-color: #0470b8;
    height: 126px !important;
    color: #fff;
    font-size: 40px;
    line-height: 126px;
    .bg-purple{
      img{
        margin-top: 30px;
      }
    }
    .bg-purple-light{
      float: left;
    }
  }
  .indexLeft {
    background-color: #cdcdcd;
    .title-name{
      font-size: 20px;
      font-weight: bold;
    }
    .el-menu-item.is-active {
    color: #c30d24;
  }
  }
  .indexRight {
    padding-top: 0;
    background-color: #e9eef3;
  }
}
</style>