<template>
	<div>
		<Title title="你的专属歌单" />
		<div class="play-list">
			<div v-for="v in personalized.sampleSize(10)" :key="v.id">
				<CoverPlay :picUrl="v.picUrl" :name="v.name" :playCount="v.playCount" />
				<div class="list-name">{{v.name}}</div>
			</div>
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
.play-list {
	display: grid;
	grid: auto / repeat(3, minmax(0, 1fr));
	gap: 1.25rem;
	padding-left: 0.625rem;
	padding-right: 0.625rem;
}
@media (min-width: 1024px) {
	.play-list {
		display: grid;
		grid-template-columns: repeat(5, minmax(0, 1fr));
	}
}
.list-name{
    margin-top: 0.5rem;
    font-size: 0.75rem;
    line-height: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>