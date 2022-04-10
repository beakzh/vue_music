<template>
	<Title title="推荐MV" />
	<div class="mv">
		<div v-for="v in personalizedMv" :key="v.id">
			<CoverPlay :pic-url="v.picUrl" video :name="v.name" :play-count="v.playCount" />
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
.mv {
	display: grid;
	grid: auto / repeat(2, 1fr);
	gap: 1rem 1rem;
	padding-left: 0.625rem;
	padding-right: 0.625rem;
}
@media (min-width: 1024px) {
	.mv {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
	}
}
</style>