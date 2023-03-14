<script setup>
import { Edit } from '@element-plus/icons-vue'
import { useRoutesStore } from '@/stores/permission'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const activeMenu = computed(() => {
    const route = useRoute()
    return route.path
})
const permission_routes = useRoutesStore().routes
console.log(permission_routes);

</script>

<template>
    <div class="wrapper">
        <p class="title">Admin</p>
        <el-menu :default-active="activeMenu" background-color="#304156" text-color="#bfcbd9" :unique-opened="false"
            active-text-color="#409EFF" :collapse-transition="false" mode="vertical" v-for="route in permission_routes"
            :key="route.path">
            <el-menu-item :index="route.path">
                <span>{{ route.name }}</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<style lang="scss" scoped>
.wrapper {
    .title {
        font-size: 45px;
        font-weight: bold;
        font-family: sans-serif;
        margin: 15px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    }

    .control {
        margin: 10px 20px;
        display: flex;
        align-items: center;
        width: 100%;
        height: 30px;
        // border-bottom: 1px solid rgba(0, 0, 0, 0.5);

        .control {
            margin: 0, 0, 2px, 0;
        }

        .ctlTxt {
            display: inline-block;
            margin-left: 10px;
        }
    }
}
</style>

