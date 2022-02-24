import axios from 'axios'
import nProgress from 'nprogress'
import 'nprogress/nprogress.css'
const requests = axios.create({
        baseURL: '/api',
        timeout:5000
})
// 请求拦截器
axios.interceptors.request.use((config) => {
    nProgress.start()
    return config
}, (err) =>{return Promise.reject(err)})

// 响应拦截器
axios.interceptors.response.use((res)=>{
    // 成功
    nProgress.done()
    return res.data
},(err)=>{
    return Promise.reject('请求数据失败，请重试！',err)
}
)
export default requests
