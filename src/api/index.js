import request from './request.js'

export const getTypeNavList = (params)=>{
    return request({
        url:'/product/getBaseCategoryList',
        method:'get'
    })
}