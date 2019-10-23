<template>
    <div>
        <Nav></Nav>
        <div class="page-wrapper">
            <Home></Home>
        </div>
    </div>
</template>
<script>
    import Nav from './mainNav/nav.vue'
    import Home from '../home/index.vue'
    export default {
        name: 'mainPage',
        components: {
            Nav,
            Home
        },
        mounted() {
            // window.addEventListener("scroll", this.getScrollHeight);
        },
        methods: {
           
        },
    }
</script>
<style scoped lang="less">
    .page-wrapper {
        padding-top: 40px;
        position: relative;
        overflow: hidden
    }
</style>