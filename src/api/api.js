// 导入封装的 wxRequest
import wxRequest from '../utils/wxRequest'

// 首页轮播图接口
export const getHomeSwiper = params => {
    return wxRequest('home/swiperdata', params).then(res => {
        return res.data
    })
}

// 首页导航接口
export const getHomeNav = params => {
    return wxRequest('home/catitems', params).then(res => {
        return res.data
    })
}


// 首页楼层接口
export const getHomFloor = params => {
    return wxRequest('home/floordata', params).then(res => {
        return res.data
    })
}

// 商品详情页
export const getGoodsDetail = params => {
    return wxRequest('goods/detail', params).then(res => {
        return res.data
    })
}
