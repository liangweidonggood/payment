<template>
    <div>
        <div><img class="imgs" :src="img"></div>
        <div class="prodtitle" ><p>{{productName}}</p></div>
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
        height: 189px;
        background: #8F8F8F ;

    }
    .price{
        color: red;
        padding-bottom: 10px;
        /*font-weight: bold;*/
    }
    .prodtitle{
        /*padding: 8px 0;*/
        height: 45px;

    }
    .prodtitle>p{
        margin: 0;
        padding: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

</style>
