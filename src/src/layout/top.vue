<template>
    <div class="content">
        <ul>
            <li style="margin-right: 0px"><router-link to="/index"><img src="../assets/images/logo.png" alt=""></router-link></li>
            <li style="margin-right: 10px"><img style="width:2px;height: 54px;margin: 0 20px;" src="../assets/images/biglin.png" alt=""></li>
            <li class="prodect"><router-link to="/classfity">
                <img style="width: 88px;height: 35px;" src="../assets/images/js.png" alt="">
                <span style="left: 109px;">|</span>
            </router-link></li>
            <li><router-link to="/company"> <img style="width: 120px;height: 35px;" src="../assets/images/gc.png" alt=""> <span style="left: 140px;">|</span></router-link></li>
            <li><router-link to="/index"><img style="width: 91px;height: 35px;" src="../assets/images/wc.png" alt=""> <span style="left: 109px;">|</span></router-link></li>
            <li><router-link to="/index"><img style="width: 91px;height: 35px;" src="../assets/images/gdzb.png" alt=""> <span style="left: 110px;">|</span></router-link></li>
            <li><router-link to="/index"><img style="width: 91px;height: 35px;" src="../assets/images/tsg.png" alt=""> <span style="left: 110px;">|</span></router-link></li>
            <li style="margin-right: 0;"><router-link to="/confirming"><img style="width: 89px;height: 35px;" src="../assets/images/sj.png" alt=""> </router-link></li>
        </ul>
        <div>
            <img class="wx" src="../assets/images/wx.jpg" alt="">
            <img class="log" src="../assets/images/log.png" alt="">
        </div>
    </div>
</template>

<script>
    export default {

        computed:{

        },
        data(){
            return{

            }
        },
        created () {

        },
        methods:{

        }
    }
</script>

<style scoped>
    @import "../style/reset.css";
    .content{
        width: 100%;
        font-family: '黑体'!important;
        position: relative;
    }
    .wx{
        position: absolute;
        right: -50px;
        top: 105px;
        width: 37px;
        height: 37px;
    }
    .log{
        position: absolute;
        right:  -50px;
        top: 55px;
        width: 37px;
        height: 37px;
    }
    li{
        cursor:pointer;
        text-align: center;
        font-size: 16px;
        margin-right: 40px;
        position: relative;
    }
    li img{
        margin-right: 10px;
    }
    li span{
        position: absolute;
        top:0px;
        left: 10px;
    }
    .content ul{
        width: 1200px;
        margin: 0 auto;
        display: flex;
        flex-wrap: nowrap;
        padding: 0;
        padding-top: 50px;
        padding-bottom: 10px;
        border-bottom: 1px solid #000000;
    }

    .sline{
        height: 20px;
        width: 5px;
        background-color: #000;
    }
</style>
