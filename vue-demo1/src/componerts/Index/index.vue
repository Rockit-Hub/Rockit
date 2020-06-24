<template>

    <div class="content">
      <Left>左边</Left>
      <Right></Right>
    </div>

</template>
<script>
import Left from '../Left/leftIndex.vue'
import Right from '../Right/index.vue'

// 导出vue实例所需的对象
export default {
  components: {
    Left: Left,
    // rightIndex,
    Right,
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
