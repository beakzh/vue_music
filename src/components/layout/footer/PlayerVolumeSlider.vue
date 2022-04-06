<template>
	<div class="volumne">
		<div>
			<el-slider vertical height="150px" :show-tooltip="false" :max="100" :min="0" size="small" />
		</div>
		<div>{{ 60 }}</div>
		<div>
			<IconPark :icon="VolumeSmall" size="16" theme="filled" class="hover-text" />
		</div>
	</div>
</template>

<script setup>
import { VolumeMute, VolumeSmall } from '@icon-park/vue-next'
import IconPark from '@/components/common/IconPark.vue'
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