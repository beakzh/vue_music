<template>
	<Title title="独家放送" />
	<div class="grid-2 grid-cols-4">
		<div v-for="v in personalizedPrivateContent" :key="v.id">
			<CoverPlay :pic-url="v.sPicUrl" video :name="v.name" />
			<div class="text-xs truncate mt-2">{{v.name}}</div>
		</div>
	</div>
</template>

<script setup>
import Title from '@/components/common/Title.vue'
import CoverPlay from '@/components/common/CoverPlay.vue'
import { usePersonalizedPrivateContentList } from '@/utils/api'
import { ref } from 'vue'

let personalizedPrivateContent = ref()
async function get() {
	personalizedPrivateContent.value = await usePersonalizedPrivateContentList(4)
}
await get()
</script>

<style scoped>
</style>