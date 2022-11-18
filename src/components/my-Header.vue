<template>
  <div class="container">
    <router-link to="/login" class="container-item">登录</router-link>
  </div>
</template>

<script>
export default {
  name: 'MyHeader'
}
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 50px;
  background-color: #333;
  .container-item {
    width: 60px;
    height: 40px;
    text-align: center;
    float: right;
    color: #fff;
    line-height: 40px;
    cursor: pointer;
    border: 1px solid rgb(153, 19, 19);
    margin: 5px 0;
    border-radius: 4px;
  }
}
</style>
