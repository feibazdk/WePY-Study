import wepy from 'wepy'
// 导入基准 URL
import appConfig from '../utils/appConfig'

// 封装 wxRequest
const wxRequest = (url, params = {}) => {
    return wepy.request({
        // 请求地址
        url: appConfig.HTTP_BAST_URL + url,
        // 请求参数
        data: params.data || {},
        // 请求方法
        method: params.method || "GET",
        // 返回的数据格式
        dataType: params.dataType || 'json',
        // 设置请求头
        header: params.header || { "Content-type": "application/json" }
    })
}


// 导出封装的方法
export default wxRequest