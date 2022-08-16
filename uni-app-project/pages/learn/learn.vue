<template>
	<view class="container">
	  <view class="loginTeam">
	  	<image src="../../static/noLogin.png" mode=""></image>
		<text>登录后才可以查看我的学习哦</text>
		<view class="login" @click="login">立即登录</view>
	  </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			login(){
				this.$router.push('/pages/login/login')
			}
		}
	}
</script>

<style scoped lang="scss">
.container{
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	.loginTeam{
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		image{
			width: 350rpx;
			height: 350rpx;
		}
		text{
			color: #847592;
		}
		.login{
			    color: #353535;
			    border: 2rpx solid #353535;
			    background-color: rgba(0,0,0,0);
				height: 60rpx;
				width: 190rpx;
				border-radius: 16rpx;
				text-align: center;
				line-height: 60rpx;
				margin-top: 30rpx;
				font-size: 28rpx;
		}
	}
}
</style>
