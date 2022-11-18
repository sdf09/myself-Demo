<script>
export default {
  name: 's-button',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    span: {
      type: Number,
      default: 3
    }
  },
  data () {
    return {
      width: +this.$props.span * 50 + 'px'
    }
  },
  render (h) {
    const neirong = this.$slots.default[0].text
    console.log(neirong)
    return h('button', {
      class: this.$props.type,
      style: {
        // 设置按钮的宽度
        '--width': this.width
      },
      domProps: { innerHTML: neirong }
    })
  }
}
</script>

<style lang="less" scoped>
button {
  border: none;
  width: 120px;
  width: var(--width);
  height: 44px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  color: #606266;
  transition: all 0.3s;
}
.default {
  background-color: #fff;
  border: 1px #c3c3c4 solid;
  // background-color: #686a80;

  &:hover {
    background-color: #ecf5ff;
    color: @button-bgc;
    border: 1px #68b2ff solid;
  }
}
</style>
