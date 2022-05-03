<template>
	<div class="volumne">
		<div>
			<el-slider v-model="volume" @input="setVolume" vertical height="150px" :show-tooltip="false" :max="100" :min="0"
				size="small" />
		</div>
		<div>{{ volume }}</div>
		<div>
			<IconPark :icon="VolumeSmall" size="16" theme="filled" class="hover-text" />
		</div>
	</div>
</template>

<script setup>
import { VolumeMute, VolumeSmall } from '@icon-park/vue-next'
import IconPark from '@/components/common/IconPark.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'

let store = useStore()
let volume = computed({
	get: _ => store.state.player.volume,
	set: v => (store.state.player.volume = v),
})
let setVolume = v => store.commit('player/setVolume', v)
</script>

<style scoped>
.volumne {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 15px 0;
}
:deep(.el-slider__runway) {
	height: 10px;
}
</style>