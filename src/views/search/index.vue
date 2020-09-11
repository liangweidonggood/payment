<template>
    <div>
        <div class="main">
            <!-- 精品套餐 -->
            <el-row :span="24"  v-if="datas['13']">
                <el-col class="main-htitle" >
                    <span class="main-title">精品套餐</span>
                </el-col>
            </el-row>
            <el-main style="margin: 0;padding: 0;height: auto;"  v-if="datas['13']">
                <el-row type="flex"  style="flex-wrap: wrap">
                    <el-col :span="6" class="row-bg"  v-for="(item,index) in datas['13']" :key="index">
                        <div class="grid-content bg-purple border"  @click="jump('/detail',item.id)">
                            <product-item :img="item.proImage" :product-name="item.proName" :price="item.proPrice"/>
                        </div>
                    </el-col>
                </el-row>
            </el-main>
            <!-- 硬件产品 -->
            <el-row :span="24"  v-if="datas['11']|| datas['12']">
                <el-col class="main-htitle" >
                    <span class="main-title">硬件产品</span>
                </el-col>
            </el-row>
            <el-main style="margin: 0;padding: 0;height: auto;">
                <el-row type="flex"  style="flex-wrap: wrap">
                    <el-col :span="6" class="row-bg"  v-for="(item,index) in datas['11']" :key="index">
                        <div class="grid-content bg-purple border"  @click="jump('/detail',item.id)">
                            <product-item :img="item.proImage" :product-name="item.proName" :price="item.proPrice"/>
                        </div>
                    </el-col>
                    <el-col :span="6" class="row-bg"  v-for="(item,index) in datas['12']" :key="index">
                        <div class="grid-content bg-purple border"  @click="jump('/detail',item.id)">
                            <product-item :img="item.proImage" :product-name="item.proName" :price="item.proPrice"/>
                        </div>
                    </el-col>
                </el-row>
            </el-main>
            <el-row :span="24"  v-if="datas['10']">
                <el-col class="main-htitle" >
                    <span class="main-title">软件产品</span>
                </el-col>
            </el-row>

            <el-row type="flex"  style="flex-wrap: wrap">
                <el-col :span="6" class="row-bg"  v-for="(item,index) in datas['10']" :key="index">
                    <div class="grid-content bg-purple border"  @click="jump('/detail',item.id)">
                        <product-item :img="item.proImage" :product-name="item.proName" :price="item.proPrice"/>
                    </div>
                </el-col>
            </el-row>
            <el-row :span="24" v-if="datas['14']">
                <el-col class="main-htitle" >
                    <span class="main-title">运维服务</span>
                </el-col>
            </el-row>
            <el-row type="flex"  style="flex-wrap: wrap">
                <el-col :span="6" class="row-bg"  v-for="(item,index) in datas['14']" :key="index">
                    <div class="grid-content bg-purple border"  @click="jump('/detail',item.id)">
                        <product-item :img="item.proImage" :product-name="item.proName" :price="item.proPrice"/>
                    </div>
                </el-col>
            </el-row>

        </div>
    </div>
</template>

<script>
    // import top from "../layout/top";
    import productItem from '../../components/productItem'
    export default {
        name: "index",
        data() {
            return {
                keyWords: "",
                results: [],
                datas:{},
            };
        },

        components: {
            productItem,
            // top
        },
        created () {
            this.$emit('clear','')
            this.init();
        },
        methods: {
            //  获取数据
            init(){
                this.$axios.post('/api/product/getHomeList').then(ret => {
                    // console.log(ret.data.code)
                    if (ret.data.code === 200){
                        this.datas=ret.data.data
                    }else{
                        this.$message({
                            message:ret.data.msg
                        })
                    }
                })
            },

            //  点击跳转商品详情
            jump(path,id){
                this.$router.push({path: path, query: {"id":id}})
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

<style scoped>
    .main{
        width: 1200px;
        flex-direction: column;
        justify-content: center;
        display: flex;
        margin: 0 auto;
        padding-bottom: 100px;

    }

    .mtt{
        margin-top: 5px;
        text-indent: 10px;
        overflow: hidden;
    }
    /* title */
    .main-htitle{
        width: 100%;
        flex-direction: row;
        line-height: 40px;
        border-bottom:1px solid #CCCCCC;
        font-size: 18px;
        color: #4F4F4F;
        font-family: "SourceHanSansCN-Regular";
        text-indent: 2px;
    }

    /* 产品 */
    .product-name{
        font-size: 16px;
        line-height: 24px;
        overflow: hidden;
        text-indent: 10px;
    }
    .product-tag{
        font-size: 16px;
        line-height: 12px;
        background: #ECECEC ;
        padding: 0 5px;
        margin-left: 5px;
        border-radius: 4px
    }
    .product-price1{
        font-size: 12px;
        line-height: 18px;
        color: #FF6700

    }
    .product-price{
        font-size: 22px;
        line-height: 30px;
        color: #FF6700

    }
    .border:hover{
        box-shadow: 0 0 4px 3px rgba(0,0,0,0.13);
    }
    .el-col-6{
        width: 24%;
        text-align: center;
        margin-bottom: 10px;
        margin-top: 10px;
        margin-left: 10px;
        background-color: white;
        padding-bottom: 10px;
    }

</style>
