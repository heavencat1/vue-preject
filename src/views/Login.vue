<template>
    <div class="login-div">
        <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="auto" class="login-form">
            <el-form-item label="用户名" prop="userName">
                <el-input v-model="loginForm.userName" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="loginForm.password" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="login" style="width: 100%;">登录</el-button>
            </el-form-item>
            <el-form-item>
                <input type="checkbox" style="margin-left: 5px;" />
                <label>记住密码</label>
            </el-form-item>
        </el-form>
    </div>
</template>


<script>
import { webLogin } from '@/api/index';

export default {
    name: 'Login',
    data() {
        return {
            loginForm: {
                userName: '',
                password: ''
            },
            rules: {
                userName: [
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
            this.$refs.loginForm.validate(valid => {
                if (valid) {
                    webLogin({
                        userName: this.loginForm.userName,
                        password: this.loginForm.password
                    }).then(res => {
                        if (res.data.code === 200) {
                            this.$message.success('登录成功');
                            this.$router.push('/index')
                        } else {
                            this.$message.error(res.msg);
                        }
                    })
                } else {
                    console.log('error submit!!');
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
    text-align: left;
    border-radius: 8px;
    box-shadow: 0 0 10px #409EFF;

}
</style>
