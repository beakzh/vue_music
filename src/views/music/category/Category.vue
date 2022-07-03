<template>
	<PlaylistHot @cat-change="catChange" />
	<div class="py-5 text-xl">{{ pageData.cat }}歌单</div>
	<div class="grid-3 grid-cols-5">
		<div v-for="v in playList" :key="v.id">
			<CoverPlay :name="v.name" :pic-url="v.coverImgUrl" :play-count="v.playCount" show-play-count />
			<div class="mt-2 text-xs text-main leading-5">{{ v.name }}</div>
			<div class="mt-2 text-xs text-main truncate text-dc song-white">{{ v.creator.nickname }}</div>
		</div>
	</div>
	<div class="py-10 flex jus-center" v-if="pageData.more">
		<el-button type="text" :loading="pageData.loading" @click="getData">加载更多</el-button>
	</div>
</template>

<script setup>
import PlaylistHot from './PlaylistHot.vue'
import CoverPlay from '@/components/common/CoverPlay.vue'
import { useTopPlaylistHighquality } from '@/utils/api'
import { reactive, ref } from 'vue'

let playList = ref([])
let pageData = reactive({
	init: false,
	loading: false,
	limit: 35,
	before: 0,
	more: false,
	cat: '全部',
})
let getData = async _ => {
	try {
		pageData.loading = true
		let { playlists, lasttime, more } = await useTopPlaylistHighquality({
			limit: pageData.limit,
			before: pageData.before,
			cat: pageData.cat,
		})
		if (pageData.before <= 0) playList.value = playlists
		else playList.value.push(...playlists)
		pageData.init = true
		pageData.loading = false

		pageData.before = lasttime
		pageData.more = more
	} catch {}
}
let catChange = v => {
	pageData.cat = v
	pageData.before = 0
	pageData.more = false
	getData()
}
await getData()
</script>

<style scoped>
</style>