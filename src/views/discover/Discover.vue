<template>
	<div class="discover">
		<h1>推荐</h1>
		<Banner :banners="banners" />
		<Personalized :personalized="personalized" />
	</div>
</template>

<script setup>
import Banner from '@/components/common/Banner.vue'
import Personalized from './Personalized.vue'
import { ref } from 'vue'
import { useBanner, usePersonalized } from '@/utils/api'

let banners = ref()
let personalized = ref()
async function get() {
	banners.value = await useBanner()
	personalized.value = await usePersonalized()	
	console.log(personalized.value)
}
await get()
</script>

<style scoped>
.discover{
	padding-right: 1.25rem;
}
h1 {
	padding-left: 0.625rem;
}
</style>