<template>
	<div class="text-xl pb-5 font-bold">官方榜</div>
	<div class="grid-2 grid-cols-4x">
		<div v-for="v in topListDetailData.slice(0, 4)" :key="v.id">
			<div class="flex items-center rounded-lg cursor-pointer bg-dc">
				<CoverPlay :picUrl="v.coverImgUrl" :name="v.name" :playCount="v.playCount" showPlayCount
					class="w-36" />
				<div class="px-5 flex flex-1-1 flex-col flex-gap1">
					<div class="text-xl font-bold">{{ v.name }}</div>
					<div class="text-main text-xs mt-2">
						<div v-for="(u ,i) in v.tracks" :key="i" class="mt-2">
							<div class="flex">
								<span class="mr-1">{{ i + 1 }}</span>
								<div class="flex-auto truncate w-20">{{ u.first }} - {{ u.second }}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    
	<div class="text-xl py-5 font-bold">特色榜</div>
	<div class="grid-5 grid-cols-10">
		<div v-for="v in topListDetailData.slice(4)" :key="v.id">
			<CoverPlay :picUrl="v.coverImgUrl" :name="v.name" :playCount="v.playCount" />
			<div class="text-xs mt-2">{{ v.name }}</div>
		</div>
	</div>
</template>

<script setup>
import CoverPlay from '@/components/common/CoverPlay.vue'
import { useTopListDetail } from '@/utils/api'
import { ref } from 'vue'

let topListDetailData = ref()
async function get() {
	topListDetailData.value = await useTopListDetail()
}
await get()
</script>

<style scoped>
</style>