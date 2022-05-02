<template>
	<div class="discover">
		<h1>推荐</h1>
		<Banner :banners="banners" />
		<Personalized :personalized="personalized" />
		<PersonalizedNewSong :personalizedNewSong="personalizedNewSong" />
		<Mv :personalizedMv="personalizedMv" />
	</div>
</template>

<script setup>
import Banner from '@/components/common/Banner.vue'
import Personalized from './Personalized.vue'
import PersonalizedNewSong from './PersonalizedNewSong.vue'
import Mv from './Mv.vue'
import { ref } from 'vue'
import { useBanner, usePersonalized, usePersonalizedNewSong, usePersonalizedMv } from '@/utils/api'

let banners = ref()
let personalized = ref()
let personalizedNewSong = ref()
let personalizedMv = ref()
async function get() {
	banners.value = await useBanner()
	personalized.value = await usePersonalized()
	personalizedNewSong.value = await usePersonalizedNewSong()
	personalizedMv.value = await usePersonalizedMv()
}
await get()
</script>

<style scoped>
.discover {
	padding-right: 1.25rem;
}
h1 {
	padding-left: 0.625rem;
}
</style>