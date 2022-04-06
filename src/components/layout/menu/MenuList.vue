<template>
	<el-scrollbar>
		<div v-for="(v, i) in menus" :key="i" class="menu">
			<div class="menu-title">{{v.name}}</div>
			<div class="menu-item" v-for="u in v.menus" :key="u.key" @click="click(u)"
				:class="{ 'active': currentKey === u.key }">
				<IconPark :icon="u.icon" size="18" :theme="u.theme" />
				<span class="m1">{{u.name}}</span>
			</div>
		</div>
	</el-scrollbar>
</template>

<script setup>
import IconPark from '@/components/common/IconPark.vue'
import { userMenu } from './userMenu'

const { menus, currentKey, click } = userMenu()
</script>

<style  scoped>
.menu {
	padding: 0 1.5rem;
	margin-top: 2.5rem;
}
.menu-title {
	padding: 0 1rem 0.5rem 1rem;
	font-size: 0.75rem;
	line-height: 1rem;
}
.menu-item {
	display: flex;
	cursor: pointer;
	align-items: center !important;
	margin-top: 0.3rem;
	padding-left: 1rem;
	padding-right: 1rem;
	padding-top: 0.375rem;
	padding-bottom: 0.375rem;
	font-size: 1.025rem;
	line-height: 0.25rem;
}
.menu-item:hover {
	box-sizing: border-box;
	border-width: 0;
	background: rgb(229 231 235);
	border-style: solid;
	border-color: #e5e7eb;
	border-radius: 0.25rem;
}
.m1 {
	display: block;
	margin-left: 0.25rem;
}
.active {
	background-color: #2dd4bf !important;
	border-radius: 0.25rem;
	color: rgb(248 250 252) !important;
}
</style>