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
.el-scrollbar__wrap {
    overflow: auto;
    height: 100%;
}
.menu{
    padding: 0 1.5rem;
    margin-top: 2.5rem;
}
.menu-title{
    padding:0 1rem 0.5rem 1rem;
    font-size: 0.75rem;
    line-height: 1rem;
}
.menu-item{
    display: flex;
    cursor: pointer;
    align-items: center;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.375rem;
    padding-bottom: 0.375rem;
    font-size: 1rem;
    line-height: 1.35rem;
}
.menu-item:hover{
	box-sizing: border-box;
    border-width: 0;
    background: var(--el-text-color-secondary);
    border-style: solid;
    border-color: #e5e7eb;
    border-radius: 0.25rem;
}
.m1{
    margin-left: 0.25rem;
}
</style>