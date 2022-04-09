<template>
	<div class="screen">
		<div class="aside">
			<Menu />
		</div>
		<div class="main">
			<Header />
			<div class="content">
				<el-scrollbar>
					<suspense>
						<div class="container mx-auto">
							<router-view />
						</div>
					</suspense>
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
	width: 15.5rem;
	min-width: 15.5rem;
	background-color: rgb(249 250 251);
}
.main {
	display: flex;
	width: 100%;
	height: 100%;
	flex-direction: column;
}
.content {
	box-sizing: border-box;
	flex: 1 1 0%;
	overflow: hidden;
	padding-left: 1.25rem;
}
:deep(.el-scroller) {
	height: 100%;
	overflow: hidden;
}
:deep(.el-scrollbar__wrap) {
	overflow: auto;
	height: 100%;
}
@media (min-width: 640px) {
	.container {
		max-width: 640px;
	}
}
@media (min-width: 768px) {
	.container {
		max-width: 768px;
	}
}
@media (min-width: 1024px) {
	.container {
		max-width: 1024px;
	}
}
@media (min-width: 1280px) {
	.container {
		max-width: 1280px;
	}
}
@media (min-width: 1536px) {
	.container {
		max-width: 1536px;
	}
}
</style>