<template>
    <div>
        <a-menu @click="handleClick" style="width: 100%" :defaultSelectedKeys="['1']" :openKeys.sync="openKeys"
            mode="inline">
            <a-sub-menu key="sub1" @titleClick="titleClick">
                <span slot="title">
                    <a-icon type="mail" /><span>Navigation One</span></span>
                <a-menu-item-group key="g1">
                    <template slot="title">
                        <a-icon type="qq" /><span>Item 1</span></template>
                    <a-menu-item key="1">Option 1</a-menu-item>
                    <a-menu-item key="2">Option 2</a-menu-item>
                </a-menu-item-group>
                <a-menu-item-group key="g2" title="Item 2">
                    <a-menu-item key="3">Option 3</a-menu-item>
                    <a-menu-item key="4">Option 4</a-menu-item>
                </a-menu-item-group>
                <a-menu-item-group key="g3" title="Item 2">
                    <a-menu-item key="5">Option 3</a-menu-item>
                    <a-menu-item key="6">Option 4</a-menu-item>
                </a-menu-item-group>
                <a-menu-item-group key="g4" title="Item 2">
                    <a-menu-item key="7">Option 3</a-menu-item>
                    <a-menu-item key="8">Option 4</a-menu-item>
                </a-menu-item-group>
                <a-menu-item-group key="g5" title="Item 2">
                    <a-menu-item key="9">Option 3</a-menu-item>
                    <a-menu-item key="10">Option 4</a-menu-item>
                </a-menu-item-group>
                <a-menu-item-group key="g6" title="Item 2">
                    <a-menu-item key="11">Option 3</a-menu-item>
                    <a-menu-item key="12">Option 4</a-menu-item>
                </a-menu-item-group>
                <a-menu-item-group key="g7" title="Item 2">
                    <a-menu-item key="13">Option 3</a-menu-item>
                    <a-menu-item key="14">Option 4</a-menu-item>
                </a-menu-item-group>
                <a-menu-item-group key="g8" title="Item 2">
                    <a-menu-item key="15">Option 3</a-menu-item>
                    <a-menu-item key="16">Option 4</a-menu-item>
                </a-menu-item-group>

            </a-sub-menu>
        </a-menu>

    </div>
</template>
<script>
    export default {
        name: 'leftNav',
        data() {
            return {
                current: ['mail'],
                openKeys: ['sub1'],
            }
        },
        methods: {
            handleClick(e) {
                console.log('click', e)
            },
            titleClick(e) {
                console.log('titleClick', e)
            },
        },
        watch: {
            openKeys(val) {
                console.log('openKeys', val)
            },
        },

    }
</script>

<style scope lang="less">

</style>