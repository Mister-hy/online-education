<template>
	<view class="container">
		<view class="container-top">
			<!-- 我的 -->
			<view class="title-wrapper px-2">
				<text>我的</text>
				<text class="circle"><uni-icons type="more-filled" color="white" size="30"></uni-icons></text>
			</view>
			<!-- 头像 -->
			<view class="mine-wrapper px-2">
				<view class="avatar"><image src="../../static/demo/icon/ask.png" mode=""></image></view>
				<view class="info">
					<view class="login" @click="handleToLogin">立即登录</view>
					<view class="loginMore">登录解锁更多功能</view>
				</view>
			</view>
			<!-- 导航 -->
			<view class="action-wrapper">
				<view class="action-item">
					<image src="../../static/mine-icons/order.png"></image>
					<text>订单</text>
				</view>
				<view class="action-item">
					<image src="../../static/mine-icons/message.png"></image>
					<text>消息</text>
				</view>
				<view class="action-item">
					<image src="../../static/mine-icons/stars.png"></image>
					<text>收藏</text>
				</view>
				<view class="action-item">
					<image src="../../static/mine-icons/study.png"></image>
					<text>在学</text>
				</view>
			</view>
		</view>
		<view class="container-bottom">
			<view class="container-action">
				<view class="action-left">
				<uni-icons custom-prefix="custom-icon" type="iconfont icon-youhuiquan1 icon_fontsize" color="#4396ec"></uni-icons>
					<text>我的优惠券</text>
				</view>
				<image class="action-right" src="../../static/mine-icons/jiantou.png"></image>
			</view>
			<view class="container-action">
				<view class="action-left">
				    <uni-icons custom-prefix="custom-icon" type="iconfont icon-wenhao icon_fontsize" color="#4396ec"></uni-icons>
					<text>常见问题</text>
				</view>
				<image class="action-right" src="../../static/mine-icons/jiantou.png"></image>
			</view>
			<view class="container-action">
				<view class="action-left">
					<uni-icons custom-prefix="custom-icon" type="iconfont icon-setting icon_fontsize" color="#4396ec"></uni-icons>
					<text>设置</text>
				</view>
				<image class="action-right" src="../../static/mine-icons/jiantou.png"></image>
			</view>
		</view>
	</view>
</template>

<script>
import { navigator } from '@/utils/navigate.js';
export default {
	data() {
		return {};
	},
	methods: {
		// 跳转到login页面
		handleToLogin() {
			navigator('/pages/login/login');
		}
	}
};
</script>

<style>
.container-top {
	position: relative;
	height: 480rpx;
	border-radius: 0 0 96rpx 96rpx;
	background-color: #5ccc84;
	margin-bottom: 80rpx;
}
.title-wrapper {
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 136rpx;
	color: #fff;
	font-size: 36rpx;
}
.title-wrapper .circle {
	font-weight: 500;
}
.mine-wrapper {
	height: 152rpx;
	display: flex;
	align-items: center;
}
.mine-wrapper .avatar image {
	width: 125rpx;
	height: 125rpx;
	margin-right: 50rpx;
	border-radius: 50%;
}
.mine-wrapper .info {
	color: #fff;
	display: flex;
	flex-direction: column;
	padding: 20rpx 0;
}
.mine-wrapper .login {
	font-size: 32rpx;
}
.mine-wrapper .loginMore {
	font-size: 24rpx;
	margin-top: 24rpx;
}
.action-wrapper {
	position: absolute;
	bottom: -20rpx;
	left: 0;
	right: 0;
	width: 710rpx;
	margin: auto;
	border-radius: 12rpx;
	height: 200rpx;
	background-color: #fff;
	display: flex;
	color: #6c757d;
	font-size: 22rpx;
	box-shadow: 0 1px 5px rgb(0 0 0 / 10%);
}
.action-item {
	width: 25%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
.action-item image {
	width: 60rpx;
	height: 60rpx;
	margin-bottom: 10rpx;
}
.container-bottom {
	width: 650rpx;
	height: 364rpx;
	margin: auto;
	background-color: #5ccc84;
}
.container-action {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 20rpx;
	height: 120rpx;
	font-size: 32rpx;
	border-bottom: 2rpx solid #f3f3f3;
	background-color: #ffffff;
}
.action-left {
	display: flex;
	align-items: center;
}
.action-right {
	width: 20rpx;
	height: 32rpx;
}
.icon_fontsize {
	font-size: 50rpx !important;
	margin-right: 16rpx;
}
</style>
