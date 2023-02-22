<script setup>
import { Edit } from '@element-plus/icons-vue'
</script>

<template>
    <div class="app-wrapper">
        <div class="sidebar">
            <p class="title">Admin</p>
            <div class="control">
                <el-icon size="20px">
                    <Edit />
                </el-icon>
                <span class="ctlTxt">
                    编辑
                </span>
            </div>
            <div class="control">
                <el-icon size="20px">
                    <Edit />
                </el-icon>
                <span class="ctlTxt">
                    编辑
                </span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.app-wrapper {
    position: relative;
    height: 100%;
    width: 100%;
}

.sidebar {
    float: left;
    height: 100vh;
    width: 200px;
    border: 1px solid red;
    overflow: hidden;

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

