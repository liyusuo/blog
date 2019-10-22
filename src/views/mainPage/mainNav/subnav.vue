<template>
    <div class="nav">
        <a-menu  mode="horizontal" id="header_right">
            <a-menu-item key="mail">
                <a-icon type="book" />文章
            </a-menu-item>
            <a-menu-item key="app" >
                    <a-icon type="sound" />留言中心
            </a-menu-item>
            <a-menu-item key="aboutme" >
                    <a-icon type="user" />关于本站
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
    .nav{
        height: 63px;
        float: right;
        padding-right: 30px
    }
#header_right{
    border: 0;
    font-size: 14px;
    height: 63px;
}
.ant-menu-item{
    height: 63px;
    line-height: 63px;
}
.ant-menu-submenu{
    height: 63px;
    line-height: 63px;
}
</style>