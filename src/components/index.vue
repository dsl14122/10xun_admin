<template >
  <el-container class="indexBox">
    <el-header class="indexTitle">
      <el-row>
        <el-col :span="6">
          <div class="grid-content bg-purple">10讯网管理后台</div>
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
           <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-caret-right"></i>
          <span>栏目管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">网站栏目管理</el-menu-item>
          <el-menu-item index="1-2">所有文档列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-caret-right"></i>
          <span>图片管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">广告区图片</el-menu-item>
          <el-menu-item index="1-2">直播区图片</el-menu-item>
          <el-menu-item index="1-3">视频区图片</el-menu-item>
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
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
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

  }
  .indexLeft {
    background-color: pink;
  }
  .indexRight {
    padding-top: 0;
    background-color: #e9eef3;
  }
}
</style>