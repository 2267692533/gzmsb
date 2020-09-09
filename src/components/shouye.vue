<template>
  <div>
    <el-container style="height: 1200px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '1']">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-message"></i>管理
            </template>
            <el-menu-item-group>
              <template slot="title">会员管理</template>
              <router-link to="/shouye/vipliebiao"><el-menu-item index="1-1">会员列表</el-menu-item></router-link>
              <router-link to="/shouye/chouzhisz"><el-menu-item index="1-2">充值设置</el-menu-item></router-link>
              <router-link to="/shouye/jifeng"><el-menu-item index="1-3">积分设置</el-menu-item></router-link>
              <router-link to="/shouye/jfshezhi"><el-menu-item index="1-4">充值记录</el-menu-item></router-link>
              <router-link to="/shouye/xiaof"><el-menu-item index="1-5">消费记录</el-menu-item></router-link>
            </el-menu-item-group>

            <el-menu-item-group title="优惠券">
              <router-link to="/shouye/yhq?abc=1" ><el-menu-item index="1-6">优惠券管理</el-menu-item></router-link>
            </el-menu-item-group>

            <el-menu-item-group title="商品管理">
              <router-link to="/shouye/shangpinliebiao"><el-menu-item index="1-7">商品列表</el-menu-item></router-link>
               <router-link to="/shouye/shangpinfenlei"><el-menu-item index="1-8">商品分类</el-menu-item></router-link>
            </el-menu-item-group>

            <el-menu-item-group title="订单管理">
               <router-link to="/shouye/shangpinding"><el-menu-item index="1-9">商品订单</el-menu-item></router-link>
                <router-link to="/shouye/kefangding"><el-menu-item index="1-10">客房订单</el-menu-item></router-link>
               <router-link to="/shouye/zhusuji"><el-menu-item index="1-11">住宿记录</el-menu-item></router-link>
            </el-menu-item-group>

            <el-menu-item-group title="客房管理">
               <router-link to="/shouye/fangtaigli"><el-menu-item index="1-12">房态管理</el-menu-item></router-link>
               <router-link to="/shouye/wuwu"><el-menu-item index="1-13">房型管理</el-menu-item></router-link>
               <el-menu-item index="1-14">房号管理</el-menu-item>
            </el-menu-item-group>

            <el-menu-item-group title="投诉建议管理">
              <el-menu-item index="1-15">投诉建议</el-menu-item>
            </el-menu-item-group>

            <el-menu-item-group title="用户管理">
              <el-menu-item index="1-16">管理员列表</el-menu-item>
               <el-menu-item index="1-17">角色管理</el-menu-item>
            </el-menu-item-group>

            <el-menu-item-group title="设置">
              <el-menu-item index="1-18">微信设置</el-menu-item>
               <el-menu-item index="1-19">酒店设置</el-menu-item>
               <el-menu-item index="1-20">其他设置</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>用户名:张三</span>
        </el-header>
      </el-container>
    </el-container>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>


<script>
export default {
  name: "shouye",
  data() {
    abc:['111']
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    };
    return {
      tableData: Array(20).fill(item)
    };
  }
};
</script>


<style>
html{
  width: 1900px;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>

