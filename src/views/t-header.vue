<template>
  <div class="header">
    <!-- 顶部公司组件 -->
    <headerName/>
    <!-- 主题内容部分组件 -->
    <bodyBox/>
  </div>
</template>

<script>
import headerName from '@/components/headerName.vue'
import bodyBox from '@/components/bodyBox.vue'
export default {
name:'tHeader',
components:{
    headerName,
    bodyBox
}
}
</script>

<style>

</style>