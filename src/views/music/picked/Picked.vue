<template>
	<Banner :banners="banners" />
	<Video />
	<DjProgram />
	<Mv :personalizedMv="personalizedMv" />
</template>

<script setup>
import Banner from '@/components/common/Banner.vue'
import Video from './Video.vue'
import DjProgram from './DjProgram.vue'
import Mv from '@/views/discover/Mv.vue'
import { useBanner, usePersonalizedMv } from '@/utils/api'
import { ref } from 'vue'

let banners = ref()
let personalizedMv = ref()
async function get() {
	banners.value = await useBanner()
	personalizedMv.value = await usePersonalizedMv()
}
await get()
</script>

<style scoped>
</style>