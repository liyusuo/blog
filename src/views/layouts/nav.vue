<template>
    <header>
        <a-row>
            <a-col :xs="24" :sm="24" :md="6" :lg="5" :xl="5" :xxl="4" class="header_left">Ysuo
                <div class="logo_shu"></div>
            </a-col>
            <a-col :xs="0" :sm="0" :md="18" :lg="19" :xl="19" :xxl="20" class="header_right">
                <a-row type="flex" justify="space-around" align="middle">
                    <a-col :xs="0" :sm="0" :md="0" :lg="8" :xl="8" :xxl="8">
                        <div class="search">
                            <a-input placeholder="搜索" />
                        </div>
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
    import SubNav from "./subnav.vue";
    export default {
        name: "myNav",
        components: {
            SubNav
        }
    };
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

        .logo_shu {
            height: 20px;
            border-right: 1px solid #ebedf0;
            position: absolute;
            right: 0;
            top: 50%;
            margin-top: -10px;
        }
    }

    .header_right {
        height: 63px;
        display: flex;
        justify-content: flex-start;

        .search {
            margin-left: 20px;
        }
    }
</style>