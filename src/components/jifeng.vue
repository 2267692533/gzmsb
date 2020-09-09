<template>
  <div>
    <div class="waijf">
      <p>积分赠送规则</p>
      <div style="margin-top: 15px;" class="jf">
        <p class="p1">
          <el-checkbox v-model="checked">首次注册登录，可获得</el-checkbox>
        </p>
        <p>
          <el-input placeholder="请输入内容" v-model="input2">
            <template slot="append">积分</template>
          </el-input>
        </p>
      </div>
      <div style="margin-top: 15px;" class="jf">
        <p class="p1">
          <el-checkbox v-model="checked2">每笔消费1元即 可获得</el-checkbox>
        </p>
        <p>
          <el-input placeholder="请输入内容" v-model="input3">
            <template slot="append">积分</template>
          </el-input>
        </p>
      </div>
      <div style="margin-top: 15px;" class="jf">
        <p class="p1">
          <el-checkbox v-model="checked3">此每充值1元即 可获得</el-checkbox>
        </p>
        <p>
          <el-input placeholder="请输入内容" v-model="input4">
            <template slot="append3">积分</template>
          </el-input>
        </p>
      </div>

      <div class="waijfer">
        <p>积分抵扣规则</p>
        <el-checkbox v-model="checked4" class="bu">不使用积分抵扣</el-checkbox>
        <div class="neid">
          <p class="p2">
            <el-checkbox v-model="checked5">使用积分抵扣</el-checkbox>
          </p>
          <p>
            <el-input placeholder="100" v-model="input9" clearable></el-input>
          </p>
          <p class="yiyuan">积分=1元</p>
        </div>

        <div style="margin-top: 15px;" class="jf">
          <p class="p1">
            <el-checkbox v-model="checked6">单次消费最多使用</el-checkbox>
          </p>
          <p>
            <el-input placeholder="请输入内容" v-model="input5">
              <template slot="append7">积分</template>
            </el-input>
          </p>
        </div>

        <div class="zuihyi">
          <ul>
            <li>积分赠送规则：默认全部不勾选；</li>
            <li>积分折扣规则：默认选择不使用积分抵扣；</li>
            <li>积分过期规则：默认选择一直有效，永不过期；</li>
          </ul>
        </div>
      </div>

      <div class="waijfer">
        <p>积分过期规则</p>
        <el-checkbox v-model="checked8" class="bu">一直有效，永不过期</el-checkbox>
        <div class="neid">
          <p class="p2">
            <el-checkbox v-model="checked9">获得的所有成长值，在</el-checkbox>
          </p>
          <p>
            <el-select v-model="value" clearable placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </p>
          <p class="yiyuan">的12月31日过期</p>
        </div>

        <div style="margin-top: 15px;" class="jf">
          <p class="p1">
            <el-checkbox v-model="checked10">单次消费最多使用</el-checkbox>
          </p>
          <p>
            <el-input placeholder="请输入内容" v-model="input6">
              <template slot="append11">积分</template>
            </el-input>
          </p>
        </div>

        <div class="zuiher">
          <ul>
            <li>过期计算规则</li>
            <li>根据用户设置的计算周期计算有效积分；</li>
            <li>过期规则只影响未过期的积分，已过期的积分不受过期规则的限制；</li>
          </ul>
        </div>
      </div>
      <el-row class="baocun">
        <el-button type="primary" style="width:150px;">保 存</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      input5: "",
      input6: "",
      input9: "",
      checked2: "",
      checked3: "",
      checked4: "",
      checked5: "",
      checked6: "",
      checked8: "",
      checked9:"",
      checked10: "",
      options: [
        {
          value: "选项1",
          label: "当年"
        },
        {
          value: "选项2",
          label: "第二年"
        },
        {
          value: "选项3",
          label: "第三年"
        },
        {
          value: "选项4",
          label: "第四年"
        },
        {
          value: "选项5",
          label: "第十年"
        }
      ],
      value: "选项1"
    };
  }
};
</script>

<style>
.waijf {
  width: 1500px;
  position: absolute;
  top: 100px;
  left: 300px;
  height: 300px;
}
.jf {
  width: 500px;
}
.jf > p {
  float: left;
  margin-left: 20px;
  text-align: left;
}
.p1 {
  margin-top: 20px;
}
.waijfer {
  float: left;
  width: 1500px;
  border-top: 1px solid #ebebeb;
  margin-top: 50px;
}
.neid {
  width: 550px;
}
.neid > p {
  float: left;
  margin-left: 20px;
  text-align: left;
}
.p2 {
  margin-top: 20px;
}
.bu {
  margin-left: 20px;
}
.yiyuan {
  font-size: 14px;
  color: #666666;
  margin-top: 25px;
}
.zuihyi {
  width: 280px;
  position: absolute;
  left: 600px;
  top: 480px;
  color: #ff3399;
  font-size: 12px;
  line-height: 20px;
  height: 60px;
  border-left: 2px solid #ff3399;
  font-weight: lighter;
}
.zuihyi > ul {
  text-align: left;
  margin-left: -30px;
  margin-top: 0px;
}
.zuiher {
  width: 280px;
  position: absolute;
  left: 600px;
  top: 780px;
  color: #ff3399;
  font-size: 12px;
  line-height: 20px;
  height: 80px;
  border-left: 2px solid #ff3399;
  font-weight: lighter;
}
.zuiher > ul {
  text-align: left;
  margin-left: -30px;
  margin-top: 0px;
}
.baocun {
  position: relative;
  left: 100px;
  top: 900px;
}
</style>