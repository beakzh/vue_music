<template>
	<div class="music">
		<h1>音乐馆</h1>
		<el-affix :offset="49">
			<div class="bg-view">
			<el-tabs v-model="currentMenu" @tab-click="onTabClick">
				<el-tab-pane v-for="(v, i) in menus" :label="v.label" :name="v.name" :key="i" />
			</el-tabs>
			</div>
		</el-affix>
	</div>
	<div>
		<router-view />
	</div>
</template>

<script setup>
import { useMusicMenu } from './MusicController'

let { menus, currentMenu, onTabClick } = useMusicMenu()
</script>

<style scoped>
:deep(.el-tabs__nav-wrap::after) {
	height: 0;
}
</style>