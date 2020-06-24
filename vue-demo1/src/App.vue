<template>
  <div :class="{'page-other': this.$store.state.count ==0 }" id="app">
    <!-- <rightIndex>右边</rightIndex> -->
    <Top></Top>
    <!-- 5.通过路由标签将页面挂载 -->
    <router-view></router-view>

  </div>
</template>
<script>
import Top from './componerts/Top/index.vue'
// import List from './componerts/List/index.vue'
// import rightIndex from './componerts/Top/rightIndex.vue'
// import Right from './componerts/Right/index.vue'
// 导出vue实例所需的对象
export default {
  components: {
    Top: Top,

  }
}
</script>

<style>
    .content {
      position: fixed;
      top: 60px;
      bottom: 0;
      left: 0;
      right: 0;
      background: black;
    }
</style>
