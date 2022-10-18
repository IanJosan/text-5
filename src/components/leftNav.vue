<template>
 <div class="leftNav">
    <div class="bxgLogo"><a href="javascript:;"><img src="~@/assets/bxg.png" alt=""></a></div>
  <el-tabs tab-position="left">
    <el-tab-pane :label="item.name" v-for="item in nameList" :key="item.id">
        <middleContent :list="item"/>
    </el-tab-pane>
  </el-tabs>
 </div>
</template>
<script>
import middleContent from './middleContent.vue'
  export default {
    name:'leftNav',
    components:{middleContent},
    data() {
      return {
        nameList:[{
            name:'头条',
            id:'1',
            search:'top'
        },{
            name:'社会',
            id:'2',
            search:'shehui'
        },{
            name:'国内',
            id:'3',
            search:'guonei'
        },{
            name:'国际',
            id:'4',
            search:'guoji'
        },{
            name:'娱乐',
            id:'5',
            search:'yule'
        },{
            name:'体育',
            id:'6',
            search:'tiyu'
        },{
            name:'军事',
            id:'7',
            search:'junshi'
        },{
            name:'科技',
            id:'8',
            search:'keji'
        },{
            name:'财经',
            id:'9',
            search:'caijing'
        },{
            name:'时尚',
            id:'10',
            search:'shishang'
        }]
      };
    }
  };
</script>

<style scoped>
.bxgLogo a{
    display: block;
    width: 120px;
    height: 50px;
}
.bxgLogo a img {
    width: 100%;
}
.leftNav {
    width: 800px;
}
::v-deep .el-tabs--left .el-tabs__header.is-left {
    width: 120px;
}
.el-tabs__header {
    width: 120px;
}
::v-deep .el-tabs--left .el-tabs__item.is-left {
    text-align: center;
    height: 50px;
    line-height: 50px;
    font-weight: 800;
}
::v-deep .el-tabs__item.is-active {
    color: white;
    background-color: #4d6fda;
    border-radius: 5px;
}
</style>