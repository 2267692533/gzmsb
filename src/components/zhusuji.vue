<template>
  <div>
    <div class="waishangding">
      <div class="shangd">
        <div class="block">
          <span class="demonstration" style="color:#999">入离日期：</span>
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
            
          </el-form>
        </div>
        <div>
          <el-table
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange"
          >
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column prop="name" label="房型名称" width="200"></el-table-column>
            <el-table-column prop="sj" label="房号" width="180"></el-table-column>
            <el-table-column prop="city" label="房客信息" width="130"></el-table-column>
            <el-table-column prop="address" label="抵店时间" width="130"></el-table-column>
            <el-table-column fixed="right" label="离店时间" width="200">
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      select: "",
      input3: "",
      formInline: {
        user: "",
        region: ""
      },
      tableData: [
        {
          name: "201707196398345",
          sj: "￥100.00",
          city: "会员充值",
          address: "微信支付"
        },
        {
          name: "201707196398345",
          sj: "￥100.00",
          city: "会员充值",
          address: "微信支付"
        },
        {
          name: "201707196398345",
          sj: "￥100.00",
          city: "商家充值",
          address: "微信支付"
        },
        {
          name: "201707196398345",
          sj: "￥100.00",
          city: "会员充值",
          address: "微信支付"
        }
      ]
    };
  }
};
</script>

<style>
.waishangding {
  width: 1500px;
  position: absolute;
  top: 100px;
  left: 300px;
  height: 300px;
}
ss {
  color: red;
}
.shangd {
  float: left;
  margin-top: 20px;
}
</style>