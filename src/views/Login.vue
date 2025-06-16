<template>
    <div class="login-div">
        <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="auto" class="login-form">
            <el-form-item label="用户名" prop="username">
                <el-input v-model="loginForm.username" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="loginForm.password" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="login">登录</el-button>
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
            },
            rules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        login() {
            this.$refs.loginForm.validate((valid) => {
                if (valid) {
                    this.$router.push('/index')
                } else {
                    return false;
                }
            })
        }
    }

}
</script>

<style lang="scss" scoped>
.login-div {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('@/assets/images/login-bg.png');
    background-size: 100% 100%;
}

.login-form {
    width: 350px;
    margin-left: 50%;
    padding: 30px;
    text-align: center;
    border-radius: 8px;
    box-shadow: 0 0 10px #409EFF;

}
</style>
