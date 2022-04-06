<template>
	<div class="foot">
		<PlayerSlider />
		<div class="player">
			<PlayerSong />
			<PlayerController />
			<PlayerAction />
		</div>
	</div>
</template>

<script setup>
import PlayerSlider from './PlayerSlider.vue'
import PlayerSong from './PlayerSong.vue'
import PlayerController from './PlayerController.vue'
import PlayerAction from './PlayerAction.vue'
</script>

<style scoped>
.foot{
	padding-bottom: 0.5rem;
}
.player {
	display: flex;
	justify-content: space-between;
	padding-left: 1.25rem;
	padding-right: 1.25rem;
}
</style>