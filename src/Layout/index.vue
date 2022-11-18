<template>
  <div>
    <!-- 顶部 -->
    <MyHeader></MyHeader>
    <!-- 内容 -->
    <MyContent></MyContent>
  </div>
</template>

<script>
import MyHeader from '@/components/my-Header.vue'
import MyContent from '@/components/my-Content.vue'
export default {
  name: 'LayoutIndex',
  components: { MyHeader, MyContent }
}
</script>

<style></style>
