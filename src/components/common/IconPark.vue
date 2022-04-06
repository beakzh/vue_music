<template>
	<component :is="icon" :theme="theme" :size="size" :fill="fill" :strok-width="strokeWidth" :title="title" />
</template>

<script setup>
import { Icon } from '@icon-park/vue-next/lib/runtime'

defineProps({
	icon: Icon,
	title:String,
	theme: String,
	size: String,
	fill: String,
	strokeWidth: Number,
})
</script>

<style scoped>
</style>