<template>
	<view class="container">
			<!-- 搜索框 -->
		<!-- <f-search-bar></f-search-bar> -->
		<Hysearch></Hysearch>
			<!-- 轮播图 -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" style="height: 310rpx;">
			<swiper-item v-for="(item,i) in swiperList" :key="i" class="swiper-image">
				<image :src="item.src" mode="" style="height: 300rpx;width: 100%;"></image>
			</swiper-item>
		</swiper>
			<!-- 图标分类 -->
			<!-- <icon-nav :iconNavList="iconNavList"> </icon-nav> -->
			<Hynav :iconNavList="iconNavList"></Hynav>
			<!-- 优惠卷 -->
			<hycoupon></hycoupon>
			
	</view>
</template>

<script>
	import http from '@/utils/http.js'
	import Hysearch from '@/components/i-search-bar/i-search-bar.vue'
	import Hynav from '@/components/i-icon-nav/i-icon-nav.vue'
	import Hycoupon from '@/components/i-coupon-list/i-coupon-list.vue'
	export default {
		data() {
			return {
			 swiperList:[],	
			 iconNavList:[]
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
			console.log(data)
			this.swiperList=data[1].data
			this.iconNavList=data[2].data
			// console.log(this.iconNavList)
		}
		},
		components:{
			Hysearch,
			Hynav,
			Hycoupon
		}
	}
</script>

<style>

</style>
