// 导入封装的 wxRequest
import wxRequest from '../utils/wxRequest'

// 首页轮播图接口
export const getHomeSwiper = params => {
    return wxRequest('home/swiperdata', params).then(res => {
        return res.data
    })
}
