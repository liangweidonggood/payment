<template>
    <div>
        <div><img class="imgs" :src="img"></div>
        <div style="padding: 10px 0;"><span>{{productName}}</span></div>
        <div class="price"><span>￥{{price}}</span></div>
    </div>
</template>

<script>
    export default {
        props:['img','price','productName'],
        name: "productItem"
    }
</script>

<style scoped>
    .imgs{
        width: 100%;
        height: 160px;
        background: #8F8F8F ;

    }
    .price{
        color: red;
        padding-bottom: 10px;
        /*font-weight: bold;*/
    }


</style>
