<template>
	<div class="player-slider">
		<el-slider :show-tooltip="false" :min="0" />
	</div>
</template>

<script setup>
</script>

<style scoped>
:deep(.el-slider){
	height: 30px;
}
:deep(.el-slider__button-wrapper) {
	width: 4px;
	height: 4px;
}
:deep(.el-slider__button){
	position: absolute;
	width: 0px;
	height: 0px;
	top: 15.5px;
	left: 0px;
}
:deep(.el-slider__button:hover){
	width: 10px;
	height: 10px;
}
:deep(.el-slider__runway) {
	height: 4px;
}
</style>