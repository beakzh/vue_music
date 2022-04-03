<template>
    <component :is="icon" :theme="theme" :size="size" :fill="fill" />
</template>

<script setup>
import {Icon} from "@icon-park/vue-next/lib/runtime"

defineProps({
    icon:Icon,
    theme:String,
    size:String,
    fill:String
})
</script>

<style scoped>

</style>