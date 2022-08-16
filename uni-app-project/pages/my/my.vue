<template>
	<view class="container">
	   <view class="home-bg">
	   	 <view class="userHeader">
	   	 	<view class="headerImg">
	   	 		<!-- <image src="" mode=""></image> -->
	   	 	</view>
			<view class="headerText">
				<text @click="signNow">立即登录</text>
				<text class="g">登录结算更多功能</text>
			</view>
	   	 </view>
	   </view>
	   <view class="order">
	   		<view class="li" v-for="item in orderList" :key="item.id">
	   			<i :class="item.icon"></i>
	   			<text>{{item.title}}</text>
	   		</view>   
	   </view>
	 <view class="my-content">
	 	<view class="li">
			<view class="">
				<i class='iconfont icon-huodong1'></i>
				 <text>我的优惠卷</text>
			</view>
	 	<view class="">
	 		>
	 	</view>
	 	</view>
		<view class="li">
			<view class="">
				<i class='iconfont icon-pintuan'></i>
				 <text>常见问题</text>
			</view>
		<view class="">
			>
		</view>
		</view>
	<view class="li">
		<view class="">
			<i class='iconfont icon-miaosha1'></i>
			 <text>设置</text>
		</view>
	<view class="">
		>
	</view>
	</view>
	 </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				orderList:[
					{title:'订单',icon:'iconfont icon-huodong1',id:1},
					{title:'消息',icon:'iconfont icon-pintuan',id:2},
					{title:'收藏',icon:'iconfont icon-miaosha1',id:3},
					{title:'在学',icon:'iconfont 	icon-xuexi',id:4},
				]
			}
		},
		methods: {
			signNow(){
				// alert(1)
				this.$router.push('/pages/login/login')
			}
		},
		created() {
			console.log(this.orderList)
		}
	}
</script>

<style>
	
.home-bg{
    background-color: #5ccc84;
    height: 350rpx;
	width: 100%;
    border-bottom-left-radius: 120rpx;
    border-bottom-right-radius: 120rpx;
	display: flex;
	z-index: 10 !important;
}
.userHeader{
	padding: 40rpx 30rpx;
	display: flex;
}
.headerImg{
	height: 100rpx;
	width: 100rpx;
	border-radius: 50%;
	border: 2rpx solid red;
}
..headerImg image{
	width: 100%;
	height: 100%;
}
.headerText{
	display: flex;
	flex-direction: column;
	padding-top: 20rpx;
	padding-left: 20rpx;
	color: #fff;
}
.g{
	margin-top: 10rpx;
	font-size: 13rpx;
}
.order{
	margin: -80rpx auto 0;
	width: 90%;
	display: flex;
	border-radius: 8rpx;
	box-shadow: 10rpx 4rpx 4rpx #ccc;
	z-index: 20 !important;
}
.order .li{
	flex: 1;
	height: 150rpx;
	text-align: center;
	line-height: 150rpx;
}
.my-content .li{
	display: flex;
	justify-content: space-between;
	height: 110rpx;
	border-top: 2rpx solid #ccc;
	line-height: 110rpx;
	padding: 20rpx 60rpx;
	box-sizing: border-box;
}
.my-content .li i{
	margin-right: 10rpx;
	color: skyblue;
}
</style>
