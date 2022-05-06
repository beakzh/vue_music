<template>
	<div class="controller">
		<IconPark :icon="loopType==0?PlayOnce:loopType==1?LoopOnce:ShuffleOne" size="20" :stroke-width="3"
			class="hover-text" @click="toggleLoop" />
		<IconPark @click="prev" :icon="GoStart" size="28" theme="filled" class="hover-text" />
		<IconPark :icon="isPause?PauseOne:Play" @click="togglePlay" size="45" theme="filled" class="hover-text btn-text" />
		<IconPark @click="next" :icon="GoEnd" size="28" class="hover-text" />
		<el-popover placement="top" :width="50" popper-class="popperOptions">
			<template #reference>
				<IconPark :icon="VolumeSmall" size="20" :stroke-width="3" class="hover-text" />
			</template>
			<PlayerVolumneSlider />
		</el-popover>
	</div>
</template>

<script setup>
import {
	Play,
	PauseOne,
	LoopOnce,
	ShuffleOne,
	PlayOnce,
	GoEnd,
	GoStart,
	VolumeSmall,
} from '@icon-park/vue-next'
import IconPark from '@/components/common/IconPark.vue'
import PlayerVolumneSlider from './PlayerVolumeSlider.vue'
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

let store = useStore()
let loopType = computed(_ => store.state.player.loopType)
let toggleLoop = _ => store.commit('player/toggleLoop')

let isPause = computed(_ => store.state.player.isPause)
let togglePlay = _ => store.commit('player/togglePlay')

let prev = _=> store.dispatch('player/prev')
let next = _=> store.dispatch('player/next')
</script>

<style scoped>
.controller {
	display: flex;
	align-items: center;
	gap: 0 10px;
	flex: 1 1 0%;
}
.btn-text {
	color: rgb(52 211 153);
}
</style>