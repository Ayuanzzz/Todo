<script setup>
import { useRouter } from 'vue-router'
import { watch } from 'vue'

const router = useRouter()

function goItemTable() {
    router.push('/itemtable')
}
function goSetItem() {
    router.push('/setItem')
}

// 监听,当路由发生变化的时候执行
// watch(() => router.path, (newPath, oldPath) => { console.log(newPath) }, { immediate: true });
// 监听当前路由变化
// watch(() => router.currentRoute.value.path, (toPath) => {
//     console.log(toPath);
// }, { immediate: true, deep: true })

</script>

<template>
    <el-button type="primary" @click.prevent="goItemTable">项目列表</el-button>
    <el-button type="primary" @click.prevent="goSetItem">项目分配</el-button>
</template>

<style scoped></style>
