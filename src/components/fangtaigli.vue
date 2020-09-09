<template>
  <div>
    <div class="waishang">
      <div class="topshang">
        <p>输入搜索：</p>
        <p>
          <el-input placeholder="请输入内容" v-model="input" clearable></el-input>
        </p>
      </div>
      <p class="ananshangs">
        <el-button>查 询</el-button>
      </p>
      <div style="margin-top: 50px;">
        <el-table :data="tableData" border style="width: 95.09%">
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column fixed prop="date" label="商品图片" width="150">
            <img src="../assets/qq.png" alt />
          </el-table-column>
          <el-table-column prop="name" label="房型名称" width="300"></el-table-column>
          <el-table-column prop="province" label="售价(元)" width="125"></el-table-column>
          <el-table-column prop="city" label="上架/下架" width="150">
            <el-switch v-model="valueshang" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
          </el-table-column>
          <el-table-column prop="zip" label="销量" width="183"></el-table-column>
          <el-table-column label="操作" width="162">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small"></el-button>
               <el-button type="text" @click="dialogTableVisible = true">编辑 </el-button>
            <el-dialog title="收货地址" :visible.sync="dialogTableVisible">
              <el-table :data="gridData">
                <el-table-column property="date" label="日期" width="150"></el-table-column>
                <el-table-column property="name" label="姓名" width="200"></el-table-column>
                <el-table-column property="address" label="地址"></el-table-column>
              </el-table>
            </el-dialog>
              <el-button type="text" size="small"> 删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="shangxia">
          <p>共 40 条记录</p>
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage3"
            :page-size="100"
            layout="prev, pager, next, jumper"
            :total="1000"
          ></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick(row) {
      console.log(row);
    }
  },
  data() {
    return {
      input: "",
      num: 1,
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      tableData: [
        {
          date: "2016-05-04",
          name: "银色星芒刺绣网纱底裤一级分类=》二级分类",
          province: "价格：¥100.00",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "银色星芒刺绣网纱底裤一级分类=》二级分类",
          province: "价格：¥100.00",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333
        },
        {
          date: "2016-05-01",
          name: "银色星芒刺绣网纱底裤一级分类=》二级分类",
          province: "价格：¥100.00",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333
        },
        {
          date: "2016-05-03",
          name: "银色星芒刺绣网纱底裤一级分类=》二级分类",
          province: "价格：¥100.00",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333
        }
      ],gridData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px',
      value: "",
      valueshang: true
    };
  }
};
</script>

<style>
.waishang {
  width: 1500px;
  position: absolute;
  top: 100px;
  left: 300px;
  height: 300px;
}
.topshang > p {
  float: left;
  margin-left: 30px;
  line-height: 50px;
}
.topshang {
  width: 95%;
  height: 150px;
  background: rgb(243, 243, 243);
  border: 1px solid rgb(228, 228, 228);
}
.ananshangs {
  position: absolute;
  top: 8px;
  z-index: 99;
  left: 360px;
}
.ananshanger {
  position: absolute;
  top: 6px;
  z-index: 99;
  left: 1200px;
}
.ananshangsan {
  position: absolute;
  top: 70px;
  z-index: 99;
  left: 1200px;
}
.shangxia>p{
    float: left;
    color: #666666;
    margin-left: 100px;
    margin-top: 50px;
}
.shangxia>div{
    margin-left: 700px;
    margin-top: 50px;
}
.el-button--text{
    color: rgb(19,206,102) !important;
}
</style>