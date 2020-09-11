<template>
    <div class="indx"  >
        <img class="banner" src="../assets/images/banner.png" alt="">
        <div class="search">
            <img src="../assets/images/sear.png" alt="">
            <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </div>
        <!--<div class="bottm">-->
            <!--<div>Copyright Reserved © 2020        SUN`S        版权所有 京ICP备 00000000号</div>-->
        <!--</div>-->
    </div>
</template>

<script>
    import productItem from '../components/productItem'
    export default {
        name: "index",
        data() {
            return {
                input3:""
            };
        },

        components: {
            productItem,
            // top
        },
        created () {

            // this.init();
            // this.$store.commit('changeSelect',this.type);
        },
        methods: {
            //  获取数据
            init(){
                this.$axios.get('/api/product/getHomeList').then(ret => {
                    // console.log(ret.data.code)
                    if (ret.data.code === 200){
                        this.loading=false;
                        this.datas=ret.data.data
                    }else{
                        this.$message({
                            message:ret.data.msg
                        })
                    }
                })
            },
            search(){
                if(!this.keyWords){
                    this.$message({message:"请输入搜索的内容"})
                    return false
                }
                this.type=[];
                this.$store.commit('changeSelect',this.type);
                this.$router.push({path: '/searchrult', query: {"cont":this.keyWords}})
            },


            //  点击跳转商品详情
            jump(path,id,productId){
                this.productId=productId;
                this.$router.push({path: path, query: {"id":id,"productId":productId}})
            },
            handleQuery(event) {
                if(this.keyWords==''){
                    this.init();
                }

            },
            changeColor(resultsList) {

            }
        }
    };
</script>

<style >
    .indx{
        text-align: center;
    }
    .banner{
        margin-top: 50px;
    }
    .search{
        display: flex;
        flex-wrap: nowrap;
        width:350px;
        margin: 0 auto;
        margin-top: 100px;
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
