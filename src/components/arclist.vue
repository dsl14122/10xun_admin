<template>
  <div class="arclist">
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>所有栏目</el-breadcrumb-item>
      <el-breadcrumb-item>文档列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 按钮 -->
    <div class="btnList">
      <el-row class="rowLeft">
        <el-button type="warning" icon="el-icon-plus" circle></el-button>增加
        <el-button type="primary" icon="el-icon-minus" circle></el-button>删除
      </el-row>
      <el-row class="rowRight">
        <span class="keyWord">关键字</span>
        <el-input placeholder="标题" v-model="input" clearable></el-input>
        <el-button type="primary" icon="el-icon-search" plain></el-button>
      </el-row>
    </div>
    <!-- 表格 -->
    <el-table
      ref="multipleTable"
      :data="tableData"
      border
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
     >
      <el-table-column label="选择" type="selection" width="55"></el-table-column>
      <el-table-column prop="address" label="文章标题" width="800" show-overflow-tooltip></el-table-column>
      <el-table-column label="发布时间" width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column prop="typology" label="所属栏目" width="120"></el-table-column>
      <el-table-column prop="name" label="发布人" width="120"></el-table-column>
      <el-table-column label="操作">
        <el-button type="primary" icon="el-icon-edit">编辑</el-button>
        <el-button type="success" icon="el-icon-view">预览</el-button>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <el-pagination background layout="prev, pager, next" :total="1000" class="page"></el-pagination>
  </div>
</template>
<script>
export default {
  name: "arclist",
  data() {
    return {
      input: "",
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          typology: "财经"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          typology: "股票"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          typology: "外汇"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          typology: "财经"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          typology: "财经"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          typology: "财经"
        },
      ]
    };
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  }
};
</script>
<style lang="less">
.arclist {
  .el-breadcrumb {
    font-size: 20px;
    height: 50px;
    line-height: 50px;
  }
  .btnList {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .rowLeft {
      font-size: 25px;
      .el-button {
        width: 25px;
        height: 25px;
        vertical-align: middle;
        position: relative;
        margin-right: 7px;
        i {
          position: absolute;
          left: 5px;
          top: 5px;
        }
      }
    }
    .rowRight {
      .keyWord {
        height: 38px;
        width: 110px;
        line-height: 40px;
        display: inline-block;
        text-align: center;
        background-color: #e7e7e7;
        border: 1px solid #e7e7e7;
        border-radius: 5px;
        font-size: 16px;
      }
      .el-input {
        width: 200px;
      }
    }
  }
  .page{
      margin-top: 20px;
      float: left;
  }
}
</style>