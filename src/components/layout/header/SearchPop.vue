<template>
	<el-popover v-model:visible="showSearchView" popper-class="popperOption" placement="bottom"
		:width="250">
		<template #reference>
			<el-input v-model="keywords" @input="searchMusic" @focus="showSearchView=true"
				@focusout="showSearchView=true" placeholder="搜索音乐、MV、歌单" :prefix-icon="Search" clearable />
		</template>
		<el-scrollbar height="400px">
			<div v-if="!keywords">
				<div class="hot">热门搜索</div>
				<div v-for="(v,i) in searchHot" :key="i" class="hot-list">
					<div class="hot-title hover-text">
						<span>{{i+1}}. </span>
						<span>{{v.searchWord}}</span>
					</div>
					<div class="hot-text">{{v.score.NumberFormat()}}</div>
				</div>
			</div>
			<SearchSuggest :suggests="suggests" v-else />
		</el-scrollbar>
	</el-popover>
</template>

<script setup>
import SearchSuggest from './SearchSuggest.vue'
import { Search } from '@element-plus/icons-vue'
import { useSearchHotDetail, useSearchSuggest } from '@/utils/api'
import { ref, onMounted } from 'vue'

let showSearchView = ref(false)

let searchHot = ref()
async function get() {
	searchHot.value = await useSearchHotDetail()
}

let keywords = ref()
let suggests = ref()
let searchMusic =async () => {
	suggests.value = await useSearchSuggest(keywords.value)
	console.log('suggest',suggests.value)
}

onMounted(async _ => {
	await get()
})
</script>

<style scoped>
:deep(input:focus) {
	border-color: #2dd4bf;
}
:deep(.el-input__inner) {
	border-radius: 1.5rem;
	background-color: rgb(241 245 249);
}
.hot {
	padding-left: 0.625rem;
	padding-bottom: 0.375rem;
	padding-top: 0.5rem;
	font-size: 1rem;
}
.hot-list {
	display: flex;
	justify-content: space-between;
	padding: 0.625rem 0.625rem;
}
.hot-title span {
	font-size: 0.75rem;
	line-height: 1rem;
}
.hot-text {
	font-size: 0.75rem;
	line-height: 1rem;
	color: rgb(252 165 165);
}
</style>