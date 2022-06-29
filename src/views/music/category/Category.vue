<template>
	<PlaylistHot @cat-change="catChange" />
	<div class="py-5 text-xl">{{ pageData.cat }}歌单</div>
</template>

<script setup>
import PlaylistHot from './PlaylistHot.vue'
import { useTopPlaylistHighquality } from '@/utils/api'
import { reactive } from 'vue'

let pageData = reactive({
	init: false,
	loading: false,
	limit: 35,
	before: 0,
	more: false,
	cat: '全部',
})
let catChange = v => {
	console.log(v)
	pageData.cat = v
}
</script>

<style scoped>
</style>