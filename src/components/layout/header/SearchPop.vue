<template>
	<el-popover v-model:visible="showSearchView" placement="bottom" :width="250">
		<template #reference>
			<el-input @focus="showSearchView=true" @focusout="showSearchView=false" placeholder="搜索音乐、MV、歌单"
				class="w-50 m-2" :prefix-icon="Search" />
		</template>
		<div>
			<el-scrollbar>

			</el-scrollbar>
		</div>
	</el-popover>
</template>

<script setup>
import { Search } from '@element-plus/icons-vue'
import { ref } from 'vue'

let showSearchView = ref(false)
</script>

<style scoped>
:deep(input:focus){
	border-color: #2dd4bf;
}
:deep(.el-input__inner) {
	border-radius: 1.5rem;
	background-color: rgb(241 245 249);
}
</style>