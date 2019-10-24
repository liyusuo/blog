<template>
        <div>
            <Nav></Nav>
            <!-- <Home></Home> -->
            <readLayout></readLayout>

        </div>
    </template>
    <script>
        import Nav from '../layouts/nav.vue'
        import readLayout from"../layouts/readLayout.vue"
        export default {
            name: 'mainPage',
            components: {
                Nav,
                readLayout
            },
            mounted() {
               
            },
            methods: {
    
            },
        }
    </script>
    <style scoped lang="less">
        
    </style>