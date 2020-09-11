<template>
    <div  class="comay indx">
        <div>
            <img class="pic" src="../assets/images/gczs.png" alt="">
        </div>
        <div class="prodec">
            <div class="piclist" v-for="(item,index) in list" @click="skip(item)">
                <div class="piclis"><img  :src="item.url" alt=""></div>
                <div class="pictitle">{{item.name}}</div>
            </div>
        </div>
        <div class="black">
            <el-pagination
                    background
                    layout="prev, pager, next"
                    @current-change="handleCurrentChange"
                    :current-page.sync="pageNum"
                    :page-size="10"
                    :total="total">
            </el-pagination>
        </div>

    </div>
</template>

<script>

    export default {
        name: "index",
        data() {
            return {
                pageNum:1,
                total:1,
                name:"",
                list:[]
            };
        },
        created() {
            this.init();
        },

        methods: {
           init(){
               var formData = new FormData();
               formData.append("name", this.name);
               formData.append("pageNum", this.pageNum);
               formData.append("pageRow", 10);
               this.$axios.post('/gem/listGem',formData).then(ret => {
                   if (ret.data.code == 100){
                      this.list=ret.data.info.list;
                      this.total = ret.data.info.totalCount;
                   }else{
                       this.$message({
                           message:ret.data.msg
                       })
                   }
               })
           },
            handleCurrentChange(val){
               this.pageNum = val;
                this.init();
            },
            skip(item){
                sessionStorage.setItem('list',"");
               sessionStorage.setItem('datas', JSON.stringify(item));
                this.$router.push({path: '/detail'})
            }
        }
    };
</script>

<style >
    .comay{
        text-align: left;
        /*margin-bottom: 100px;*/
    }

   .comay .pic{
        width: 602px;
        height: 42px;
        margin:30px 20px;
        margin-top: 60px;
        margin-right: 40px;
    }
    .prodec{
        width: 95%;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap
    }
    .piclist{
        margin-left: 20px;
        margin-bottom: 20px;
        width: 190px;

    }
    .piclis{
        border: 1px solid #000000;
        width: 190px;
        height: 142px;
        margin-bottom: 10px;
    }
    .piclis img{
        width: 100%;
        height: 100%;
    }
    .pictitle{
        text-align: center;
        margin-top: 10px;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
    }
    .el-pagination.is-background .el-pager li:not(.disabled).active{
        background-color: #767676;
    }
    .black{
        text-align: center;
        /*position: fixed;*/
        background-color: #ffffff;
        /*bottom: 30px;*/
        margin-top: 50px;
        width: 1200px;
        height: 80px;
    }
</style>
