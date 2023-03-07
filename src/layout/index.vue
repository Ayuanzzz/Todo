<script setup>
import { Sidebar, AppMain } from './components';
</script>

<template>
    <div class="app-wrapper">
        <Sidebar class="sidebar" />
        <div class="main-container">
            <AppMain />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.app-wrapper {
    position: relative;
    height: 100%;
    width: 100%;
}

// .app-wrapper::after {
//     content: "";
//     display: table;
//     clear: both;
// }

.sidebar {
    width: 210px;
    background-color: #304156;
    height: 100%;
    position: fixed;
    font-size: 0px;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow: hidden;
}

.main-container {
    min-height: 100%;
    margin-left: 210px;
    position: relative;
}
</style>

