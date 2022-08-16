<template>
	 <view class="container">
	<view class="loginHeader">
		<!-- <view class="img">
			<image src="../../static/demo/icon/小于号.png" mode=""></image>
		</view> -->
	</view>
	<view class="login">
		<view class="login-from">
			<view class="h3 mb-5">
				登录
			</view>
			<view class="from-username">
				<input class="from-ipt"  placeholder="请输入用户名">
				</input>
				<view class="userImg">
					<image src="../../static/tabbar/my.png" mode=""></image>
				</view>
			</view>
			
			<view class="from-username">
				<input class="from-ipt"  placeholder="请输入密码">
				</input>
				<view class="userImg">
					<image src="../../static/tabbar/learn.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="loginSubmit">
			<text>登录</text>
		</view>
		<view class="flex justify-between mt-7">
			<text class="text-success">注册账号</text>
			<text class="wPwd">忘记密码?</text>
		</view>
		<view class="WeChat">
			<view class="image">
				<image src="../../static/demo/icon/wx.png" mode=""></image>
			</view>
		</view>
	</view>
	<view class="footer">
		<checkbox></checkbox>
		<text>已阅读并同意用户协议&隐私声明</text>
	</view>
		</view>
</template>

<script>
</script>

<style scoped lang='scss'>
	.loginHeader{
		position: relative;
		height: 220rpx;
	    background-image: linear-gradient(120deg,#3bfdaf,#70d6f2);
		.img{
			width: 54rpx;
			height:54rpx;
			background-color: #fff;
			image{
				width: 100%;
				height: 100%;
			}
		}
	}
	.login{
		border-top-left-radius: 15px;
		border-top-right-radius: 15px;
		box-sizing: border-box;
		padding: 55rpx 70rpx;
		.login-from {
			.from-username{
				margin-bottom: 50rpx;
				width: 615rpx;
				height: 100rpx;
				border-radius: 8rpx;
				background-color: #f5f5f5;
				padding-left: 100rpx;
				box-sizing: border-box;
				position: relative;
				line-height: 100rpx;
				.from-ipt{
					padding-top: 30rpx;
				}
		}
		.userImg{
				width: 33rpx;
				height: 36rpx;
				position: absolute;
				top: 10rpx;
				left: 35rpx;
				image{
					width: 100%;
					height: 100%;
				}
			}
		}
		.loginSubmit{
			height: 100rpx;
			background-color: #5bcb86;
			text-align: center;
			color: #fff;
			line-height: 100rpx;
			border-radius: 16rpx;
		}
		.WeChat{
			margin-top: 70rpx;
			height: 100rpx;
			display: flex;
			justify-content: center;
			.image{
				width: 100rpx;
				height: 100rpx;
				border: 2px solid #4ec079;
				border-radius: 50%;
				display: flex;
				justify-content: center;
				image{
					width: 50rpx;
					height: 40rpx;
					margin-top: 30rpx;
				}
			}
		}
		.wPwd{
			color: #a09e99;
		}
	}
	.footer{
		margin: 0 auto;
		width: 550rpx;
		text{
			margin-left: 10rpx;
			color: #a09e99;
		}
	}
</style>