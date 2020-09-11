<template>
    <div class="bg">
        <top/>
        <router-view/>
        <bottom/>
    </div>
</template>

<script>
    import top from './top'
    import bottom from './bottom'
    export default {
        components:{
            top,
            bottom
        },
        name: "index",
    }
</script>

<style scoped>

</style>
