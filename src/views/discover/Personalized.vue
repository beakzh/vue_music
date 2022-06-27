<template>
	<Title title="你的专属歌单" />
	<div class="grid-3 grid-cols-5">
		<div v-for="v in personalized.sampleSize(10)" :key="v.id">
			<CoverPlay :picUrl="v.picUrl" :name="v.name" :playCount="v.playCount" showPlayCount />
			<div class="text-xs truncate mt-2">{{v.name}}</div>
		</div>
	</div>
</template>

<script setup>
import Title from '@/components/common/Title.vue'
import CoverPlay from '@/components/common/CoverPlay.vue'

defineProps({
	personalized: Array,
})
</script>

<style scoped>
.list-name {
	margin-top: 0.5rem;
	font-size: 0.75rem;
	line-height: 1rem;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
</style>