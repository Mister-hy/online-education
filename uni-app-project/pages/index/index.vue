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
			<!-- 拼团 -->
			<Hydougn></Hydougn>
			<!-- 最新列表 -->
			<Hylatest :latestList="latestList"></Hylatest>
	</view>
</template>

<script>
	import http from '@/utils/http.js'
	import Hysearch from '@/components/i-search-bar/i-search-bar.vue'
	import Hynav from '@/components/i-icon-nav/i-icon-nav.vue'
	import Hycoupon from '@/components/i-coupon-list/i-coupon-list.vue'
	import Hydougn from '@/components/i-dougn-list/i-dougn-list.vue'
	import Hylatest from '@/components/i-latest-list/i-latest-list.vue'
	export default {
		data() {
			return {
			 swiperList:[],	
			 iconNavList:[],
			 dougnList:[],
			 latestList:[],
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
			this.iconNavList=data[2].data
			this.latestList=data[5].data
		    console.log(this.latestList)
		}
		},
		components:{
			Hysearch,
			Hynav,
			Hycoupon,
			Hylatest,
			Hydougn
		}
	}
</script>

<style>

</style>
