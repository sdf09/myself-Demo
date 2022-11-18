<script>
export default {
  name: 's-svg',
  props: {
    // 设置图标
    icon: {
      type: String,
      required: true
    },
    // 设置图标大小
    size: {
      type: String,
      default: 'default'
    }
  },
  render (h) {
    const ICON = `iconfont .active ${this.$props.icon} ${this.$props.size}`
    // style: 'color:#fff'
    return h('i', { class: ICON })
  }
}
</script>
<style lang="less" scoped>
.default {
  font-size: 20px;
}
.large {
  font-size: 25px;
}
.active {
  color: #fff;
  &:hover{
    color: #ffb302;
  }
}
</style>
