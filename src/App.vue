<template>
	<router-view />
</template>

<script setup>
import { useStore } from 'vuex'
import { computed, onMounted, onUnmounted, watch } from 'vue'

let store = useStore()
let ended = computed(_ => store.state.ended)
let userPlayerInit = _ => {
	let timer = null
	watch(ended, ended => {
		if (!ended) return
		store.commit('player/playEnd')
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
}
</style>
