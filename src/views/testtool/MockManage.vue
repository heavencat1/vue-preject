<template>
    <el-container>
            <el-aside width="200px">
                <el-menu>
                    <el-menu-item index="1">
                        <router-link to="/mockmanage/amazonwholesale">亚马逊批发</router-link>
                    </el-menu-item>
                </el-menu>
                <el-menu>
                    <el-menu-item index="2">
                        <router-link to="/mockmanage">WayFair</router-link>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
    </el-container>
</template>





<script>
export default {
    name: 'MockManage'
}
</script>


<style scoped>


</style>