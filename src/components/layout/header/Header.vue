<template>
	<header>
		<div class="flex-1">
			<IconPark :icon="Left" size="22" :stroke-width="2" class="icon-button" />
			<IconPark :icon="Right" size="22" :stroke-width="2" class="icon-button" />
			<div>
				<SearchPop />
			</div>
		</div>
		<div class="flex-2">
			<UserInfo />
			<IconPark :icon="Mail" size="18" :stroke-width="2" class="icon-button" />
			<IconPark :icon="Platte" size="18" :stroke-width="2" class="icon-button" />
			<IconPark :icon="HamburgerButton" size="18" :stroke-width="2" class="icon-button" />
		</div>
	</header>
</template>

<script setup>
import { HamburgerButton, Left, Mail, Platte, Right, Search } from '@icon-park/vue-next'
import IconPark from '@/components/common/IconPark.vue'
import SearchPop from './SearchPop.vue'
import UserInfo from './UserInfo.vue'
</script>

<style scoped>
header {
	display: flex;
	height: 3.5rem;
	align-items: center;
	justify-content: space-between;
	
}
.flex-1 {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-left: 1.25rem;
}
.flex-2 {
	display: flex;
	align-items: center;
	line-height: 0.5rem;
}
.icon-button {
	cursor: pointer;
	padding: 0.5rem;
}
.icon-button:hover {
	color: #2dd4bf;
}
</style>