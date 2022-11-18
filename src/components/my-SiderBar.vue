<template>
  <div class="sider-container" :class="{ 'sider-container-width': width }">
    <div class="logo"  @click="change">
      <s-svg icon="icon-fenlei2" size="large" class="active"></s-svg>
    </div>
    <siderBarItem :routeMate="mate" :showLink="width"></siderBarItem>
  </div>
</template>

<script>
import siderBarItem from './siderBar-item.vue'
export default {
  name: 'MySiderBar',
  components: {
    siderBarItem
  },
  data () {
    return {
      width: false,
      mate: []
    }
  },
  methods: {
    change () {
      this.width = !this.width
    }
  },
  created () {
    // 筛选数据，将有效路由从路由表中筛选出来
    const routes = (this.$router.options.routes).filter(item => item.mate)
    routes.forEach((route) => {
      this.mate.push(route.mate)
    })
  }
}
</script>

<style scoped lang="less">
// 控制侧导航
.sider-container {
  width: 200px;
  padding-top: 40px;
  height: 100%;
  background-color: #333;
  transition: width 0.7s;
  // display: flex;
  // flex-direction: column;
  // justify-content: start;
  position: relative;
  .logo {
    width: 100%;
    height: 40px;
    border-radius: 20px;
    position: absolute;
    top: 0;
    cursor: pointer;
    line-height: 40px;
    text-align: center;
  }
}
//修改宽度类
.sider-container-width {
  width: 50px;
}
</style>
