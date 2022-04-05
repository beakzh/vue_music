<template>
	<div class="song">
		<img :src="OpticalDisk" alt="">
		<section>
			<div class="flex-1">
				<span>开源云音乐</span>
				<span> - SmallRuralDog</span>
			</div>
			<div class="flex-2">
				<IconPark :icon="Like" size="18" :stroke-width="3" class="icon-hover" />
				<IconPark :icon="DownTwo" size="18" :stroke-width="3" class="icon-hover" />
				<IconPark :icon="MoreTwo" size="18" :stroke-width="3" class="icon-hover" />
				<el-badge :value="1000" :max="999" class="badge">
					<IconPark :icon="Comment" size="18" :stroke-width="3" class="icon-hover" />
				</el-badge>
			</div>
		</section>
	</div>
</template>

<script setup>
import { OpticalDisk } from '@/assets/img'
import IconPark from '@/components/common/IconPark.vue'
import { Like, DownTwo, MoreTwo, Comment } from '@icon-park/vue-next'
</script>

<style scoped>
.song {
	display: flex;
	padding-left: 1.25rem;
	padding-right: 1.25rem;
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
.icon-hover:hover {
	cursor: pointer;
	color: #2dd4bf;
}
</style>