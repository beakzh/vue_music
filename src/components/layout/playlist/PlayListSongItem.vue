<template>
	<div class="song-item" :class="{active:active}">
		<el-image lazy :src="song.al?.picUrl+'?param=80y80'" class="aspect-square w-10" />
		<div class="song-detail">
			<div class="song-info">
				<div class="song-name">
					<div>{{ song.name }}</div>
					<IconPark v-if="song.mv > 0" :icon="Youtube" size="16" style="color:rgb(251 146 60 / 1)" />
				</div>
				<div>{{ song.ar.first().name }}</div>
			</div>
			<div class="song-duration">{{ useFormatDuring(song.dt / 1000) }}</div>
		</div>
	</div>
</template>

<script setup>
import IconPark from '@/components/common/IconPark.vue'
import { Youtube } from '@icon-park/vue-next'
import { useFormatDuring } from '@/utils/number'

defineProps({
	song: Object,
	active: Boolean,
})
</script>

<style scoped>
.song-item {
	display: flex;
	padding: 0.625rem;
	font-size: 0.75rem;
	line-height: 1rem;
	color: rgb(51 65 85 / 1);
}
.song-item:hover {
	cursor: pointer;
	background-color: rgb(41 37 36 / 0.1);
	border-radius: 0.25rem;
}
.song-detail {
	display: flex;
	justify-content: space-between;
	flex: 1 1 0%;
	margin-left: 0.5rem;
}
.song-name{
  display: flex;
  gap: 0 0.8rem;
}
.song-info {
	display: flex;
	flex-direction: column;
	gap: 0.5rem 0;
	flex: 1 1 0%;
}
.song-duration {
	align-self: center;
}
.active[class] {
	border-left-width: 2px;
	border-left-color: rgb(52 211 153 / 1);
	color: rgb(52 211 153 / 1) !important;
}
</style>