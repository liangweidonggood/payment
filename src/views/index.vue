<template>
    <div class="indx" >
        <img class="banner" src="../assets/images/banner.png" alt="">
        <div class="search">
            <img src="../assets/images/sear.png" alt="">
            <el-input placeholder="请输入内容" v-model="name" class="input-with-select">
                <el-button @click="kip" slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </div>

    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                name:""
            };
        },
        methods: {
            //  点击跳转商品详情
            kip(){
                var formData = new FormData();
                formData.append("name", this.name);
                formData.append("pageNum", 1);
                formData.append("pageRow", 10);
                this.$axios.post('/gem/listGem',formData).then(ret => {
                    if (ret.data.code == 100){
                        sessionStorage.setItem('datas', "");
                        sessionStorage.setItem('list', JSON.stringify(ret.data.info.list));
                        this.$router.push({path: '/detail'})
                    }else{
                        this.$message({
                            message:ret.data.msg
                        })
                    }
                })

            },

        }
    };
</script>

<style >

    .banner{
        margin-top: 50px;
    }
    .search{
        display: flex;
        flex-wrap: nowrap;
        width:350px;
        margin: 120px auto;
    }
    .search img{
        width: 144px;
        height: 14px;
        margin-top: 10px;
        margin-right: 10px;
    }
    .input-with-select{
        width: 260px;
    }
    .search .el-input__inner{
        height: 36px;
        line-height: 36px;
        border: 1px solid #767676;
        border-right: 0px;
    }
    .search .el-input-group__append .el-button{
        background: #767676;
        border: 1px solid #767676;
        background-color: #767676;
        padding:10px 20px;
        border-radius: 0;
    }
    .el-icon-search{
        color: white;
    }
</style>
