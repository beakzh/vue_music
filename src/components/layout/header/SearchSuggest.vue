<template>
	<div v-for="(v, i) in suggests?.order " :key="i">
		<div>{{getTitle(v)}}</div>
	</div>
</template>

<script setup>
defineProps({
	suggests: Object,
})
let getTitle = name => {
	switch (name) {
		case 'songs':
			return '单曲'
		case 'artists':
			return '歌手'
		case 'albums':
			return '专辑'
		case 'playlists':
			return '歌单'
	}
}
</script>

<style scoped>
</style>