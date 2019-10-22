<template>
    <header>
        <a-row>
            <a-col :xs="24" :sm="24" :md="6" :lg="5" :xl="5" :xxl="4" class="header_left">Ysuo</a-col>
            <a-col :xs="0" :sm="0" :md="18" :lg="19" :xl="19" :xxl="20" class="header_right">
                <a-row type="flex" justify="space-around" align="middle">
                    <a-col :xs="0" :sm="0" :md="0" :lg="8" :xl="8" :xxl="8">
                        <div>搜索</div>
                    </a-col>
                    <a-col :xs="24" :sm="24" :md="24" :lg="16" :xl="16" :xxl="16">
                        <SubNav></SubNav>
                    </a-col>
                </a-row>
            </a-col>
        </a-row>
    </header>
</template>

<script>
    import SubNav from './subnav.vue'
    export default {
        name: 'myNav',
        components: {
            SubNav,
        }

    }
</script>

<style scope lang="less">
    header {
        background: #fff;
        box-shadow: 0 2px 8px #f0f1f2;
        position: relative;
        z-index: 10;
        max-width: 100%;
        height: 64px;
    }

    .header_left {
        text-align: center;
        line-height: 63px;
        font-size: 24px;
        font-weight: 700;
    }

    .header_right {
        height: 63px;
        display: flex;
        justify-content: flex-start;
    }
</style>