<template>
	<div class="screen">
		<div class="aside">
			<Menu />
		</div>
        <div>
            111
        </div>
	</div>
</template>

<script setup>
import Menu from '@/components/layout/menu/Menu.vue'
</script>

<style scoped>
.screen{
    display: flex;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    align-items: stretch;
}
.aside {
	width: 14rem;
	background-color: rgb(249 250 251);
}
</style>