<template>
	<div class="title">
		<span class="title-text">{{title}}</span>
		<IconPark :icon="Right" size="25" :stroke-width="2" />
	</div>
</template>

<script setup>
import IconPark from '@/components/common/IconPark.vue'
import { Right } from '@icon-park/vue-next'

defineProps({
	title: String,
})
</script>

<style scoped>
.title {
	display: flex;
	margin-top: 0.5rem;
	padding-left: 0.625rem;
	padding-top: 0.75rem;
	padding-bottom: 0.75rem;
}
.title-text {
	font-size: 1.25rem;
	line-height: 1.75rem;
}
</style>