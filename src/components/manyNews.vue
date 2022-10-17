<template>
    <div class="manyNews">
        <div class="newsPicture"></div>
        <p>123qeqeqeweqeqessdsadasdsaeqqeqe1</p>
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