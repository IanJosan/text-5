<template>
    <div class="bodybox">
        <!-- 左 -->
        <leftNav class="left" />
        <!-- 中 -->
        <div class="middle">
            <middleContent />
            <middleContent />
            <middleContent />
            <middleContent />
        </div>
        <!-- 右 -->
        <rightDetail/>
    </div>
</template>
  
<script>
import leftNav from './leftNav.vue'
import middleContent from './middleContent.vue'
import rightDetail from './rightDetail.vue'
export default {
    name: 'bodyBox',
    components: { leftNav, middleContent, rightDetail}
}
</script>
  
<style scoped>
.bodybox {
    margin: 10px 80px;
    display: flex;
}
.left {
}

.middle {
}
</style>