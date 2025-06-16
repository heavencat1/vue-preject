<template>
    <el-container class="container-box">
        <el-aside width="200px">
            <el-menu>
                <el-submenu index="1">
                    <template slot="title"><i class="el-icon-setting"></i>常用工具</template>
                    <el-menu-item-group>
                        <el-menu-item index="1-1">工具1</el-menu-item>
                        <el-menu-item index="1-2">工具2</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title"><i class="el-icon-message"></i>系统管理</template>
                    <el-menu-item-group>
                        <el-menu-item index="2-1">
                            <router-link to="/usermanage">用户管理</router-link>
                        </el-menu-item>
                        <el-menu-item index="2-2">
                            <router-link to="/rolemanage">角色管理</router-link>
                        </el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </el-aside>
        <el-container>
            <el-header class="el-header-box">
                <el-dropdown>
                    <i class="el-icon-setting" style="margin-right: 20px; font-size: 20px;"></i>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>个人信息</el-dropdown-item>
                        <el-dropdown-item>注销</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <span style="font-size: 20px;">用户名</span>


            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>


<script>
import { RouterView } from 'vue-router';

export default {
    name: 'DefaultLayout'
}
</script>


<style lang="scss" scoped>
.container-box{
    height: 100vh;
    display: flex;
}


el-aside {
    height: 100%;

}

.el-header-box{
    background-color: #FFFFFF;
    color: #333;
    line-height: 60px;
    text-align: right;
    font-size: 15px;
}

.router-link-active {
  text-decoration: none;
  color: #409EFF;
}
a{
  text-decoration: none;
  color: #333;
}
</style>