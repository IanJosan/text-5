<template>
    <div class="middleContent">
        <div class="newsPicture">
        </div>
        <div class="detail">
            <h3>新闻标题</h3>
            <div class="more">
                <p>新闻出处</p>
                <p>时间</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'middleContent'
}
</script>

<style scoped>
.middleContent {
    width: 666px;
    height: 100px;
    border-bottom: 1px solid #666;
    display: flex;
    margin-bottom:10px ;
}

.newsPicture {
    width: 161px;
    height: 89px;
    background-color: pink;
}
.detail {
    padding: 5px 5px;
}
.detail h3 {
    height: 70px;
    font-size: 16px;
}
.more {
    font-size: 14px;
    color: #666;
    height: 15px;
    width: 490px;
    display: flex;
    justify-content: space-between;
}
</style>