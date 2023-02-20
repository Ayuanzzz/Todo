import Mock from 'mockjs'

// 获取 mock.Random 对象
const Random = Mock.Random
// 未完成数据
function itemData(num) {
    const list = []
    for (let i = 0; i < num; i++) {
        const obj = {
            id: i + 1,
            name: Random.csentence(5, 10),
        }
        list.push(obj)
    }
    return {
        list
    }
}

const planData = itemData(6)
const doingData = itemData(5)
const doneData = itemData(3)

// // 拦截ajax请求，配置mock的数据
// Mock.mock(`/api/getPlanData`, 'get', planData)
// Mock.mock(`/api/getdoingData`, 'get', doingData)
// Mock.mock(`/api/getdoneData`, 'get', doneData)
export default [
    {
        url: '/api/getPlanData',
        method: 'get',
        response: () => {
            return {
                code: 200,
                data: planData
            }
        },
    },
    {
        url: '/api/getDoingData',
        method: 'get',
        response: () => {
            return {
                code: 200,
                data: doingData
            }
        },
    },
    {
        url: '/api/getDoneData',
        method: 'get',
        response: () => {
            return {
                code: 200,
                data: doneData
            }
        },
    }
]