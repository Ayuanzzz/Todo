import Mock from 'mockjs'

Mock.setup({
    timeout: 300
})

// 获取 mock.Random 对象
const Random = Mock.Random
// 未完成数据
function itemData(num) {
    const arr = []
    for (let i = 0; i < num; i++) {
        const obj = {
            id: i + 1,
            name: Random.csentence(5, 10), // Random.cname() 随机生成一个常见的中文姓名
        }
        arr.push(obj)
    }
    return {
        code: 200,
        data: arr,
        total: num
    }
}

const planData = itemData(6)
const doingData = itemData(5)
const doneData = itemData(3)

// 拦截ajax请求，配置mock的数据
Mock.mock(`/api/getPlanData`, 'get', planData)
Mock.mock(`/api/getdoingData`, 'get', doingData)
Mock.mock(`/api/getdoneData`, 'get', doneData)
