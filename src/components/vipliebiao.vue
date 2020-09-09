<template>
  <div>
    <div class="top">
      <div>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="筛选条件：">
            <el-select v-model="formInline.region" placeholder="姓名">
              <el-option label="姓名" value="xm"></el-option>
              <el-option label="昵称" value="nc"></el-option>
              <el-option label="手机号" value="sjh"></el-option>
              <el-option label="会员卡号" value="vip"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-input v-model="formInline.user" placeholder="请输入查询内容"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-form-item>
        </el-form>
      </div>

      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="professional.id" label="用户信息" width="200"></el-table-column>
        <el-table-column prop="professional.professionalName" label="手机号码" width="180"></el-table-column>
        <el-table-column prop="professional.professionalDesc" label="可用余额" width="130"></el-table-column>
        <el-table-column prop="courseName" label="可用余额" width="130"></el-table-column>
        <el-table-column prop="courseDesc" label="可用余额" width="130"></el-table-column>
        <el-table-column prop="professionalId" label="可用余额" width="130"></el-table-column>
        <el-table-column prop="id" label="可用积分" width="130"></el-table-column>
        <el-table-column fixed="right" label="操作" width="200">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">
              <router-link to="/shouye/Fenye">增加</router-link>
            </el-button>
            <el-button type="text" @click="dialogTableVisible = true">修改</el-button>

            <el-dialog title="收货地址" :visible.sync="dialogTableVisible">
              <el-table :data="gridData">
                <el-table-column property="date" label="日期" width="150"></el-table-column>
                <el-table-column property="name" label="姓名" width="200"></el-table-column>
                <el-table-column property="address" label="地址"></el-table-column>
              </el-table>
            </el-dialog>

            <el-button type="text" size="small" @click="shan(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <p class="pp">共 40 条记录</p>
      <el-pagination background layout="prev, pager, next" :total="100" class="ye"></el-pagination>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  methods: {
    handleClick(row) {
      console.log(row);
    },
    onSubmit(){

    },
    handleSelectionChange(val){

    },
    shan(id) {
      axios({
        url: "http://139.9.169.87:8081/examsystem/deleteCourse",
        method: "get",
        params: {
          id: id
        }
      }).then(shan => {
        this.cww = shan.data;
        alert("删除成功")
      }).catch(function(e){
        console.log(e)
      })
      ;
    },
    cha(){
      let that=this;
      this.axios.get('http://139.9.169.87:8081/examsystem/getAllCourse')
      .then(function (response) {
        that.tableData=response.data.data
      })
      .catch(function (error) {
        console.log(error);
      });
    },
  },
  data() {
    return {
      checked: false,

      formInline: {
        user: "",
        region: ""
      },
      tableData: [
        {
         "professional.id":'',
         "professional.professionalName":"",
         "professional.professionalDesc":"",
         "id":"",
         "courseName":"",
         "courseDesc":"",
         "professionalId":""
        },
      ],
      gridData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",  
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        cww: ""
      },
      formLabelWidth: "120px"
    };
  },
  mounted(){
    this.cha()
  },
};
</script>

<style>
.zhu {
  width: 1050px;
  position: absolute;
  top: 200px;
  left: 400px;
  font-size: 22px;
  border: 1px solid #ebeef5;
}
.top {
  position: absolute;
  top: 100px;
  left: 400px;
}
.ye {
  float: right;
  margin: 15px;
}
.pp {
  float: left;
  font-size: 14px;
  margin: 20px;
  color: #666;
}
.v-modal {
  position: relative !important;
}
</style>