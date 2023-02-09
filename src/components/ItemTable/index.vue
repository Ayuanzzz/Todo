<script setup>
import { ref } from 'vue'
import { Check, Delete } from '@element-plus/icons-vue'

const props = defineProps(['tableData'])
const tData = ref(props.tableData)
// 删除数据
const deleteRow = (index) => {
    tData.value.splice(index, 1)
}
</script>

<template>
    <el-table :data="tData" style="width: 100%">
        <el-table-column label="名称" prop="name" style="width: 90%">
        </el-table-column>
        <el-table-column fixed="right" label="编辑" width="100">
            <template #default="scope">
                <el-button type="success" :icon="Check" circle @click.prevent="deleteRow(scope.$index)" />
                <el-button type="danger" :icon="Delete" circle @click.prevent="deleteRow(scope.$index)" />
            </template>
        </el-table-column>
    </el-table>
</template>
