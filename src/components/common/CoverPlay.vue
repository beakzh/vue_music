<template>
	<div class="cover-play-image" :class="{'aspect-square':!video ,'aspect-video':video}"
		@mouseenter="showCount = false" @mouseleave="showCount = true">
		<el-image :src="picUrl" :alt="name" />
		<div v-if="!showCount" class="mask">
			<IconPark :icon="PlayOne" theme="filled" size="50" class="hover-text" />
		</div>
		<div v-if="showCount" class="play-count">
			<IconPark :icon="video?Play:Headset" size="12" />
			<span>{{ playCount.NumberFormat() }}</span>
		</div>
	</div>
</template>

<script setup>
import IconPark from '@/components/common/IconPark.vue'
import { PlayOne, Play, Headset } from '@icon-park/vue-next'
import { ref } from '@vue/reactivity'

defineProps({
	picUrl: String,
	name: String,
	playCount: Number,
	video: Boolean,
})

let showCount = ref(true)
</script>

<style scoped>
.cover-play-image {
	position: relative;
	cursor: pointer;
	overflow: hidden;
	transition-property: all;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-duration: 150ms;
}
.cover-play-image:hover {
	transform: translateY(-8px);
}
.el-image {
	border-radius: 0.5rem;
}
.play-count {
	position: absolute;
	bottom: 0.45rem;
	right: 0.25rem;
	display: flex;
	align-items: center !important;
	gap: 0 0.3rem;
	border-radius: 9999px;
	background-color: rgb(0 0 0);
	padding-left: 0.5rem;
	padding-right: 0.5rem;
	padding-top: 0.2rem;
	padding-bottom: 0.2rem;
	font-size: 0.55rem;
	line-height: 0.285rem;
	color: rgb(255 255 255);
	transition-property: all;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-duration: 150ms;
}
.mask {
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	top: 0px;
	right: 0px;
	bottom: 0.2rem;
	left: 0px;
	border-radius: 0.5rem;
	background: rgba(0 0 0 / 0.3);
	transition-property: all;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-duration: 500ms;
	color: rgb(255 255 255 / 1);
}
</style>