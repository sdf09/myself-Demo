<template>
  <router-link to="/q">
    <div v-for="(item, index) in $props.routeMate" :key="index">
      <div class="container">
        <s-svg :icon="item.icon"></s-svg>
        <Transition name="slide-fade">
          <span v-if="!$props.showLink"> {{ item.title }} </span>
        </Transition>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'siderBarItem',
  props: {
    showLink: {
      type: Boolean,
      default: false,
      required: true
    },
    routeMate: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
  color: #fff;
  overflow: hidden;
  cursor: pointer;
  > span {
    margin-left: 15px;
  }
  &:hover {
    background-color: rgb(120, 120, 120);
  }
}
</style>
