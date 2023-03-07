<script setup>

</script>

<template>
    <section class="app-main">
        <router-link to="/setItem/index">emails</router-link>
        <Transition name="fade-transform" mode="out-in">
            <router-view></router-view>
        </Transition>
    </section>
</template>

<style style="scss" scoped></style>
