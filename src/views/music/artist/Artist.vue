<template>
	<div class="pb-5">
		<div v-for="v in options" :key="v.key" class="flex mb-5 text-xs">
			<div class="flex-shrink-0 text-slate-400">{{ v.name }}：</div>
			<div class="ml-3">
				<el-space wrap :size="10" :spacer="spacer">
					<div type="text" v-for="u in v.list" :key="u.key" class="flex hover-text"
						:class="{active:(v.key === 'area'&& u.key === pageData.area) || (v.key === 'type'&& u.key === pageData.type) || (v.key === 'initial'&& u.key === pageData.initial)}"
						@click="optionChange(v.key, u.key)">{{ u.name }}</div>
				</el-space>
			</div>
		</div>
	</div>

	<div class="grid-cols-6 grid-cols-10 gap-5">
		<div v-for="v in artists" :key="v.id" class="flex items-center flex-col">
			<img :src="v.img1v1Url+'?param=120y120'" alt=""
				class="rounded-full cursor-pointer w-full aspect-square object-cover bg-dc">
			<div class="mt-2 text-sm">{{ v.name }}</div>
		</div>
	</div>
	<div class="py-10 flex jus-center">
		<el-button type="text" @click="loadMore" :loading="pageData.loading">加载更多</el-button>
	</div>
</template>

<script setup>
import { reactive, ref, h } from 'vue'
import { ElDivider } from 'element-plus'
import { userArtistList } from '@/utils/api'

let spacer = h(ElDivider, { direction: 'vertical' })
let pageData = reactive({
	init: false,
	loading: false,
	page: 1,
	limit: 60,
	initial: '-1',
	type: -1,
	area: -1,
})
let artists = ref([])
let getData = async _ => {
	pageData.loading = true
	try {
		const data = await userArtistList(pageData)
		if (pageData.page === 1) artists.value = data
		else artists.value.push(...data)
		pageData.loading = false
		pageData.init = true
	} catch {
		pageData.page--
	}
}
let optionChange = (keyName, keyValue) => {
	console.log(keyName, keyValue)
	if (keyName === 'area') pageData.area = keyValue
	if (keyName === 'type') pageData.type = keyValue
	if (keyName === 'initial') pageData.initial = keyValue

	getData()
}
let loadMore = _ => {
	pageData.page++
	getData()
}
await getData()

let options = [
	{
		name: '语种',
		key: 'area',
		list: [
			{ key: -1, name: '全部' },
			{ key: 7, name: '华语' },
			{ key: 96, name: '欧美' },
			{ key: 8, name: '日本' },
			{ key: 16, name: '韩国' },
			{ key: 0, name: '其他' },
		],
	},
	{
		name: '分类',
		key: 'type',
		list: [
			{ key: -1, name: '全部' },
			{ key: 1, name: '男歌手' },
			{ key: 2, name: '女歌手' },
			{ key: 3, name: '乐队组合' },
		],
	},
	{
		name: '筛选',
		key: 'initial',
		list: [
			{ key: '-1', name: '热门' },
			{ key: 'a', name: 'A' },
			{ key: 'b', name: 'B' },
			{ key: 'c', name: 'C' },
			{ key: 'd', name: 'D' },
			{ key: 'e', name: 'E' },
			{ key: 'f', name: 'F' },
			{ key: 'g', name: 'G' },
			{ key: 'h', name: 'H' },
			{ key: 'i', name: 'I' },
			{ key: 'j', name: 'J' },
			{ key: 'k', name: 'K' },
			{ key: 'l', name: 'L' },
			{ key: 'm', name: 'M' },
			{ key: 'n', name: 'N' },
			{ key: 'o', name: 'O' },
			{ key: 'p', name: 'P' },
			{ key: 'q', name: 'Q' },
			{ key: 'r', name: 'R' },
			{ key: 's', name: 'S' },
			{ key: 't', name: 'T' },
			{ key: 'u', name: 'U' },
			{ key: 'v', name: 'V' },
			{ key: 'w', name: 'W' },
			{ key: 'x', name: 'X' },
			{ key: 'y', name: 'Y' },
			{ key: 'z', name: 'Z' },
			{ key: '0', name: '#' },
		],
	},
]
</script>

<style scoped>
:deep(.el-divider--vertical) {
	width: 0;
	height: 0;
	margin: 0 4px;
}
.active {
	background-color: rgb(52 211 153 / 1);
	color: rgb(255 255 255 / 1) !important;
	border-radius: 0.25rem;
	padding-top: 0.125rem;
	padding-bottom: 0.125rem;
	padding-left: 0.25rem;
	padding-right: 0.25rem;
}
</style>