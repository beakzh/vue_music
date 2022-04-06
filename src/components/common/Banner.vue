<template>
	<Swiper slides-per-group-auto slides-per-view="auto" :navigation="true" :grab-cursor="true">
		<SwiperSlide v-for="v in banners" :key="v.id">
			<img :src="v.pic" class="banner-image">
		</SwiperSlide>
	</Swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue.js'
import 'swiper/swiper.min.css'

defineProps({
	banners: Array,
})
</script>

<style scoped>
.swiper .swiper-slide {
	width: 32%;
	padding-left: 0.625rem;
	padding-right: 0.625rem;
}
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