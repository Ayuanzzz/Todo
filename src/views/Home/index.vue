<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goItemTable() {
    router.push('/itemtable')
}
function goSetItem() {
    router.push('/setItem')
}

</script>

<template>
    <el-button type="primary" @click.prevent="goItemTable">项目列表</el-button>
    <el-button type="primary" @click.prevent="goSetItem">项目分配</el-button>
</template>

<style scoped></style>
