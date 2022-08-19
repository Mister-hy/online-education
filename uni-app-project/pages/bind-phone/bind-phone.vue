<template>
	<view class="container">
    <view class="header px-2" @click="handleBackPage">
      <!-- 返回箭头 -->
      <view
        class="jiantou iconfont icon-fanhuijiantou"
      ></view>
	  </view>
	  <!-- 登录表单 -->
	  <view class="login-wrapper">
		  <text class="title">绑定手机号</text>
		   <uni-forms ref="phoneForm" :modelValue="phoneData" >
			    <uni-forms-item name="phone">
					<view class="login-input">
					  <view class="icon-size"
					    ><text class="iconfont icon-user"></text
					  ></view>
					 <input type="text" v-model="phoneData.phone" placeholder="请输入手机号" />
					</view>
				</uni-forms-item>
				<uni-forms-item name="code">
					<view class="login-input">
					  <view class="icon-size"
					    ><text class="iconfont icon-mima"></text
					  ></view>
					 <input type="text" v-model="phoneData.code" placeholder="请输入验证码" />
					 <i-code-button :phone='phoneData.phone'></i-code-button>
					</view>
				</uni-forms-item>
			   <button class="login-button"  @click="handleSubmitForm">绑定</button>
			</uni-forms>
	  </view>
	</view>
</template>

<script>
	import UserModel from '@/api/userModel.js'
	import {switchTo} from '@/utils/navigate.js'
	export default {
		data(){
		 return{
			phoneData: {
			 phone: '',
			 code: '',
			 }
			}
		 },
			 
		 methods:{
			 /**
			 * 返回上一页
			*/
			 handleBackPage(){
				 uni.navigateBack({
					 delta:1
				 })
			 },
			/**
			* 提交表单数据
			*/	 
			async handleSubmitForm(){
				 uni.showLoading({
				 	title:'提交中...',
					mask:false
				 })
				 try{
					const response = await UserModel.bindingPhoneNumber(this.phoneData)
					uni.showToast({
						title:'绑定成功',
						icon:'none',
					})
					this.resetFrom()
					setTimeout(function() {
						switchTo('/pages/mine/mine')
					}, 350);
				 } catch(err){
					 console.log(err)
				 } finally{
					 uni.hideLoading()
				 }
			 },
			 /**
			 * 清空表单方法
			 */
			resetFrom(){
				this.phoneData = {
					phone:'',
					code:''
				}
			}
		 }
		}
</script>

<style>
	.login-wrapper .title {
	  height: 160rpx;
	  display: flex;
	  align-items: center;
	  font-size: 32rpx;
	  letter-spacing: 16rpx;
	  box-sizing: border-box;
	  color: #000000;
	}
</style>