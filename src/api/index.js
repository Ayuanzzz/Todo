import axios from "axios";
import { ElMessage } from 'element-plus'

axios.defaults.timeout = 50000

axios.interceptors.request.use(config => {
    return config
}, error => {
    return Promise.error(error)
})

axios.interceptors.response.use(response => {
    const res = response.data
    if (res.code !== 200) {
        ElMessage({
            message: '获取数据失败',
            type: 'error',
            duration: 3 * 1000
        })
    } else {
        return res
    }
})

function getPlanData() {
    return axios.get('/api/getPlanData')
}

function getDoingData() {
    return axios.get('/api/getdoingData')
}
function getDoneData() {
    return axios.get('/api/getdoneData')
}

export {
    getPlanData,
    getDoingData,
    getDoneData
}