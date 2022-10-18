<template>
    <div class="manyNews">
        <div class="newsPicture">
            <img src="~@/assets/js.jpg" alt="">
        </div>
        <p>Lorem ipsum dolor sit adipisicing elit. </p>
    </div>
</template>

<script>
export default {
    name: 'manyNews'
}
</script>

<style scoped>
.manyNews {
    width: 335px;
    height: 75px;
    padding: 5px;
    border-bottom: 1px solid #666;
    display: flex;
}

.newsPicture {
    width: 150px;
    height: 65px;
    background-color: purple;
}
.newsPicture img {
    width: 100%;
    height: 100%;
}
p {
    width: 150px;
    height:  65px;
    color: #666;
    word-break:break-all;
    text-overflow:ellipsis; 
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
    overflow:hidden;
}
</style>