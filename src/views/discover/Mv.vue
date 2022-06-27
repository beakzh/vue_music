<template>
	<Title title="推荐MV" />
	<div class="grid-2 grid-cols-4">
		<div v-for="v in personalizedMv" :key="v.id">
			<CoverPlay :pic-url="v.picUrl" video :name="v.name" :play-count="v.playCount" showPlayCount />
			<div class="songdetail">
				<div class="song-text">{{v.name}}</div>
				<div class="song-text song-white">{{v.artistName}}</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import Title from '@/components/common/Title.vue'
import CoverPlay from '@/components/common/CoverPlay.vue'

defineProps({
	personalizedMv: Array,
})
</script>

<style scoped>
</style>