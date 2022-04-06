<template>
	<div>
		<h1>推荐</h1>
	</div>
</template>

<script setup>
// import Banner from '@/components/common/Banner.vue'
import { ref, onMounted } from 'vue'
import { useBanner } from '@/utils/api'

let banners = ref()
async function get() {
	banners.value = await useBanner()
	console.log(banners.value)
}
await get()
onMounted(_ => {
	get()
})
</script>

<style scoped>
</style>