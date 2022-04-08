<template>
	<footer>
		<PlayerSlider />
		<div class="player">
			<PlayerSong />
			<PlayerController />
			<PlayerAction />
		</div>
	</footer>
</template>

<script setup>
import PlayerSlider from './PlayerSlider.vue'
import PlayerSong from './PlayerSong.vue'
import PlayerController from './PlayerController.vue'
import PlayerAction from './PlayerAction.vue'
</script>

<style scoped>
footer{
	padding-bottom: 0.5rem;
}
.player {
	display: flex;
	justify-content: space-between;
	padding-left: 1.25rem;
	padding-right: 1.25rem;
}
</style>