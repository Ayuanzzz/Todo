<script setup>
import { useRoutesStore } from '@/stores/permission'
import { ref } from 'vue'
const useRoutes = useRoutesStore()
function getRoutes() {
    // console.log('BEFORE---', useRoutes.routes);
    // useRoutes.SET_ROUTES()
    console.log('after---', useRoutes.routes);
}
</script>

<template>
    <button @click="getRoutes()">getRoutes</button>
</template>

<style lang="scss" scoped>
.test {
    float: left;
}
</style>
