<template>
	<div class="action">
		<span>{{ useFormatDuring(currentTime) }} / {{ useFormatDuring(duration) }}</span>
		<IconPark :icon="TextMessage" size="18" :stroke-width="3" class="hover-text" title="歌词" />
		<div class="playlist">
			<IconPark @click="changeList" :icon="MusicList" size="18" :stroke-width="3" class="hover-text"
				title="播放列表" />
			<span>{{ playListCount }}</span>
		</div>
	</div>
</template>

<script setup>
import IconPark from '@/components/common/IconPark.vue'
import { MusicList, TextMessage } from '@icon-park/vue-next'
import { useStore } from 'vuex'
import { computed } from 'vue'
import { useFormatDuring } from '@/utils/number'

let store = useStore()
let currentTime = computed(_ => store.state.player.currentTime)
let duration = computed(_ => store.state.player.duration)
let changeList = _ => store.commit('player/changList')
let playListCount = computed(_ => store.state.player.playList.length)
</script>

<style scoped>
.action {
	display: flex;
	align-items: center;
	gap: 0 10px;
}
.action span {
	line-height: 0.5rem;
	font-size: 0.75rem;
}
.playlist {
	display: flex;
	align-items: center;
}
</style>