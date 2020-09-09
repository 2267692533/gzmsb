<template>
  <div>
    <div class="waiyhq">
      <div class="topk">
        <p>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </p>

        <p>
          <el-select v-model="value1" placeholder="请选择">
            <el-option
              v-for="item in optionser"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </p>

        <p>
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </p>
      </div>
      <p class="anans">
        <el-button type="primary">查 询</el-button>
      </p>
      <p class="anansa">
        <el-button>重 置</el-button>
      </p>
      <div class="sanan">
        <p>
          <el-button type="primary">+ 新建</el-button>
        </p>
        <p>
          <el-button>批量投放</el-button>
        </p>
        <p>
          <el-popover placement="top" width="160" v-model="visible">
            <p>
              删除后商家将无法查看优惠券码的信息，
              且无法恢复，请谨慎操作！
            </p>
            <div style="text-align: right; margin: 0">
              <el-button size="mini" type="text" @click="visible = false">取消</el-button>
              <el-button type="primary" size="mini" @click="visible = false">确定删除</el-button>
            </div>
            <el-button slot="reference">删除</el-button>
          </el-popover>
        </p>
      </div>

      <div>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="日期" width="150"></el-table-column>
          <el-table-column label="卡券信息">
            <el-table-column prop="name" label="优惠券名称" width="120"></el-table-column>
            <el-table-column label>
              <el-table-column prop="province" label="状态" width="120"></el-table-column>
              <el-table-column prop="city" label="使用门槛" width="120"></el-table-column>
              <el-table-column prop="address" label="发放总量" width="300"></el-table-column>
              <el-table-column prop="zip" label="已发放数" width="120"></el-table-column>
              <el-table-column prop="zipyi" label="已使用数" width="140"></el-table-column>
              <el-table-column prop="ziper" label="启用" width="140"></el-table-column>
              <el- table-column prop="zipsan" label="操作" width="220"></el->
            </el-table-column>
          </el-table-column>
        </el-table>
      </div>
    
      <div class="feny">
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[7]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="100"
          ></el-pagination>
        </div>
      </div>
    </div>
    <!-- <el-pagination v-model="value1" >asd</el-pagination> -->
    <!-- <el-button v-model="vueeee"></el-button> -->
  </div>
</template>

<script>
export default {


  data() {

    return {
      options: [
        {
          value: "选项1",
          label: "代金券"
        },
        {
          value: "选项2",
          label: "优惠券"
        }
      ],
      optionser: [
        {
          value: "选项1",
          label: "未过期"
        },
        {
          value: "选项2",
          label: "已过期"
        }
      ],
      value: "",
      value1: "",
      // vueeee:this.$route.query.abc,
      input: "",
      tableData: [
        {
          date: "2016-05-03",
          name: "10元优惠券",
          province: "未过期",
          city: 50.0,
          address: "无限制",
          zip: 33,
          zipyi: 11,
          ziper: "开",
          zipsan: "删除"
        },
        {
          date: "2016-05-02",
          name: "3折优惠券",
          province: "已过期",
          city: 50.0,
          address: "无限制",
          zip: 33,
          zipyi: 14,
          ziper: "开",
          zipsan: "删除"
        },
        {
          date: "2016-05-04",
          name: "10元优惠券",
          province: "已过期",
          city: 50.0,
          address: 500,
          zip: 33,
          zipyi: 16,
          ziper: "关",
          zipsan: "删除"
        },
        {
          date: "2016-05-01",
          name: "3折优惠券",
          province: "未过期",
          city: 50.0,
          address: "无限制",
          zip: 55,
          zipyi: 21,
          ziper: "开",
          zipsan: "删除"
        },
        {
          date: "2016-05-08",
          name: "3折优惠券",
          province: "已过期",
          city: 100.0,
          address: 500,
          zip: 44,
          zipyi: 11,
          ziper: "关",
          zipsan: "删除"
        },
        {
          date: "2016-05-06",
          name: "10元优惠券",
          province: "未过期",
          city: 100.0,
          address: 1000,
          zip: 88,
          zipyi: 11,
          ziper: "开",
          zipsan: "删除"
        },
        {
          date: "2016-05-07",
          name: "10元优惠券",
          province: "已过期",
          city: 50.0,
          address: 1000,
          zip: 66,
          zipyi: 11,
          ziper: "关",
          zipsan: "删除"
        }
      ]
    };
  },
  
  created() {
    // alert();
    console.log(this.$route.query);
  }
};
</script>

<style>
.waiyhq {
  width: 1500px;
  position: absolute;
  top: 100px;
  left: 300px;
  height: 300px;
}
.topk > p {
  float: left;
  margin-left: 30px;
}
.anans {
  position: absolute;
  top: 0px;
  z-index: 99;
  left: 1000px;
}
.anansa {
  position: absolute;
  top: 0px;
  z-index: 99;
  left: 1100px;
}
.sanan {
  position: absolute;
  top: 80px;
  left: 15px;
}
.sanan > p {
  float: left;
  margin-left: 15px;
}
.feny{
    text-align: left;
}
</style>