<template>
<div>
  <div class="zzzz">
  <div style="width: 90%;margin: 0 auto;">
    <el-table
      :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
      border
      style="width: 100%"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column fixed prop="mingcheng" label="客户名称" min-width="150"></el-table-column>
      <el-table-column prop="name" label="客户状态" min-width="120"></el-table-column>
      <el-table-column prop="address" label="客户星级" min-width="120"></el-table-column>
      <el-table-column prop="city" label="首联系人" min-width="120"></el-table-column>
      <el-table-column prop="address" label="手机号码" min-width="120"></el-table-column>
      <el-table-column prop="zip" label="最后跟进" min-width="120"></el-table-column>
      <el-table-column prop="date" label="未跟进天数" min-width="120"></el-table-column>
      <el-table-column fixed="right" label="操作" min-width="290">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button @click="Dina()" type="text" size="small">编辑</el-button>
          <el-button @click="Dina()" type="text" size="small">编辑</el-button>
          <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            type="text"
            size="small"
          >移除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row>
      <el-col :span="24">
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="1"
          :page-sizes="[5, 10]"
          :page-size="10"
          layout="total, prev, pager, next, jumper"
          :total="tableData.length"
        ></el-pagination>
      </el-col>
    </el-row>
  </div>
  </div>
</div>
</template>

<script>
export default {
  methods: {
    handleClick(row) {
      console.log(row);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pagesize = val;
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    Dina() {
      alert(1);
    },
    deleteRow(index, rows) {
      rows.splice(index, 1);
    }
  },

  data() {
    return {
      tableData: [
        {
          mingcheng: "深圳市亿恩科技有限公司",
          name: "上海市普陀区金沙江路",
          address: "1395534555",
          city: "李小红",
          date: "2016-05-03",
          zip: 30,
          tians: 30
        },
        {
          mingcheng: "深圳市亿恩科技有限公司",
          name: "上海市普陀区金沙江路",
          address: "1395534555",
          city: "李小红",
          date: "2016-05-03",
          zip: 30,
          tians: 30
        },
        {
          mingcheng: "深圳市亿恩科技有限公司",
          name: "上海市普陀区金沙江路",
          address: "1395534555",
          city: "李小红",
          date: "2016-05-03",
          zip: 30,
          tians: 30
        },
        {
          mingcheng: "深圳市亿恩科技有限公司",
          name: "上海市普陀区金沙江路",
          address: "1395534555",
          city: "李小红",
          date: "2016-05-03",
          zip: 30,
          tians: 30
        },
        {
          mingcheng: "深圳市亿恩科技有限公司",
          name: "上海市普陀区金沙江路",
          address: "1395534555",
          city: "李小红",
          date: "2016-05-03",
          zip: 30,
          tians: 30
        },
        {
          mingcheng: "深圳市亿恩科技有限公司",
          name: "上海市普陀区金沙江路",
          address: "1395534555",
          city: "李小红",
          date: "2016-05-03",
          zip: 30,
          tians: 30
        },
        {
          mingcheng: "深圳市亿恩科技有限公司",
          name: "上海市普陀区金沙江路",
          address: "1395534555",
          city: "李小红",
          date: "2016-05-03",
          zip: 30,
          tians: 30
        },
        {
          mingcheng: "深圳市亿恩科技有限公司",
          name: "上海市普陀区金沙江路",
          address: "1395534555",
          city: "李小红",
          date: "2016-05-03",
          zip: 30,
          tians: 30
        },
        {
          mingcheng: "深圳市亿恩科技有限公司",
          name: "上海市普陀区金沙江路",
          address: "1395534555",
          city: "李小红",
          date: "2016-05-03",
          zip: 30,
          tians: 30
        },
        {
          mingcheng: "深圳市亿恩科技有限公司",
          name: "上海市普陀区金沙江路",
          address: "1395534555",
          city: "李小红",
          date: "2016-05-03",
          zip: 30,
          tians: 30
        },
        {
          mingcheng: "深圳市亿恩科技有限公司",
          name: "上海市普陀区金沙江路",
          address: "1395534555",
          city: "李小红",
          date: "2016-05-03",
          zip: 30,
          tians: 30
        },
        {
          mingcheng: "深圳市亿恩科技有限公司",
          name: "上海市普陀区金沙江路",
          address: "1395534555",
          city: "李小红",
          date: "2016-05-03",
          zip: 30,
          tians: 30
        },
        {
          mingcheng: "深圳市亿恩科技有限公司",
          name: "上海市普陀区金沙江路",
          address: "1395534555",
          city: "李小红",
          date: "2016-05-03",
          zip: 30,
          tians: 30
        }
      ],
      pageTotal: 0,
      currentPage: 1, //默认第一页
      pagesize: 10 //当前显示页数
    };
  }
};
</script>

<style scope>
.zzzz{
  width: 1500px;
  position: absolute;
  top: 100px;
  left: 300px;
  height: 300px;
}
.el-pagination.is-background .btn-next.disabled,
.el-pagination.is-background .btn-next:disabled,
.el-pagination.is-background .btn-prev.disabled,
.el-pagination.is-background .btn-prev:disabled,
.el-pagination.is-background .el-pager li.disabled {
  color: #c0c4cc;
  width: 0px !important;
}

.el-pagination.is-background .btn-next,
.el-pagination.is-background .btn-prev,
.el-pagination.is-background .el-pager li {
  margin: 0 5px;
  background-color: #f4f4f5;
  color: #606266;
  min-width: 30px;
  border-radius: 2px;
  width: 0px !important;
}
</style>
