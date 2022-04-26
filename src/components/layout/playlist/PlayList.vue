<template>
	<el-drawer v-model="showPlayList" size="320px" :with-header="false">
		<div class="play-list">
			<div>
				<div class="list-text">播放列表</div>
				<div class="total-song">
					<div>共 {{0}} 首歌曲</div>
					<div class="op hover-text">
						<IconPark :icon="Delete" style="position:relative;top:0.15rem" />
						<span>清空</span>
					</div>
				</div>
			</div>
		</div>
	</el-drawer>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import IconPark from '@/components/common/IconPark.vue'
import { Delete } from '@icon-park/vue-next'

let store = useStore()
let showPlayList = computed({
	get: () => store.state.player.showPlayList,
	set: v => (store.state.player.showPlayList = v),
})
</script>

<style scoped>
.list-text {
	font-size: 1.35rem;
	margin-bottom: 0.5rem;
}
.total-song {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.op {
	color: rgb(148 163 184);
}
</style>