//二次封装
import axios from "axios";



//创建一个axios实例
const httpClient = axios.create({
    baseURL: '/api',
    timeout:60000
})


//请求拦截器
httpClient.interceptors.request.use(
    //成功的回调
    config => {
        //配置对象，包含headers
        return config
    },
    //失败的回调
    error => {
        return Promise.reject(error)
    }
)

//响应拦截器
httpClient.interceptors.response.use(
    //成功的回调
    response => {
        return response.data
    },
    //失败的回调
    error => {
        return Promise.reject(error)
    }
)


export default httpClient




