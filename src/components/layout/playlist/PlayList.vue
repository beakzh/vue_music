<template>
	<el-drawer v-model="showPlayList" direction="rtl" size="320px" :with-header="false">
		<div class="play-list">
			<div class="total-list">
				<div class="list-text">播放列表</div>
				<div class="total-song">
					<div>共 {{playListCount}} 首歌曲</div>
					<div class="op hover-text" @click="clearSongList">
						<IconPark :icon="Delete" style="position:relative;top:0.12rem;fontSize:0.9rem" />
						<span>清空</span>
					</div>
				</div>
			</div>
			<div class="list-item">
				<el-scrollbar>
					<PlayListSongItem v-for="v in playList" :key="v.id" :song="v" :active="v.id === id"
						@click="play(v.id)" />
				</el-scrollbar>
			</div>
		</div>
	</el-drawer>
</template>

<script setup>
import IconPark from '@/components/common/IconPark.vue'
import PlayListSongItem from './PlayListSongItem.vue'
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { Delete } from '@icon-park/vue-next'

let store = useStore()
let showPlayList = computed({
	get: () => store.state.player.showPlayList,
	set: v => (store.state.player.showPlayList = v),
})
let id = computed(_ => store.state.player.id)
let playList = computed(_ => store.state.player.playList)
let playListCount = computed(_ => store.state.player.playList.length)
let play = id => store.dispatch('player/play', id)
let clearSongList = _ => store.commit('player/clearSongList')
</script>

<style>
.el-drawer__body {
	padding: 0;
}
</style>

<style scoped>
.play-list {
	display: flex;
	flex-direction: column;
	height: 100vh;
}
.total-list {
	flex-shrink: 0;
	padding: 0.625rem;
}
.list-text {
	font-size: 1.35rem;
	margin-bottom: 0.5rem;
}
.total-song {
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 0.2rem;
}
.op {
	color: rgb(148 163 184);
}
.list-item {
	flex: 1 1 0%;
	overflow: hidden;
}
</style>