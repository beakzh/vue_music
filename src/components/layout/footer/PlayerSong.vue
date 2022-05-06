<template>
	<div class="song">
		<img :src="song.al?.picUrl || OpticalDisk" alt="">
		<section>
			<div class="flex-1">
				<div v-if="songUrl.freeTrialInfo?.end > 0" class="audition">试听</div>
				<span>{{song.name || '开源云音乐'}}</span>
				<span> - {{ song.ar?.first().name || 'SmallRuralDog' }}</span>
			</div>
			<div class="flex-2">
				<IconPark :icon="Like" size="18" :stroke-width="3" class="hover-text" />
				<IconPark :icon="DownTwo" size="18" :stroke-width="3" class="hover-text" />
				<IconPark :icon="MoreTwo" size="18" :stroke-width="3" class="hover-text" />
				<el-badge :value="1000" :max="999" class="badge">
					<IconPark :icon="Comment" size="18" :stroke-width="3" class="hover-text" />
				</el-badge>
			</div>
		</section>
	</div>
</template>

<script setup>
import { OpticalDisk } from '@/assets/img'
import IconPark from '@/components/common/IconPark.vue'
import { Like, DownTwo, MoreTwo, Comment } from '@icon-park/vue-next'
import { computed } from 'vue'
import { useStore } from 'vuex'

let store = useStore()
let song = computed(_ => store.state.player.song)
let songUrl = computed(_ => store.state.player.songUrl)
</script>

<style scoped>
.song {
	display: flex;
	flex: 1 1 0%;
}
img {
	width: 3rem;
	height: 3rem;
	border-radius: 5px;
}
section {
	display: flex;
	flex-direction: column;
	gap: 10px 0px;
	margin-left: 0.5rem;
}
.flex-1 {
	display: flex;
}
.flex-1 > span {
	display: block;
	margin-right: 0.5rem;
}
.flex-1 span {
	font-size: 12px;
}
.flex-2 {
	display: flex;
	align-items: center;
	gap: 0px 10px;
}
.audition {
	--tw-scale-x: 0.75;
	--tw-scale-y: 0.75;
	font-size: 0.45rem;
	line-height: 1rem;
	padding-left: 0.125rem;
	padding-right: 0.125rem;
	color: rgb(255 255 255 / 1);
	background-color: rgb(239 68 68 / 1);
	border-radius: 0.25rem;
	transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate))
		skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
		scaleY(var(--tw-scale-y));
}
</style>