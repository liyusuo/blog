<template>
    <div class="page-wrapper">
        <a-row>
            <a-col :xs="0" :sm="0" :md="6" :lg="5" :xl="5" :xxl="4" ref='leftDOM'>
                <LeftNav class="left_nav_before" :class="{left_nav:leftFixed,left_nav_scroll:leftNavScrollFlag}"
                    :style="{width:leftDOM}" @mouseover="leftNavScroll" @mouseleave="leftNavScroll"></LeftNav>
            </a-col>
            <a-col :xs="24" :sm="24" :md="18" :lg="19" :xl="19" :xxl="20" class="home_main">
                <div class="content">
                    <!-- <textarea name="" id="t" cols="30" rows="10" v-model="htmlText">

                </textarea> -->
                    <MarkDown :htmlText='htmlText'></MarkDown>
                    <router-view></router-view>
                </div>
            </a-col>
        </a-row>
    </div>
</template>

<script>
    import LeftNav from "./leftNav/leftNav.vue"
    import MarkDown from "../../components/markDown/index.js"
    import List from "./list/list.vue"
    import api from "../../api/demo.js"
    export default {
        name: 'home',
        components: {
            LeftNav,
            MarkDown,
            List
        },
        data() {
            return {
                htmlText: "## liyusuo  \n- 1",
                leftDOM: 0,
                leftFixed: false,
                leftNavScrollFlag: false,
            }
        },
        watch: {

        },
        mounted() {
            api.getDate().then(res => {
                this.htmlText = res.data
            })
            this.leftDOM = this.$refs.leftDOM.$el.clientWidth + 'px'
            window.addEventListener("scroll", this.getScrollHeight);
            window.onresize = () => {
                this.leftDOM = this.$refs.leftDOM.$el.clientWidth + 'px'
            }
        },
        methods: {
            getScrollHeight() {
                if ((document.documentElement.scrollTop || document.body.scrollTop) > 104) {
                    this.leftFixed = true
                } else {
                    this.leftFixed = false
                }
            },
            leftNavScroll() {
                console.log("111")
                this.leftNavScrollFlag = !this.leftNavScrollFlag
            }
        }



    }
</script>

<style lang="less" scoped>
    .page-wrapper {
        padding-top: 40px;
        position: relative;
        overflow: hidden;

        .left_nav_before {
            height: 100vh;
        }

        .left_nav_scroll {
            overflow-y: scroll;
        }

        .left_nav {
            position: fixed;
            top: 0;
            height: 100vh;
            z-index: 100;
        }

        .home_main {
            overflow: hidden;
            min-height: 500px;
            padding: 0 170px 144px 64px;
        }
    }
</style>