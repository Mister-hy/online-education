<template>
	<view>
			<view class="login-back" @click="handleBackPage">
				<uni-icons color="#fff" type="back"></uni-icons>
			</view>
	
			<view class="login-bg"></view>
	
			<view class="login">
				<view class="flex">
					<text class="title">绑定手机号</text>
				</view>
	
				<view class="login-form">
					<uni-icons type="person"></uni-icons>
					<input type="text" v-model="form.phone" class="rounded font-md" placeholder="请输入手机号" />
				</view>
	
				<view class="login-form">
					<uni-icons type="locked"></uni-icons>
					<input type="text" v-model="form.code" class="rounded font-md" placeholder="请输入验证码" />
					<i-code-button></i-code-button>
				</view>
	
				<view class="login-button bg-main" hover-class="bg-main-hover" >
					绑定
				</view>
	
	
	
			</view>
		</view>
</template>

<script>
	export default {
		data(){
		 return{
			form: {
			 phone: '',
			 code: '',
			 }
			}
		 }	
		}
</script>

<style>
</style>