<template>
    <div class="leftNav">
        <el-row class="tac">
            <el-col :span="3">
                <!-- 标题 -->
                <div class="bxg"><a href="javascript:;"><img src="~@/assets/bxg.png" alt=""></a></div>
                <el-menu :default-active="clickNum" class="el-menu-vertical-demo"
                active-text-color="#fff"
                >
                    <el-menu-item index="1" @click="choose($event)">
                        <span slot="title" >头条</span>
                    </el-menu-item>
                    <el-menu-item index="2" @click="choose($event)">
                        <span slot="title">社会</span>
                    </el-menu-item>
                    <el-menu-item index="3"  @click="choose($event)">
                        <span slot="title">国内</span>
                    </el-menu-item>
                    <el-menu-item index="4"  @click="choose($event)"> 
                        <span slot="title">国际</span>
                    </el-menu-item>
                    <el-menu-item index="5"  @click="choose($event)">
                        <span slot="title">娱乐</span>
                    </el-menu-item>
                    <el-menu-item index="6"  @click="choose($event)">
                        <span slot="title">体育</span>
                    </el-menu-item>
                    <el-menu-item index="7"  @click="choose($event)">
                        <span slot="title">军事</span>
                    </el-menu-item>
                    <el-menu-item index="8"  @click="choose($event)">
                        <span slot="title">科技</span>
                    </el-menu-item>
                    <el-menu-item index="9"  @click="choose($event)">
                        <span slot="title">财经</span>
                    </el-menu-item>
                    <el-menu-item index="10"  @click="choose($event)">
                        <span slot="title">时尚</span>
                    </el-menu-item>
                </el-menu>
            </el-col>

        </el-row>
    </div>
</template>

<script>
export default {
    name: 'leftNav',
    data() {
        return {
            clickNum: null
        }
    },
    methods: {
        choose(e) {
            this.clickNum = e.index
            console.log(this.clickNum);
        }
    }
}
</script>

<style scoped>
.leftNav{
    width: 150px;
}
.tac,.el-row {
width: 100%;
}
.el-menu-item {
    text-align: center;
    justify-content: center;
    font-weight: 800;
    width: 123px;
    height: 100%;
}
.is-active{
    background-color: #4d6fda;
    border-radius: 8px;
}
.bxg {
    width: 123px;
}
.bxg img {
    width: 100%;
}
</style>