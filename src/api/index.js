import axios from "axios";

axios.defaults.timeout = 50000

axios.interceptors.request.use(config => {
    return config
}, error => {
    return Promise.error(error)
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