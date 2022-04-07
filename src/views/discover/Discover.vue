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
	console.log(banners.value)
}
await get()
</script>

<style scoped>
.discover{
	margin-left: auto;
	margin-right: auto;
}
</style>