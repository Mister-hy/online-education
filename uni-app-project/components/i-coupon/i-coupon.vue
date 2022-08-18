<template>
	<scroll-view class="coupon-wrapper" scroll-x="true">
		<view class="coupon-item" v-for="(item, index) in couponList" :key="item.goods_id">
			<view class="coupon-info">
				<view class="price">￥{{ item.price }}</view>
				<view class="content">适用课程：{{ item.value.title }}</view>
			</view>
			<view class="coupon-get">领取</view>
		</view>
	</scroll-view>
</template>

<script>
export default {
	name: 'i-coupon',
	props: {
		couponList: {
			type: Array,
			default: () => []
		}
	},
	data() {
		return {};
	}
};
</script>

<style>
.coupon-wrapper {
	width: 100%;
	padding: 0 20rpx;
	white-space: nowrap;
	margin-bottom: 20rpx;
}
.coupon-item {
	display: inline-flex;

	min-width: 310rpx;
	height: 132rpx;
	color: #fff;
	margin-right: 30rpx;
}
.coupon-info {
	padding: 18rpx 28rpx;
	text-align: center;
	background-color: #d39e00;
	border-right: 4rpx dashed #ffffff;
}
.coupon-get {
	width: 116rpx;
	height: 132rpx;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #ffc107;
	font-size: 28rpx;
}
.coupon-info .price {
	font-size: 32rpx;
}
.coupon-info .content {
	font-size: 24rpx;
}
</style>
