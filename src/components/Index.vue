<template lang="html">
    <div class="">
      <ul>
        <li v-for="item in navList">{{item.cat_name}}</li>
      </ul>
    </div>
</template>

<script>
export default {
  computed: {
    navList () {
      return this.$store.state.navList
    }
  },
  created () {
    this.$store.dispatch('getNavData')
  }
}
</script>

<style lang="css">
</style>
