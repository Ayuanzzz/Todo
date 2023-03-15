<script setup>
defineProps({
    to: String
})
</script>

<template>
    <router-link :to="to">
        <slot />
    </router-link>
</template>
