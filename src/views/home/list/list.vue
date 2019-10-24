<template>
    <div class="list_box">
        <ul class="list_box_ul">
            <li>
                
                    <div>
                        <router-link to="path">
                        <p>浅读《JavaScript 轻量级函数式编程</p>
                        </router-link>
                    </div>
                
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  name: "List",
  mounted() {
    console.log("list");
    console.log(this.$route);
    this.path = this.$route.path
  },
  data(){
      return{
          path:null
      }
  }
};
</script>
<style lang="less" scoped>
.list_box {
  width: 100%;
}
.list_box_ul {
  width: 100%;
  li {
    max-width: 900px;
    height: 115px;
    padding: 18px 24px 18px 24px;
    background-color: aquamarine;
  }
}
</style>