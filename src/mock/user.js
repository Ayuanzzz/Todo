import { Random } from 'mockjs'

// 获取 mock.Random 对象
// const Random = Mock.Random
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