<template lang="html">
    <div class="navList">
      <ul>
        <li v-for="item in navList">{{ item.cat_name }}</li>
      </ul>
    </div>
</template>

<script>
export default {
  computed: {
    // 计算出当前组件，返回出来的数据
    navList () {
      return this.$store.state.navList
    }
  },
  created () {
    // 在组件创建完成之后，自动调用当前存储器中的数据
    this.$store.dispatch('getNavData')
  }
}
</script>
