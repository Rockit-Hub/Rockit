<template>
    <div>
        <ul>
          <li :key="item" v-for="item in list">
            <router-link :to="{path: '/detail',qurey: {id: item}}">{{item}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      list: [1, 2, 3, 4]
    }
  }
}
</script>