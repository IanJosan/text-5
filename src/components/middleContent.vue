<template>
    <div class="middleBox">
        <div class="middleContent" v-for="item in newsList" :key="item.uniquekey">
            <div class="newsPicture">
                <a :href="item.url">
                    <img :src="item.thumbnail_pic_s
                " alt="">
                </a>
            </div>
            <div class="detail">
                <a :href="item.url">
                    <h3>{{item.title}}</h3>
                </a>
                <div class="more">
                    <p>{{item.author_name}}</p>
                    <p>{{item.date}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getNews } from '@/api/index.js'
export default {
    name: 'middleContent',
    props: {
        list: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            newsList: []
        }
    },
    mounted() {
        this.searchNews()
    },
    methods: {
        async searchNews() {
            const data = await getNews(this.list.search)
            this.newsList.push(...data.data.result.data)
            console.log(this.newsList);
        }
    }
}
</script>

<style scoped>
.middleContent {
    width: 666px;
    height: 100px;
    border-bottom: 1px solid #666;
    display: flex;
    margin-bottom: 10px;
}

.newsPicture {
    width: 161px;
    height: 89px;
    background-color: pink;
}
.newsPicture img {
    width: 100%;
}
.detail {
    padding: 5px 5px;
    
}

.detail h3 {
    height: 70px;
    font-size: 16px;
    width: 380px;
    color: black;
}

.more {
    font-size: 14px;
    color: #666;
    height: 15px;
    width: 370px;
    display: flex;
    justify-content: space-between;
}
</style>