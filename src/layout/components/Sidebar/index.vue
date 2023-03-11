<script setup>
import { Edit } from '@element-plus/icons-vue'

computed({

})
</script>

<template>
    <div class="wrapper">
    <p class="title">Admin</p>
    <!-- <div class="control">
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
                                                </div> -->
        <el-menu default-active="2" background-color="#304156" text-color="#bfcbd9" :unique-opened="false"
            active-text-color="#409EFF" :collapse-transition="false" mode="vertical">
            <el-menu-item index="1">
                <span>Navigator One</span>
            </el-menu-item>
            <el-menu-item index="2">
                <span>Navigator Two</span>
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

