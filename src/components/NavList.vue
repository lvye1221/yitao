<template lang="html">
    <div id="goodsList">
      <ul id="goodsListUl">
        <li v-for="item in navList">
	   <a href="List.html?cat_id=">
	      {{ item.cat_name }} 
	   </a>
	</li>
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


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >


#goodsList{
    width:100%;
    height: 50px;
    background:#fb3434;
}
#goodsList ul{
    width: 1200px;
    height: 50px;
    margin:0 auto;
}
#goodsList ul li{
    float:left;
    width: 120px;
    line-height: 50px;
    text-align: center;
}
#goodsList ul li:hover{
    background:orange;
}
#goodsList ul li a{
    display: block;
    width:100%;
    height:100%;
    color:#ffffff;
}
</style>