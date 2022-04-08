<template>
	<div class="discover">
		<h1>推荐</h1>
		<Banner :banners="banners" />
	</div>
</template>

<script setup>
import Banner from '@/components/common/Banner.vue'
import { ref } from 'vue'
import { useBanner } from '@/utils/api'

let banners = ref()
async function get() {
	banners.value = await useBanner()
}
await get()
</script>

<style scoped>
h1 {
	padding-left: 0.625rem;
}
</style>