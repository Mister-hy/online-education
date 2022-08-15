<template>
	<view class="container">
			<!-- 搜索框 -->
		<f-search-bar></f-search-bar>
			<!-- 轮播图 -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" style="height: 310rpx;">
			<swiper-item v-for="(item,index) in swiperList" :key="index" class="swiper-image">
				<image :src="item.src" mode="" style="height: 300rpx;"></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import http from '@/utils/http.js'
	export default {
		data() {
			return {
			 swiperList:[],	
			}
		},
		onLoad() {

		},
	    created() {
			this.getData()
		},
		methods: {
		// 首页数据
        async getData(){
			let {data} = await http()
			// console.log(data)
			this.swiperList=data[1].data
			console.log((this.swiperList))
		}
		},
		components:{
			// iSearchBar
		}
	}
</script>

<style>

</style>
