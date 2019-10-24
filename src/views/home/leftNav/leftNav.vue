<template>
  <div>
    <a-menu
      @click="handleClick"
      style="width: 100%;height: 100vh"
      :defaultSelectedKeys="['1']"
      :openKeys.sync="openKeys"
      mode="inline"
    >
     
        
      <a-sub-menu key="sub1">
        <span slot="title"><a-icon type="setting" /><span>前端</span></span>
        <a-menu-item key="hot"><router-link to="/read/hot" @click="">hot <a-icon type="fire" theme="twoTone" twoToneColor="orange" /></router-link> </a-menu-item>
        <a-menu-item key="js"><router-link to="/read/js"> javascript </router-link></a-menu-item>
        <a-menu-item key="3">vue</a-menu-item>
        <a-menu-item key="4">react</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub4">
        <span slot="title"><a-icon type="setting" /><span>node</span></span>
        <a-menu-item key="9">Option 9</a-menu-item>
        <a-menu-item key="10">Option 10</a-menu-item>
        <a-menu-item key="11">Option 11</a-menu-item>
        <a-menu-item key="12">Option 12</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>
<script>
  import api from '../../../api/demo.js'
  export default {
    name:'leftNav',
    data() {
      return {
        current: ['mail'],
        openKeys: ['sub1'],
      };
    },
    methods: {
      handleClick(e) {
        console.log(e)
        let url = '/'+e.key
        api.getHot(url).then(res=>{
          console.log(res)
        })
      },
      titleClick(e) {
        console.log('titleClick', e);
      },
    },
    watch: {
      openKeys(val) {
        console.log('openKeys', val);
      },
    },
  };
</script>
<style lang="less">
    /* .ant-menu{
        height: 100vh;
    } */
    .ant-menu-submenu{
        height: auto;
    }
</style>