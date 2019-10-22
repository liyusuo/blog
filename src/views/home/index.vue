<template>
    <a-row>
        <a-col :xs="0" :sm="0" :md="6" :lg="5" :xl="5" :xxl="4" class="home_menu">
            <LeftNav></LeftNav>
        </a-col>
        <a-col :xs="24" :sm="24" :md="18" :lg="19" :xl="19" :xxl="20" class="home_main">
            <div class="content">
                <textarea name="" id="t" cols="30" rows="10" v-model="htmlText">

                </textarea>
                <MarkDown :htmlText= 'htmlText' ></MarkDown>
            </div>
        </a-col>
    </a-row>
</template>

<script>
    import LeftNav from "./leftNav/leftNav.vue"
    import MarkDown from "../../components/markDown/index.js"
    export default {
        name: 'home',
        components: {
            LeftNav,
            MarkDown
        },
        data() {
            return {
                htmlText:"## liyusuo 1"
            }
        },
        watch: {
           
        },
        mounted() {
          
           console.log(this.htmlText)
        },
        methods: {
           
        }



    }
</script>

<style lang="less" scoped>
    .home_menu {
        background-color: antiquewhite;
        height: 100vh;
        overflow-y: scroll;
      
    }

    .home_main {
        background-color: aquamarine;
        overflow: hidden;
        min-height: 500px;
        padding: 0 170px 144px 64px;
        
        /* position: fixed;
        right: 0;
        bottom: 0; */
       
    }
    .content{
         
        }
</style>