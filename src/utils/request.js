/*
 * @Author: xpxxy
 * @Description: package the interface
 */

import axios from 'axios'

const service = axios.create({
    baseURL: 'https://api.imooc-web.lgdsunday.club/api',
    timeout: 5000
});

service.interceptors.request.use(
    (config) => {
        config.headers.icode = 'hellosunday'
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)
service.interceptors.response.use((response) => {
    const { success, message, data } = response.data
    //   要根据success的成功与否决定下面的操作
    if (success) {
        return data
    } else {
        return Promise.reject(new Error(message))
    }
})

export default service
