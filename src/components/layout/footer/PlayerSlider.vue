<template>
	<div class="player-slider">
		<el-slider v-model="currentTime" :show-tooltip="false" :min="0" :max="duration"
			@change="onSliderChange" @input="onSliderInput" />
	</div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'

let store = useStore()
let currentTime = computed({
	get: () => store.state.player.currentTime,
	set: v => (store.state.player.currentTime = v),
})
let duration = computed(_ => store.state.player.duration)
let onSliderChange = v => store.commit('player/onSliderChange', v)
let onSliderInput = _ => store.commit('player/onSliderInput')
</script>

<style scoped>
:deep(.el-slider) {
	height: 10px;
}
:deep(.el-slider__bar) {
	height: 2px;
	background-color: var(--el-color-primary) !important;
}
:deep(.el-slider__button-wrapper) {
	width: 4px;
	height: 4px;
}
:deep(.el-slider__button) {
	position: absolute;
	width: 0px;
	height: 0px;
	top: 13.5px;
	left: 0px;
	background-color: rgb(52 211 153) !important;
}
:deep(.el-slider__button:hover) {
	width: 10px;
	height: 10px;
}
:deep(.el-slider__runway) {
	height: 2px;
}
</style>