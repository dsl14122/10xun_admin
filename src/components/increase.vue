<template>
  <div class="increase">
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/arclist' }">所有栏目</el-breadcrumb-item>
      <el-breadcrumb-item>文章列表</el-breadcrumb-item>
      <el-breadcrumb-item>发布文章</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 表单 -->
    <el-form :label-position="labelPosition" label-width="150px" :model="formLabelAlign">
      <el-form-item label="文章标题">
        <el-input v-model="formLabelAlign.name" width="300px"></el-input>
      </el-form-item>
      <el-form-item label="自定义属性">
        <el-switch v-model="value1" active-color="#13ce66" active-text="首页" ></el-switch>
        <el-switch v-model="value2" active-color="#13ce66" active-text="加粗" ></el-switch>
        <el-switch v-model="value3" active-color="#13ce66" active-text="图片" ></el-switch>
        <el-switch v-model="value4" active-color="#13ce66" active-text="视频" ></el-switch>

      </el-form-item>
      <el-form-item label="缩略图">
        <el-input v-model="formLabelAlign.type"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "increase",
  data() {
    return {
      labelPosition: "right",
       value1: true,
       value2: false,
       value3: false,
       value4: true,
      formLabelAlign: {
        name: "",
        region: "",
        type: ""
      }
    };
  }
};
</script>
<style lang="less">
.increase {
  .el-breadcrumb {
    font-size: 20px;
    height: 50px;
    line-height: 50px;
  }
}
</style>