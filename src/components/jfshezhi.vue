<template>
  <div>
    <div class="waijf">
      <div>
        <div class="block">
          <span class="demonstration"></span>
          <el-date-picker
            v-model="value1"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          ></el-date-picker>
        </div>
        <div class="fud">
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label>
              <el-select v-model="formInline.region" placeholder="全部类型">
                <el-option label="会员充值" value="xm"></el-option>
                <el-option label="商家充值" value="nc"></el-option>
              </el-select>
            </el-form-item>
            <div class="xiaa">
              <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
                <el-select v-model="select" slot="prepend" placeholder="请选择">
                  <el-option label="姓名" value="1"></el-option>
                  <el-option label="昵称" value="2"></el-option>
                  <el-option label="手机号" value="3"></el-option>
                  <el-option label="会员卡号" value="4"></el-option>
                  <el-option label="订单编号" value="5"></el-option>
                </el-select>
              </el-input>
            </div>
          </el-form>
        </div>
        <p class="anan">
          <el-button type="primary">查 询</el-button>
        </p>
        <p class="ananer">
          <el-button>重 置</el-button>
        </p>
      </div>
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="name" label="用户信息" width="200"></el-table-column>
        <el-table-column prop="sj" label="消费金额" width="180"></el-table-column>
        <el-table-column prop="city" label="消费类型" width="130"></el-table-column>
        <el-table-column prop="address" label="操作员" width="130"></el-table-column>
        <el-table-column fixed="right" label="操作" width="200">
          <el-row class="aan">
            <el-button>
              <router-link to="/shouye/Fenye">详情</router-link>
            </el-button>
          </el-row>
        </el-table-column>
      </el-table>
      <p class="pp">共 40 条记录</p>
      <el-pagination background layout="prev, pager, next" :total="100" class="ye"></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input3: "",
      select: "",
      value1:"",
      value2:"",
      checked: false,
      formInline: {
        user: "",
        region: ""
      },
      tableData: [
        {
          name: "用户昵称-张三",
          sj: "￥100.00",
          city: "订房",
          address: "张三"
        },
        {
          name: "用户昵称-张三",
          sj: "￥100.00",
          city: "商品购买",
          address: "张三"
        },
        {
          name: "用户昵称-张三",
          sj: "￥100.00",
          city: "订房",
          address: "张三"
        },
        {
          name: "用户昵称-张三",
          sj: "￥100.00",
          city: "商品购买",
          address: "张三"
        }
      ]
    };
  }
};
</script>

<style>
/* .topp{
  width: 1050px;
  position: absolute;
  top: 200px;
  left: 400px;
  font-size: 22px;
  border: 1px solid #ebeef5;
} */
.fud {
  /* position: absolute; */
  margin-left: 400px;
}
.block {
  float: left;
}
.xiaa {
  float: right;
  /* margin-top: -50px; */
}
.anan {
  position: absolute;
  top: -15px;
  z-index: 99;
  left: 1000px;
}
.ananer {
  position: absolute;
  top: -15px;
  z-index: 99;
  left: 1100px;
}
.el-table__fixed-right::before,
.el-table__fixed::before {
  display: none;
}
/* .el-button {
  border-bottom: 1px solid #EBEEF5;
  z-index: 9999;
} */
</style>