<template>
  <div>
    <div class="wai">
      <p class="p1">套餐配置</p>
      <div class="nei">
        <p>自定义金额</p>
        <p>
          <el-switch v-model="value1" active-text="开" inactive-text="关"></el-switch>
        </p>
      </div>
      <div class="kuan">
        <img src="../assets/u1798.png" alt />
        <p>暂无套餐，请添加</p>
        <div>
          <p>添加套餐</p>
        </div>
      </div>
    </div>
    <div class="jia">
      <p>添加充值套餐</p>
      <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
        <el-form-item label="活动名称">
          <el-input v-model="sizeForm.name"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select v-model="sizeForm.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="活动性质">
          <el-checkbox-group v-model="sizeForm.type">
            <el-checkbox-button label="美食/餐厅线上活动" name="type"></el-checkbox-button>
            <el-checkbox-button label="地推活动" name="type"></el-checkbox-button>
            <el-checkbox-button label="线下主题活动" name="type"></el-checkbox-button>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="特殊资源">
          <el-radio-group v-model="sizeForm.resource" size="medium">
            <el-radio border label="线上品牌商赞助"></el-radio>
            <el-radio border label="线下场地免费"></el-radio>
          </el-radio-group>
        </el-form-item>
        <br />
        <el-input
          type="textarea"
          placeholder="请输入内容"
          maxlength="30"
          show-word-limit
        ></el-input>
        <br />
        <br />
        <el-form-item size="large">
          <el-button type="primary">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>

    <div class="zuih">
      <ul>
        <li>1、套餐名称：不超过6个汉字，12个字符；</li>
        <li>2、金额：大于0的正整数；</li>
        <li>3、送余额：大于0的正整数；</li>
        <li>关于余额：赠送的余额需要单独建立一个赠送账户，用户在消费的时候</li>
        <li>4、送积分：大于0的正整数；</li>
        <li>5、送券：支持选择多张优惠券；同一张券支持赠送多张（前提是赠送数量要小于等于该优惠券个人限领数量）；</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: false,
      sizeForm: {
        name: "",
        region: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style>
* {
  list-style-type: none;
}
.wai {
  width: 400px;
  position: absolute;
  top: 100px;
  left: 300px;
}
.p1 {
  color: #666666;
  font-weight: bold;
  font-size: 18px;
}
.nei > p {
  float: left;
  margin-left: 10px;
  font-size: 14px;
}
.kuan {
  float: left;
  width: 400px;
  height: 500px;
  background: #f2f2f2;
  margin: 0 auto;
  text-align: center;
}
.kuan img {
  margin-top: 45%;
}
.kuan > div {
  width: 396px;
  height: 50px;
  border: 2px solid #dadada;
  background: #ffffff;
  margin-top: 225px;
}
.jia {
  width: 500px;
  height: 500px;
  border: 1px solid #dadada;
  position: absolute;
  left: 1000px;
  top: 200px;
  padding: 50px;
}
.jia > p {
  text-align: center;
  font-weight: 600;
}
.zuih {
  width: 300px;
  position: absolute;
  left: 1400px;
  top: 600px;
  color: #ff3399;
  font-size: 12px;
  line-height: 20px;
  height: 140px;
  border-left: 2px solid #ff3399;
  font-weight: lighter;
}
.zuih > ul {
  text-align: left;
  margin-left: -30px;
  margin-top: 0px;
}
</style>