<template>
	<view class="container">
		<!-- 点击搜索框跳转 -->
		<i-search-bar></i-search-bar>
		<!-- 轮播图展示 -->
		<i-swiper :swiperList="swiperList"></i-swiper>
		<!-- 导航数据展示 -->
		<i-nav-list :navList="navList" @navJump='navJump'></i-nav-list>
		<!-- 优惠券专区 -->
		<i-coupon :couponList="couponList"></i-coupon>
		<!-- 拼团列表 -->
		<view class="group-wrapper" :scroll-x="true">
			<view class="group-title">{{ group_Or_flashsale_Status.listType === 'group' ? '拼团' : '秒杀' }}</view>
			<view class="group-list">
				<view class="group-item" v-for="(item, index) in groupList_Or_flashsaleList" :key="item.group_id">
					<image :src="item.cover"></image>
					<view class="group-content">
						<view>{{ item.title }}</view>
						<text class="text-red">{{ item.price }}</text>
						<text class="text-gray">{{ item.t_price }}</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 最新列表 -->
		<view class="new-wrapper">
			<view class="px-2 py-3 flex justify-between align-center">
				<view class="newTitle">最新列表</view>
				<view class="watchMore">查看更多</view>
			</view>
			<view class="new-item flex justify-between px-2" v-for="(item, index) in newList" :key="item.id">
				<view class="mr-2"><image :src="item.cover" mode="scaleToFill"></image></view>
				<view class="info">
					<view class="title">{{ item.title }}</view>
					<view class="price">
						<text class="text-red">￥{{ item.price }}</text>
						<text class="text-gray">￥{{ item.t_price }}</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 底部广告 -->
		<image class="end_image" :src="imageAd"></image>
	</view>
</template>

<script>
import sendRequest from '@/utils/request.js';
import IndexModel from '@/api/indexModel.js';
import {navigator} from '@/utils/navigate.js'
export default {
	data() {
		return {
			// 轮播图数据
			swiperList: [],
			// 导航数据
			navList: [],
			// 优惠券数据
			couponList: [],
			// 拼团列表 || 秒杀列表
			groupList_Or_flashsaleList: [],
			group_Or_flashsale_Status: {},
			listData: {
				usable: 1
			},
			// 最新列表数据
			newList: [],
			// 首页底部image
			imageAd: ''
		};
	},
	async onLoad() {
		await this.getMobileData();
		await this.getCouponData();
		await this.getFlashasleOrGroupData();
		await this.getGroupData();
	},
	methods: {
		// 获取首页数据
		async getMobileData() {
			try {
				const res = await IndexModel.getMobileData();
				console.log(res);
				this.swiperList = res[1].data;
				this.navList = res[2].data;
				this.group_Or_flashsale_Status = {
					listType: res[4].listType,
					type: res[4].type
				};
				this.newList = res[5].data;
				this.imageAd = res[6].data;
			} catch (e) {
				//TODO handle the exception
				console.log(e);
			}
		},
		// 获取优惠券数据
		async getCouponData() {
			const res = await IndexModel.getCouponData();
			// console.log(res);
			this.couponList = res;
		},
		// 获取拼团列表
		async getGroupData() {
			const res = await IndexModel.getGroupData();
			// console.log(res);
			this.groupList_Or_flashsaleList = res.rows;
		},
		// 获取秒杀列表 || 获取拼团列表
		async getFlashasleOrGroupData() {
			const res = this.group_Or_flashsale_Status.listType === 'group' ? await IndexModel.getCouponData(this.listData) : await IndexModel.getFlashasleData();
			console.log(res.rows);
			this.groupList_Or_flashsaleList = res.rows;
		},
		navJump(item){
			if(item != "考试") return 
			navigator('/pages/testList/testList')
		}
	},
};
</script>

<style>
.search-bar-item {
	color: rgb(146, 142, 138);
	border-radius: 10rpx;
	background-color: #f5f5f1;
}
.uni-margin-wrap {
	width: 100%;
	padding: 0 40rpx;
	box-sizing: border-box;
}

.group-wrapper {
	padding: 0 20rpx;
	height: 470rpx;
	/* background-color: pink; */
	border-top: 18rpx solid #f5f5f3;
	border-bottom: 18rpx solid #f5f5f3;
}
.group-list {
	display: flex;
	flex-wrap: nowrap;
	overflow-x: auto;
}
.group-title {
	font-size: 32rpx;
	font-weight: 700;
	height: 100rpx;
	line-height: 100rpx;
}
.group-item {
	height: 320rpx;
}
.group-item image {
	width: 340rpx;
	height: 190rpx;
}
.group-content view {
	font-size: 28rpx;
	width: 330rpx;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.group-content .text-red {
	font-size: 26rpx;
	margin-right: 10rpx;
}
.group-content .text-gray {
	font-size: 24rpx;
	text-decoration: line-through;
}

/* 最新列表 */
.new-wrapper {
	width: 100%;
}
.new-item {
	padding: 18rpx;
}
.new-item image {
	width: 310rpx;
	height: 180rpx;
}
.new-item .title {
	width: 380rpx;
	font-size: 32rpx;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
}
.new-item .info {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 4rpx 0;
}
.text-red {
	font-size: 32rpx;
	color: #dc3545;
}
.text-gray {
	color: #bbbbbb;
	font-size: 24rpx;
}
.newTitle {
	font-weight: 700;
	font-size: 32rpx;
}
.watchMore {
	font-size: 28rpx;
	color: #ccc;
}
.end_image {
	width: 100%;
	height: 350rpx;
}
</style>
