<template>
  <div class="container">
    <div class="left">
      <MySiderBar></MySiderBar>
    </div>
    <div class="right">
      123
      <!-- <router-view></router-view> -->
    </div>
  </div>
</template>

<script>
import MySiderBar from '@/components/my-SiderBar'
export default {
  components: {
    MySiderBar
  }
}
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: calc(100vh - 50px);
  background-color: pink;
  display: flex;
  .right {
    flex: 1;
  }
}
</style>
