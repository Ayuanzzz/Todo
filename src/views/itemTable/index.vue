<script setup>
import { ref, onMounted } from 'vue'
import { Check, Delete } from '@element-plus/icons-vue'
import { getPlanData, getDoingData, getDoneData } from '@/api/index.js'

const planData = ref([])

const doingData = ref([])

const doneData = ref([])

// 删除数据
const deletePlan = (index) => {
    planData.value.splice(index, 1)
}
const deleteDoing = (index) => {
    doingData.value.splice(index, 1)
}
const deleteDone = (index) => {
    doneData.value.splice(index, 1)
}

//更改数据
const changePlan = (index) => {
    let tmpData = planData.value[index]
    planData.value.splice(index, 1)
    doingData.value.push(tmpData)
}
const changeDoing = (index) => {
    let tmpData = doingData.value[index]
    doingData.value.splice(index, 1)
    doneData.value.push(tmpData)
}

//获取数据
function getData() {
    getPlanData().then(res => {
        planData.value = res.data.data
    })
    getDoingData().then(res => {
        doingData.value = res.data.data
    })
    getDoneData().then(res => {
        doneData.value = res.data.data
    })
}

onMounted(() => {
    getData()
})

</script>

<template>
    <el-row :gutter="20">
        <el-col :span="8">
            <div class="grid-content">
                <h1>未完成</h1>
                <el-table :data="planData" style="width: 100%">
                    <el-table-column label="名称" prop="name" style="width: 90%">
                    </el-table-column>
                    <el-table-column fixed="right" label="编辑" width="100">
                        <template #default="scope">
                            <el-button type="success" :icon="Check" circle @click.prevent="changePlan(scope.$index)" />
                            <el-button type="danger" :icon="Delete" circle @click.prevent="deletePlan(scope.$index)" />
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </el-col>
        <el-col :span="8">
            <div class="grid-content">
                <h1>进行中</h1>
                <el-table :data="doingData" style="width: 100%">
                    <el-table-column label="名称" prop="name" style="width: 90%">
                    </el-table-column>
                    <el-table-column fixed="right" label="编辑" width="100">
                        <template #default="scope">
                            <el-button type="success" :icon="Check" circle @click.prevent="changeDoing(scope.$index)" />
                            <el-button type="danger" :icon="Delete" circle @click.prevent="deleteDoing(scope.$index)" />
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </el-col>
        <el-col :span="8">
            <div class="grid-content">
                <h1>已完成</h1>
                <el-table :data="doneData" style="width: 100%">
                    <el-table-column label="名称" prop="name" style="width: 90%">
                    </el-table-column>
                    <el-table-column fixed="right" label="编辑" width="100">
                        <template #default="scope">
                            <el-button type="success" :icon="Check" circle @click.prevent="deleteDone(scope.$index)" />
                            <el-button type="danger" :icon="Delete" circle @click.prevent="deleteDone(scope.$index)" />
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </el-col>
    </el-row>
</template>

<style lang="scss" scoped>
.el-row {
    // margin: 20px 5px 0 5px;
    height: 100vh;
}

.el-col {
    border-right: 1px solid rgb(0, 0, 0, 0.4);
    height: 100%;
}

.el-col:last-child {
    border-right: 0;
}

// .editBtn {
//   display: inline !impotant;
// }
</style>




