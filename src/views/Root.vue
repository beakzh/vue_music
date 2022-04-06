<template>
	<div class="screen">
		<div class="aside">
			<Menu />
		</div>
		<div class="main">
			<Header />
			<div class="content">
				<el-scrollbar>
					<router-view />
				</el-scrollbar>
			</div>
			<Footer />
		</div>
	</div>
</template>

<script setup>
import Menu from '@/components/layout/menu/Menu.vue'
import Header from '@/components/layout/header/Header.vue'
import Footer from '@/components/layout/footer/Footer.vue'
</script>

<style scoped>
.screen {
	display: flex;
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	align-items: stretch;
}
.aside {
	width: 16rem;
	min-width: 16rem;
	background-color: rgb(249 250 251);
}
.main {
	display: flex;
	width: 100%;
	height: 100%;
	flex-direction: column;
	padding-left: 1.25rem;
	padding-right: 1.25rem;
}
.content{
	flex: 1 1 0%;
	overflow: hidden;
}
:deep(.el-scroller){
	height: 100%;
	overflow: hidden;
}
:deep(.el-scrollbar__wrap){
	overflow: auto;
    height: 100%;
}
</style>