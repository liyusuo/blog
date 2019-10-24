<template>
    <div class="nav">
        <a-menu mode="horizontal" id="header_right">
           
            
            <a-menu-item key="home">
                 <router-link to="/home">
                <a-icon type="home"/>首页
                </router-link>
            </a-menu-item>
            <a-menu-item key="mail">
                <router-link to="/read">
                <a-icon type="read" />文章
                </router-link>
            </a-menu-item>
            <a-menu-item key="aboutme">
                 <router-link to="/about">
                <a-icon type="user" />关于本站
                 </router-link>
            </a-menu-item>

        </a-menu>
    </div>
</template>
<script>
    export default {
        name: 'subNav',

    }
</script>

<style scope lang="less">
    .nav {
        height: 63px;
        float: right;
        padding-right: 30px;
        #header_right {
            border: 0;
            font-size: 14px;
            height: 63px;
        }
    }
    .ant-menu-item {
        height: 63px;
        line-height: 63px;
    }

    .ant-menu-submenu {
        height: 63px;
        line-height: 63px;
    }
</style>