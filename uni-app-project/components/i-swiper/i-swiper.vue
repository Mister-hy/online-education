<template>
	<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
		<swiper-item v-for="(item, index) in swiperList" :key="item.src"><image :src="item.src"></image></swiper-item>
	</swiper>
</template>

<script>
export default {
	props: {
		swiperList: {
			type: Array,
			default: () => []
		}
	},
	name: 'i-swiper',
	data() {
		return {};
	}
};
</script>

<style>
swiper {
	width: 100%;
}
swiper swiper-item {
	padding: 0 20rpx;
	width: 100%;
	height: 100%;
	box-sizing: border-box;
}
swiper swiper-item image {
	width: 100%;
	height: 100%;
	overflow: hidden;
	border-radius: 18rpx;
}
</style>
