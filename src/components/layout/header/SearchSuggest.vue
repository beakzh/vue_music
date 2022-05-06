<template>
	<div v-for="(order, i1) in suggests?.order " :key="i1">
		<div class="title-padd">{{getTitle(order)}}</div>
		<template v-if="order == 'songs'">
			<div v-for="(song, i2) in suggests.songs" :key="i2" class="list-flex" @click="play(song.id)">
				<span class="text-xs text-color">{{song.name}} </span>
				<span class="text-xs text-padd"> - {{song.artists[0]?.name}}</span>
			</div>
		</template>
		<template v-if="order == 'artists'">
			<div v-for="(artist,i3) in suggests.artists" :key="i3" class="list-flex">
				<el-avatar size="small" :src="artist.picUrl" />
				<span class="text-xs text-color text-padd">{{artist.name}}</span>
			</div>
		</template>
		<template v-if="order == 'albums'">
			<div v-for="(album, i4) in suggests.albums" :key="i4" class="list-flex">
				<span class="text-xs text-color">{{album.name}} </span>
				<span class="text-xs text-padd"> - {{album.artist.name}}</span>
			</div>
		</template>
		<template v-if="order == 'playlists'">
			<div v-for="(playlist,i5) in suggests.playlists" :key="i5" class="list-flex">
				<el-avatar size="small" :src="playlist.coverImgUrl" />
				<span class="text-xs text-color text-padd">{{playlist.name}}</span>
			</div>
		</template>
	</div>
</template>

<script setup>
import { useStore } from 'vuex'

defineProps({
	suggests: Object,
})

let store = useStore()
let play = id => store.dispatch('player/play', id)
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
.list-flex {
	display: flex;
	align-items: center;
	padding: 0.375rem;
}
.list-flex:hover {
	cursor: pointer;
	box-sizing: border-box;
	border-width: 0;
	background: rgb(229 231 235);
	border-style: solid;
	border-color: #e5e7eb;
}
.title-padd {
	padding: 0.375rem;
}
.text-padd {
	padding-left: 0.4rem;
}
.text-color {
	color: rgb(16 185 129);
}
.text-xs {
	font-size: 0.75rem;
}
</style>