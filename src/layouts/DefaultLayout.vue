<template>
    <el-container>
        <el-aside width="200px">
            <el-menu>
                <el-submenu index="1">
                    <template slot="title"><i class="el-icon-message"></i>系统管理</template>
                    <el-menu-item-group>
                        <el-menu-item index="1-1">用户管理</el-menu-item>
                        <el-menu-item index="1-2">角色管理</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </el-aside>
        <el-container>
            <el-header>Header</el-header>
            <el-main>
                <RouterView></RouterView>
            </el-main>
        </el-container>
    </el-container>
</template>


<script>
import {RouterView} from 'vue-router';

export default {
    name: 'DefaultLayout'
}
</script>


<style lang="scss" scoped>
el-container {
    height: 100%;
}

el-aside {
    height: 100%;

}

el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
}
</style>