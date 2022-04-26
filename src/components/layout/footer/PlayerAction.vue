<template>
	<div class="action">
		<span>00:00 / 00:00</span>
		<IconPark :icon="TextMessage" size="18" :stroke-width="3" class="hover-text" title="歌词" />
		<div class="playlist">
			<IconPark @click="changeList" :icon="MusicList" size="18" :stroke-width="3" class="hover-text"
				title="播放列表" />
			<span>0</span>
		</div>
	</div>
</template>

<script setup>
import IconPark from '@/components/common/IconPark.vue'
import { MusicList, TextMessage } from '@icon-park/vue-next'
import { useStore } from 'vuex'

let store = useStore()
let changeList = _ => store.commit('player/changList')
</script>

<style scoped>
.action {
	display: flex;
	align-items: center;
	gap: 0 10px;
}
.action span {
	line-height: 0.5rem;
	font-size: 10px;
}
.playlist {
	display: flex;
	align-items: center;
}
</style>