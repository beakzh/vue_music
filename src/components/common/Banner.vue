<template>
	<Swiper slides-per-group-auto slides-per-view="auto" :navigation="true" :grab-cursor="true">
		<SwiperSlide v-for="v in banners" :key="v.bannerId">
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
.swiper{
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1;
}
.swiper-wrapper {
	position: relative;
	width: 100%;
	height: 100%;
	z-index: 1;
	display: flex;
    gap: 0 2rem;
	transition-property: transform;
	box-sizing: content-box;
}
.swiper .swiper-slide {
	padding-left: 0.625rem;
    padding-right: 0.625rem;
}
.swiper-slide {
	flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
    transition-property: transform;
}
@media (min-width: 1024px) {
	.swiper .swiper-slide {
		width: 50%;
	}
}
@media (min-width: 1280px) {
	.swiper .swiper-slide {
		width: 33.333333%;
	}
}
@media (min-width: 1536px) {
	.swiper .swiper-slide {
		width: 25%;
	}
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
</style>