<template>
	<view class="h-100 bg-main overflow-auto">
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
			<Hynav :iconNavList="iconNavList" @navJump='navJump'></Hynav>
			<!-- 优惠卷 -->
			<hycoupon></hycoupon>
			<!-- 拼团 -->
			<Hydougn :dougnList="dougnList">
				<template slot="dough">
					<view>
						拼团
					</view>
				</template>
			</Hydougn>
			<!-- 最新列表 -->
			<Hylatest :latestList="latestList">
				<template slot="latestList">
					<view>最新列表</view>
				</template>
				<template slot="seeMore">
					<text class="text text-light-muted">查看更多</text>
				</template>
			</Hylatest>
			<!-- 热门推荐 -->
			<Hypopular :popularList="popularList">
				<template slot="popular">
					<view>热门推荐</view>
				</template>
				<template slot="viewAll">
					<text class="text text-light-muted">查看全部</text>
				</template>
			</Hypopular>
			<!-- 尾部图片-->
<!-- 			<footer class='position bottom-5 left-0 w-100'>
				<image src="@/static/noLogin.png" mode="" class="w-100"></image>
			</footer> -->
	</view>
</template>

<script>
	import http from '@/utils/http.js'
	import Hysearch from '@/components/i-search-bar/i-search-bar.vue'
	import Hynav from '@/components/i-icon-nav/i-icon-nav.vue'
	import Hycoupon from '@/components/i-coupon-list/i-coupon-list.vue'
	import Hydougn from '@/components/i-dougn-list/i-dougn-list.vue'
	import Hylatest from '@/components/i-latest-list/i-latest-list.vue'
	import Hypopular from '@/components/i-popular-list/i-popular-list.vue'
	export default {
		data() {
			return {
			 swiperList:[],	
			 iconNavList:[],
			 dougnList:[],
			 latestList:[],
			 popularList:[],
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
			this.dougnList=data[5].data
			this.latestList=data[5].data
			this.popularList=data[5].data
		    // console.log(this.latestList)
		},
		navJump(item){
			if(item==='考试'){
				this.$router.push('/pages/test-list/test-list')
			}
		}
		},
		components:{
			Hysearch,
			Hynav,
			Hycoupon,
			Hylatest,
			Hydougn,
			Hypopular
		}
	}
</script>

<style>

</style>
