<template>
	<div class="screen">
		<div class="aside">
			<Menu />
		</div>
		<div class="main">
			<div>
				<Header />
			</div>
			<div>
				<el-scrollbar>
					<router-view />
				</el-scrollbar>
			</div>
			<div class="footer">
				<Footer />
			</div>
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
    position: relative;
	width: 100%;
	flex-direction: column;
	justify-items: center;
	padding-left: 1.25rem;
	padding-right: 1.25rem;
	padding-bottom: 6rem;
}
.footer{
    position: fixed;
    bottom: 0;
    left: 16rem;
    height: 6rem;
    width: 100%;
}
</style>