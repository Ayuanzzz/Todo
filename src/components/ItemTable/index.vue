<script setup>
import { Check, Delete } from '@element-plus/icons-vue'
const tableData = [{
    id: 1,
    name: 'huhuhuhu'
}, {
    id: 2,
    name: '蝴蝶飞的合法化'
}]
</script>

<template>
    <el-table :data="tableData" style="width: 100%">
        <el-table-column label="名称" prop="name" style="width: 90%">
        </el-table-column>
        <el-table-column fixed="right" label="编辑" width="100">
            <template #default>
                <el-button type="success" :icon="Check" circle />
                <el-button type="danger" :icon="Delete" circle />
            </template>
        </el-table-column>
    </el-table>
</template>
