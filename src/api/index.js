import request from "@/utils/request";

export const getNews = (search) => {
    return request ({
        url:`/${search}`
    })
}
