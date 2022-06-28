<template>
	<router-view />
</template>

<script setup>
import { useStore } from 'vuex'
import { computed, onMounted, onUnmounted, watch } from 'vue'

let store = useStore()
let ended = computed(_ => store.state.player.ended)
let userPlayerInit = _ => {
	let timer = null
	watch(ended, ended => {
		if (!ended) return
		else store.dispatch('player/playEnd')
	})
	onMounted(_ => {
		store.commit('player/init')
		console.log('启动定时器')
		timer = setInterval(_ => {
			store.commit('player/interval')
		}, 1000)
	})
	onUnmounted(_ => {
		console.log('关闭定时器')
		clearInterval(timer)
	})
}
userPlayerInit()
</script>

<style>
html,
body {
	font-size: 14px;
	margin: unset;
	font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei',
		'微软雅黑', Arial, sans-serif;
	--tw-text-opacity: 1;
	color: rgb(51 65 85 / var(--tw-text-opacity));
}
</style>
