<template>
  <div class="rightDetail">
    <div class="topLogin">
        <div class="inner">
            <button><router-link to="/login">退出登录</router-link></button>
            <div class="usePicture">
                <img src="~@/assets/itcast.jpeg" alt="">
            </div>
            <span class="user">用户：1234567</span>
        </div>
    </div>
    <div class="bxgNews">
        <h3>博学谷新闻</h3>
        <hr/>
        <div class="manyNews">
            <manyNews v-for="i in 10" :key="i"/>
        </div>
        <!-- news -->
    </div>
  </div>
</template>

<script>
import manyNews from './manyNews.vue'
export default {
name:"rightDetail",
components:{manyNews}
}
</script>

<style scoped>
.rightDetail {
    width: 365px;
    margin-left: 15px;
}
.topLogin {
    width: 100%;
    height: 160px;
    background-color: #f4f5f6;
    padding: 15px 60px 14px 16px;
    margin-bottom: 15px;
}
.inner {
background-color: #fff;
width: 100%;
height: 100%;
position: relative;
padding: 20px;
}
.inner button{
    position: absolute;
    right: 20px;
    top:10px;
    border: none;
    background-color: #fff;
    color: #666;
    font-weight: 800;
}
.usePicture{
    width: 70px;
    height: 70px;
    margin: auto;
    border-radius: 50%;
    background-color: pink;
}
.usePicture img {
    width: 100%;
}
.user {
    display: flex;
    justify-content: center;
    margin-top: 8px;
    text-align: center;
    font-size: 12px;
}
.bxgNews {
    border-top: 5px solid blue;
    width: 100%;
    padding: 15px;
    background-color: #f4f5f6;

}
</style>