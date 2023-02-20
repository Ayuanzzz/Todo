<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goItemTable() {
    router.push('/Todo/itemtable')
}

</script>

<template>
    <el-button type="primary" @click.prevent="goItemTable">项目列表</el-button>
</template>

<style scoped></style>
