<template>
	<Title title="推荐电台" />
	<div class="grid-3 grid-cols-6">
		<div v-for="v in djProgram" :key="v.id">
			<CoverPlay :pic-url="v.picUrl" :name="v.name" />
			<div class="text-xs truncate mt-2">{{v.name}}</div>
		</div>
	</div>
</template>

<script setup>
import Title from '@/components/common/Title.vue'
import CoverPlay from '@/components/common/CoverPlay.vue'
import { usePersonalizedDjProgram } from '@/utils/api'
import { ref } from 'vue'

let djProgram = ref()
async function get() {
	djProgram.value = await usePersonalizedDjProgram()
}
await get()
</script>

<style scoped>
</style>