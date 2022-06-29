<template>
	<div class="grid-8 grid-cols-12 gap-5">
		<div class="button-dc" @click="tagClick('全部')">全部</div>
		<div v-for="v in tags" :key="v.id" @click="tagClick(v.name)" class="button-dc">{{ v.name }}</div>
	</div>
</template>

<script setup>
import { usePlaylistHighqualityTags } from '@/utils/api'
import { ref } from 'vue'

let emit = defineEmits(['catChange'])
let tagClick = v => {
	emit('catChange', v)
}

let tags = ref()
async function get() {
	tags.value = await usePlaylistHighqualityTags()
}
await get()
</script>

<style scoped>
</style>