<script setup>
import { ref } from 'vue'
import { Check, Delete } from '@element-plus/icons-vue'
import ItemTable from "./components/ItemTable/index.vue"

</script>

<template>
  <el-row :gutter="20">
    <el-col :span="8">
      <div class="grid-content">
        <h1>未完成</h1>
        <ItemTable />
      </div>
    </el-col>
    <el-col :span="8">
      <div class="grid-content">
        <h1>进行中</h1>
        <ItemTable />
      </div>
    </el-col>
    <el-col :span="8">
      <div class="grid-content">
        <h1>已完成</h1>
        <ItemTable />
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




