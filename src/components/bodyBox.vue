<template>
    <div class="bodybox">
        <!-- 左 -->
        <leftNav class="left" />
        <!-- 右 -->
        <rightDetail/>
    </div>
</template>
  
<script>
import leftNav from './leftNav.vue'
import rightDetail from './rightDetail.vue'
export default {
    name: 'bodyBox',
    components: { leftNav, rightDetail}
}
</script>
  
<style scoped>
.bodybox {
    margin: 10px 100px;
    display: flex;
}
</style>