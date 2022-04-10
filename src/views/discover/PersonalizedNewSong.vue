<template>
	<Title title="推荐新音乐" />
	<div class="newsong">
		<div v-for="v in personalizedNewSong" :key="v.id" class="songs">
			<img :src="v.picUrl" class="pic">
			<div class="songdetail">
				<div class="song-text">{{v.name}}</div>
				<div class="song-text song-white">{{v.song.artists[0].name}}</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import Title from '@/components/common/Title.vue'

defineProps({
	personalizedNewSong: Array,
})
</script>

<style scoped>
.newsong {
	display: grid;
	grid: auto / repeat(2, 1fr);
	gap: 1rem 1rem;
	padding-left: 0.625rem;
	padding-right: 0.625rem;
}
.songs {
	display: flex;
	gap: 0 0.5rem;
}
.songs:hover {
	cursor: pointer;
	background-color: rgb(41 37 36 / 0.1);
	border-radius: 0.25rem;
}
.pic {
	width: 3rem;
	height: 3rem;
	border-radius: 0.25rem;
}
</style>