<template>
    <div>
        <div style="width: 100%;background-color: white;height: 120px;">
            <el-header class="search">
                <el-row type="flex" class="row-bg">
                    <el-col :span="24" class="sear">
                        <i class="el-icon-search" style="margin-left: 15px;margin-top: 2px;"></i>
                        <input v-model="keyWords" type="text" placeholder="请输入关键字"  class="search-input" />
                        <button class="btn" @click="search">搜索</button>
                    </el-col>
                </el-row>
                <div style="margin-top: 15px;">
                </div>
                <el-row>
                    <el-col :span="24">
                        <span class="ftgren ">筛选:</span>
                        <span class="product-tag1 " :class="type==0?'bgflg':''" @click="dressing(0)">全部</span>
                        <span class="product-tag1" :class="type==1?'bgflg':''" @click="dressing(1)">标签</span>
                        <span class="product-tag1" :class="type==2?'bgflg':''" @click="dressing(2)">标签</span>
                        <span class="product-tag1" :class="type==3?'bgflg':''" @click="dressing(3)">标签</span>
                    </el-col>
                </el-row>
            </el-header>
        </div>
        <div class="main">
            <el-main style="margin: 0;padding: 0;height: auto;"  v-if="datas">
                <el-row type="flex"  style="flex-wrap: wrap">
                    <el-col :span="6" class="row-bg"  v-for="(item,index) in datas" :key="index">
                        <div class="grid-content bg-purple border"  @click="jump('/detail',item.id)">
                            <product-item :img="item.proImage" :product-name="item.proName" :price="item.proPrice"/>
                        </div>
                    </el-col>
                </el-row>

            </el-main>
        </div>
    </div>
</template>

<script>
    import productItem from '../components/productItem'
    export default {
        name: "index",
        data() {
            return {
                mykeyWords: "",
                keyWords:"",
                datas:{},
                type:""
            };
        },
     watch: {
         // mykeyWords: {
         //     handler(newName, oldName) {
         //         this.mykeyWords=newName;
         //        },
         //         deep: true,
         //        immediate: true
         //     }

         },

        components: {
            productItem,
        },
        created () {

            this.init();
        },
        methods: {

            //  获取数据
            init(){
                this.mykeyWords=this.$route.query.cont;
                this.$axios.get('/api/product/fuzzyQuery?proInfo='+this.mykeyWords).then(ret => {
                    if (ret.data.code === 200){
                        this.datas="";
                        this.datas=ret.data.data;
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
                this.$axios.get('/api/product/fuzzyQuery?proInfo='+this.keyWords).then(ret => {
                    // console.log(ret.data,26355)
                    if (ret.data.code === 200){
                        this.datas="";
                        this.datas=ret.data.data;
                    }else{
                        this.$message({
                            message:ret.data.msg
                        })
                    }
                })
            },
            //  点击筛选
            dressing(id){
                this.type=id;
            },

            //  点击跳转商品详情
            jump(path,id){
                this.$router.push({path: path, query: {"id":id}})
            },


        },

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
