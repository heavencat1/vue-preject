<template>
    <div class="login-div">
        <el-form :model="loginForm" label-width="auto" class="login-form">
            <el-form-item label="用户名" prop="username">
                <el-input v-model="loginForm.username" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="loginForm.password" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary">登录</el-button>
                <el-button>注册</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>


<script>
export default {
    name: 'Login',
    data() {
        return {
            loginForm: {
                username: '',
                password: ''
            }
        }
    }
}
</script>

<style lang="scss" scoped>

.login-div{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('@/assets/images/login-bg.png');
    background-size: 100% 100%;
}

.login-form{
    width: 350px;
    margin: 0 auto;
    padding: 30px;
    text-align: center;
    border-radius: 8px;
    box-shadow: 0 0 10px #409EFF;
}

</style>
