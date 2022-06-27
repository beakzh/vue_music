<template>
	<Banner :banners="banners" />
    <Video />
    <DjProgram />
    <Mv />
</template>

<script setup>
import Banner from '@/components/common/Banner.vue'
import Video from './Video.vue'
import DjProgram from './DjProgram.vue'
import Mv from '@/views/discover/Mv.vue'
import { useBanner } from '@/utils/api'
import { ref } from 'vue'

let banners = ref()
async function get() {
	banners.value = await useBanner()
}
await get()
</script>

<style scoped>
</style>