<template>
  <div class="list_box">
    <ul class="list_box_ul">
      <li  v-for="item in list">
        <div>
          <router-link :to="path +'/'+ item.id">
            <p>{{item.title}}</p>
          </router-link>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import api from "../../../api/demo.js";
export default {
  name: "List",
  data() {
    return {
      path: null,
      list: null
    };
  },
  beforeRouteEnter(to, from, next) {
    api.getRead(to.name).then(res => {
      console.log(res)
      next(vm=>{
        vm.list = res.data;
      });
    });
  },
  mounted() {
    console.log("list");
    console.log(this.$route);
    this.path = this.$route.path;
  },
  methods: {}
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
    margin-bottom: 10px;
  }
}
</style>