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
        <router-view @clear="clearSearchValue" :data="ss" ref="search"/>

    </div>

</template>

<script>
    export default {
        name: "index1",
        props:['mykeyWords'],
        data(){
            return{
                keyWords:'',
                type:"0",
                ss:""
            }
        },
        created(){
            this.keyWords = this.$route.query.cont;
            //
        },
        methods:{
            //  点击搜索按钮
            clearSearchValue(){
                this.keyWords = ''
            },


            search(){
                // console.log(this.keyWords)
                if(!this.keyWords){
                    this.$message({message:"请输入搜索的内容"})
                    return false
                }
                this.$router.push({path: '/index/searchRult', query: {"cont":this.keyWords}})
                this.$refs.search.init();
                this.$emit('headCallBack',this.keyWords);
                // if(this.$route.query.cont){
                //     // this.$router.push({path: '/index1/searchRult', query: {"cont":this.keyWords}})
                //     this.$axios.get('/api/product/fuzzyQuery?proInfo='+this.keyWords).then(ret => {
                //         if (ret.data.code === 200){
                //             this.datas=ret.data.data
                //             this.ss = ret.data.data
                //             this.$router.push({path: '/index/searchRult', query: {"cont":this.keyWords}})
                //         }else{
                //             this.$message({
                //                 message:ret.data.msg
                //             })
                //         }
                //     })
                // }else {
                //     this.$router.push({path: '/index/searchRult', query: {"cont":this.keyWords}})
                // }
            },
            //  点击筛选
            dressing(id){
                this.type=id;
            }
        }
    }
</script>

<style scoped>
    /*搜索框的样式*/
    button, input{ outline:none; border:0; }
    .search{
        background-color: white;
        margin-left: 25%;
        padding-top: 10px;
    }
    .sear{
        width: 400px;
        height: 30px;
        border: 2px solid #2FA5E2  ;
        flex-direction: row;
        margin-top: 15px;
        border-radius:24.5px;
        border-right: 0;
    }
    .btn{
        height: 28px;
        line-height:28px;
        background: linear-gradient(to right, #2FA5E2  , #348FEB);

        background-color: #2FA5E2 ;
        border: 0;
        border-top-right-radius: 25px;
        border-bottom-right-radius: 25px;
        color: #ffff;
    }
    .search-input{
        width: 308px;
        height: 20px;
        line-height: 20px;
        border: none;
        padding-left: 20px;
    }

    .search-button{
        display: flex;

    }
    .product-tag1{
        font-size: 12px;
        line-height: 12px;
        padding: 2px 8px;
        margin-left: 5px;
        border: 1px solid #6C6C6C;
        border-radius: 4px
    }
    .bgflg{
        background: #2FA5E2;
        border:1px solid #2FA5E2;
        color: white;
    }
</style>
