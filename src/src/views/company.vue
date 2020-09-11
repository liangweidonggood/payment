<template>
    <div  class="comay">
        <div>
            <img class="pic" src="../assets/images/gczs.png" alt="">
        </div>
        <div class="prodec">
            <img src="../assets/images/zhuzi.jpg" alt="">
            <img src="../assets/images/zhuzi.jpg" alt="">
            <img src="../assets/images/zhuzi.jpg" alt="">
            <img src="../assets/images/zhuzi.jpg" alt="">
            <img src="../assets/images/zhuzi.jpg" alt="">
            <img src="../assets/images/zhuzi.jpg" alt="">
            <img src="../assets/images/zhuzi.jpg" alt="">
            <img src="../assets/images/zhuzi.jpg" alt="">
            <img src="../assets/images/zhuzi.jpg" alt="">
            <img src="../assets/images/zhuzi.jpg" alt="">

        </div>
    </div>
</template>

<script>

    export default {
        name: "index",
        data() {
            return {

            };
        },
        created() {

        },

        methods: {

        }
    };
</script>

<style >
    .comay{
        /*overflow-x: auto;*/
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
    }
    .prodec img{
        margin-left: 20px;
    }

</style>
