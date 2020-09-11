<template>
    <div class="login-wrap" v-loading="loading">
        <div class="ms-login">
            <div class="ms-title">支付系统</div>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="ms-content">
                <el-form-item prop="username">
                    <el-input v-model="ruleForm.userName" placeholder="username">
                        <el-button slot="prepend" icon="el-icon-lx-people"></el-button>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" placeholder="password" v-model="ruleForm.passWord" @keyup.enter.native="submitForm('ruleForm')">
                        <el-button slot="prepend" icon="el-icon-lx-lock"></el-button>
                    </el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                </div>
                <div style="color: white;font-size: 12px;cursor:pointer" @click="register()" class="toregister" >没有账号？<span>立即注册</span></div>
            </el-form>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data: function(){
            return {
                loading:false,
                ruleForm: {
                    userName: '',
                    passWord: ''
                },
                rules: {
                    userName: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    passWord: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ]
                }
            }
        },
        created(){

        },
        methods: {
            submitForm(formName) {
                this.loading=true;
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        //走后台接口 成功后
                        this.$axios.post('/api/login/logon',this.ruleForm).then(ret => {
                            if (ret.data.code == 200){
                                this.loading=false;
                                localStorage.setItem('ms_username',this.ruleForm.userName);
                                this.$store.commit('set_token', ret.data.data);
                                if (this.$store.state.token) {
                                        axios.defaults.headers.common['Authentication-Token'] = this.$store.state.token;
                                    this.$store.commit('set_token', this.$store.state.token)
                                    this.$router.push('/')
                                } else {
                                    this.$router.replace('/login');
                                }
                            }else{
                                this.$message(ret.data.msg)
                                this.loading=false;
                            }
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            //点击注册跳转
            register(){

            },
        }
    }
</script>

<style scoped>
    .login-wrap{
        position: fixed;
        width:100%;
        height:100%;
        bottom: 0;
        top: 0;
        background-color: #00b7ee;
        background-image: url(../../assets/images/login11.jpg);
        background-size: 100%;
        background-repeat: no-repeat;
    }
    .ms-title{
        width:100%;
        line-height: 50px;
        text-align: center;
        font-size:20px;
        color: #fff;
        border-bottom: 1px solid #ddd;
    }
    .ms-login{
        width:350px;
        border-radius: 5px;
        overflow: hidden;
        margin: 15% auto;
    }
    .ms-content{
        padding: 30px 30px;
    }
    .login-btn{
        text-align: center;
    }
    .login-btn button{
        width:100%;
        height:36px;
        margin-bottom: 10px;
    }
    .login-tips{
        font-size:12px;
        line-height:30px;
        color:#fff;
    }
</style>
