<template>
  <div class="list_box">
    <!-- <ul class="list_box_ul">
      <router-link :to="path +'/'+ item.id" :key="item.id" v-for="item in list">
        <li>
          <a-row>
            <a-col :span="11"><p class="title">{{item.title}}</p></a-col>
            <a-col :span="2"></a-col>
            <a-col :span="11"><p class="title">{{item.title}}</p></a-col>
          </a-row>
          <div>
            
          </div>
        </li>
      </router-link>
    </ul> -->
    <ul class="list_box_left">
      <li v-for="item in list" ref="nowRead">
        <p class="title">{{item.title}}</p>
      </li>
    </ul>
    <ul class="list_box_center">
      <li></li>
    </ul>
    <ul class="list_box_right">
      <li  v-for="item in list" ref="nowRead">
        <p class="title">{{item.title}}</p>
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
      console.log(res);
      next(vm => {
        vm.list = res.data;
      });
    });
  },
  mounted() {
    console.log("list");
    console.log(this.$route);
    this.path = this.$route.path;
    
    window.addEventListener('scroll',this.getTop )
  },
  methods: {
    getTop(){
     
      console.log(document.documentElement.scrollTop - document.documentElement.clientHeight)
    
    }
  }
};
</script>
<style lang="less" scoped>
.list_box {
  width: 100%;
  display: flex;
  .list_box_center{
    width: 20px;
    background-color: aquamarine
  }
  // .list_box_left{
  //   text-align: right;
  // }
  .list_box_left,.list_box_right{
     flex-grow: 1;
     text-align: center;
      li {
        width: 100%;
        height: 115px;
        padding: 18px 24px 18px 24px;
        background-color: #f2f4f5;
        border-bottom: 5px solid #fff;
        color: #314659;
        .title {
          font-size: 16px;
        }
      }
  }
}
// .list_box_ul {
//   width: 100%;
 
//     li {
//       width: 100%;
//       height: 115px;
//       padding: 18px 24px 18px 24px;
//       background-color: #f2f4f5;
//       border-bottom: 5px solid #fff;
//       color: #314659;
//       .title {
//         font-size: 16px;
//       }
    
//   }
// }

</style>