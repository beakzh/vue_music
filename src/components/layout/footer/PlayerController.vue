<template>
	<div class="controller">
		<IconPark :icon="PlayOnce" size="20" :stroke-width="3" class="hover-text" />
		<IconPark :icon="GoStart" size="28" theme="filled" class="hover-text" />
		<IconPark :icon="PauseOne" size="45" theme="filled" class="hover-text btn-text" />
		<IconPark :icon="GoEnd" size="28" class="hover-text" />
		<el-popover placement="top" :width="50">
			<template #reference>
				<IconPark :icon="VolumeSmall" size="20" :stroke-width="3" class="hover-text" />
			</template>
			<PlayerVolumneSlider />
		</el-popover>
	</div>
</template>

<script setup>
import { Play, PauseOne, LoopOnce, ShuffleOne, PlayOnce, GoEnd, GoStart, VolumeSmall } from '@icon-park/vue-next'
import IconPark from '@/components/common/IconPark.vue'
import PlayerVolumneSlider from './PlayerVolumeSlider.vue'
</script>

<style scoped>
.controller {
	display: flex;
	align-items: center;
	gap: 0 10px;
}
.btn-text {
	color: rgb(52 211 153);
}
</style>