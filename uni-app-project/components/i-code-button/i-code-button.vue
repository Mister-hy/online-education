<template>
	<view  class="code-button bg-main text-white" hover-class="bg-main-hover" @click="handleSendCode" >
		 {{time  > 0 ? (time  + 's') : '发送'}}
	</view>
</template>

<script>
	import UserModel from '@/api/userModel.js'
	export default {
		name: "i-code-button",
		props:{
			phone:{
				type:String,
				default:''
			}
		},
		data(){
				
			return{
				time :0
			}
		},
		methods:{
			/**
			* 发送验证码方法
			*/
			   
		 async  handleSendCode(){
			   if(this.time > 0) { return }
			   uni.showLoading()
			   try{
				   const data = {
					   phone : this.phone
				   }
				   const response  = await UserModel.getPhoneCode(data)
				   uni.showToast({
				   	title: '验证码' + response,
				    icon : "none"
				   })
				   this.handleCountDown()
			   }catch(err){
				   console.log(err)
			   } finally{
				   uni.hideLoading()
			   }
		   },
		   /**
		   	* 倒计时方法
		    */
			   
		   handleCountDown(){
			   this.time = 5 
			   let timer = setInterval(()=>{
				this.time--
				if(this.timer <= 0){
					clearInterval()
				}
			   },1000)
		   }
		}
		}
</script>

<style>
	.code-button {
			position: absolute;
			right: 0;
			top: 0;
			bottom: 0;
			width: 200rpx;
			height: 100rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			border-top-right-radius: 10rpx;
			border-bottom-right-radius: 10rpx;
			font-size: 14px;
		}
</style>