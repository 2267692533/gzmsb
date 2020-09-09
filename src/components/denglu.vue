<template>
  <div id="app">
    <img src="../assets/u21.jpg" width="100%" id="bj" />
    <div class="zhu">
      <img src="../assets/u24.png" width="14%" id="tu" />
      <el-form :model="ruleForm" status-icon :rules="rules" ref class="demo-ruleForm">
        <el-form-item label prop="name" class="input">
          <i class="el-icon-s-custom"></i>
          <el-input type="text" v-model="name" autocomplete="off" class="nei"></el-input>
        </el-form-item>
        <el-form-item label prop="mima" class="input">
          <i class="el-icon-view"></i>
          <el-input
            type="password"
            v-model="mima"
            autocomplete="off"
            class="nei"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="deng()" class="deng">登录</el-button>
        </el-form-item>
      </el-form>
      <p class="pcom">Copyright © www.xxx.com, All Rights Reserved.</p>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import qs from "qs";
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        if (this.mima !== "") {
          this.$refs.validateField("mima");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      name: "",
      mima: "",
      rules: {
        name: [{ validator: validatePass, trigger: "blur" }],
        mima: [{ validator: validatePass2, trigger: "blur" }]
      }
    };
    return {
      note: {}
    };
  },
  methods: {
    deng() {
      axios({
        url: "http://139.9.169.87:8081/examsystem/login",
        method: "post",
        params: {
          username: this.name,
          password: this.mima
        }
      }).then(dd => {
        console.log(dd.data.success);
        if (dd.data.success == "true") {
          this.$router.replace("/yi");
          console.log("成功!");
        } else {
          console.log("失败！");
        }
      });
    }
  },
  created() {
    var lett = this;
    document.onkeydown = function(e) {
      var key = window.event.keyCode;
      if (key == 13) {
        // alert(1)
        lett.deng();
      }
    };
  }
};
</script>

<style lang="scss">
#bj {
  position: fixed;
  top: 0px;
}
.input {
  width: 20%;
}
.zhu {
  width: 100%;
  position: fixed;
  top: 35%;
  left: 38%;
}
.el-input__inner {
  border-color: #f56c6c;
  text-indent: 30px !important;
}
.el-icon-s-custom:before {
  content: "\e7a5";
  font-size: 30px;
  position: absolute;
  z-index: 2;
  top: 5px;
  left: 7px;
  opacity: 0.5;
}
.el-icon-view:before {
  content: "\e7a5";
  font-size: 30px;
  position: absolute;
  z-index: 2;
  top: 5px;
  left: 8px;
  opacity: 0.5;
}
.el-form-item.is-error .el-input__inner,
.el-form-item.is-error .el-input__inner:focus,
.el-form-item.is-error .el-textarea__inner,
.el-form-item.is-error .el-textarea__inner:focus,
.el-message-box__input input.invalid,
.el-message-box__input input.invalid:focus {
  border-color: #45c7ae !important;
}
.deng {
  width: 20%;
  background: #45c7ae !important;
}
#tu {
  position: fixed;
  top: 25%;
  left: 43%;
}
.demo-ruleForm {
  width: 1100px;
  position: fixed;
  top: 40%;
  left: 44.5%;
}
.pcom {
  color: #666;
  font-size: 13px;
  position: absolute;
  top: 550px;
  left: 420px;
}
</style>
