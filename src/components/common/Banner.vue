<template>
	<Swiper slides-per-group-auto slides-per-view="auto" :navigation="true" :grab-cursor="true">
		<SwiperSlide v-for="v in banners" :key="v.id">
			<img :src="v.pic" class="banner-image">
		</SwiperSlide>
	</Swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

defineProps({
	banners: Array,
})
</script>

<style scoped>
.banner-image {
	cursor: pointer;
	border-radius: 0.5rem;
	-o-object-fit: cover;
	object-fit: cover;
	transition-property: all;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-duration: 150ms;
}
img {
	max-width: 100%;
	height: auto;
}
</style>