<template>
  <view class="container">
    <view class="header px-2">
      <!-- 返回箭头 -->
      <view
        class="jiantou iconfont icon-fanhuijiantou"
        @click="goPrevpage"
      ></view>
    </view>
    <!-- 登录表单 -->
    <view class="login-wrapper">
      <view class="title" @click="handleSubmit">{{toggleStatus?'注册':'登录'}}</view>
      <uni-forms ref="form" :modelValue="formData" >
        <uni-forms-item name="username">
          <view class="login-input">
            <view class="icon-size"
              ><text class="iconfont icon-user"></text
            ></view>
           <input type="text" v-model="formData.username" placeholder="请输入用户名" />
          </view>
        </uni-forms-item>
        <uni-forms-item name="password">
          <view class="login-input">
            <view class="icon-size"
              ><text class="iconfont icon-mima"></text
            ></view>
            <input
              type="password"
              v-model="formData.password"
              placeholder="请输入密码"
            />
          </view>
        </uni-forms-item>
		<uni-forms-item name="repassword" v-show="toggleStatus === true">
			<view class="login-input">
			  <view class="icon-size"
			    ><text class="iconfont icon-mima"></text
			  ></view>
			  <input
			    type="password"
			    v-model="formData.repassword"
			    placeholder="请输入确认密码"
			  />
			</view>
		</uni-forms-item>
        <button class="login-button" @click="handleLogin">{{toggleStatus?'注册':'登录'}}</button>
      </uni-forms>
      <!-- 注册账号   忘记密码 -->
      <view class="regsiter-wrapper">
        <text @click="handleToggleStatus">{{toggleStatus?'去登录':'注册账号'}}</text>
        <text @click="handleForget">忘记密码?</text>
      </view>
      <!-- 微信 -->
      <view class="weixin-icon"
        ><text class="iconfont icon-weixin"></text
      ></view>
      <!-- 同意微信证书 -->
      <checkbox-group v-show="toggleStatus === false" name="checkbox" @change="handleCheckboxStatus">
        <label>
          <checkbox class="round red" :checked="checkboxStatus" style="transform: scale(0.8);" color="#5ccc84" value="checkbox1" />
          <text style="color: #a9a5b5" >已阅读并同意用户协议&隐私声明</text>
        </label>
      </checkbox-group>
    </view>
  </view>
</template>

<script>
import { navigator, switchTo } from "../../utils/navigate.js";
import UserModel from '@/api/userModel.js'
import { setItem } from '@/utils/storage.js'
export default {
  data() {
    return {
      	// 表单数据
			formData: {
				username: 'hanyang',
				password: '1996413'
			},
				rules: {
							// 对name字段进行必填验证
							username: {
								rules: [
									// {
									// required: true
									// 	errorMessage: '请输入姓名'
									// },
									// {
									// 	minLength: 3,
									// 	maxLength: 5,
									// 	errorMessage: '姓名长度在 {minLength} 到 {maxLength} 个字符'
									// }
								]
							},
							// 对password字段进行必填验证
							password: {
								rules: [
									{
										// required: true,
										// errorMessage: '请输入密码'
									},
									{
										format: 'password',
										errorMessage: '请输入正确的密码'
									}
								]
							},
							repassword: {
								rules: [
									{
										// required: true
										// 	errorMessage: '请输入密码'
									},
									{
										format: 'repassword',
										errorMessage: '请输入正确的密码'
									}
								]
							}
						},
      inputValue: "",
	  toggleStatus:true,
	  checkboxStatus:false
    };
  },
  onLoad() {
  	this.toggleStatus = false
  },
  methods: {// 触发提交表单
		handleLogin() {
			this.$refs.form
				.validate()
				.then(async res => {
					console.log('表单数据信息：', this.formData);
					const response = await UserModel.toLogin(this.formData)
					console.log(response)
					// 存储
				})
				.catch(err => {
					console.log('表单错误信息：', err);
				});
		},
		// 单个input
    onKeyInput: function (event) {
      this.inputValue = event.target.value;
    },
	/**
	* 切换登录/注册
	* 默认true为登录页，false为注册页
	 * */
	handleToggleStatus(){
		this.toggleStatus =!this.toggleStatus;
		this.formData = {}
	},
    // // 跳转到注册页面
    // handleToRegister() {
    //   navigator("/pages/register/register");
    // },
    // 返回上个页面
    goPrevpage() {
      // switchTo("/pages/mine/mine");
	  uni.navigateBack()
    },
	// 触发提交表单
	handleSubmit(){
			
		this.$refs.form.validate().then(res=>{
			console.log('表单数据===>', res);
			uni.showLoading({title: '提交中...',mask: false})
			this.toggleStatus === true ? this.handleLogin() : this.handleRegister()
		})
	},
	// 登录功能 
	async handleLogin(){
		try{
			if(!this.checkboxStatus){
				return uni.showToast({
					title:'请先阅读并同意用户协议&隐私声明',
					icon:'none',
					duration:3000
				})
			}
			delete this.formData.repassword
			const response = await UserModel.toLogin(this.formData)
			// console.log(response)
			this.formData = {}
			this.checkboxStatus = false 
	        this.$store.dispatch("setToken", response.token)
			uni.navigateBack({ delta:1 })
		} catch(err){
			console.log(err)
			
		} finally{
			uni.hideLoading()
		}
	},
	// 注册功能 --> 老师思路：克隆一份新的表单数据 传给后台 避免出现不必要的问题
	async handleRegister(){
		try{
		const response = await UserModel.toRegister(this.formData)
			if(response === '用户名已存在'){ return false }
			this.toggleStatus = true 
			this.formData = {}
			
		} catch(err){
		   console.log(err)
		} finally{
			uni.hideLoading()
		}
	},
	// 同意微信证书
	handleCheckboxStatus(e){
		this.checkboxStatus = e.detail.value.length > 0 ? true : false;
		// console.log(this.checkboxStatus)
	},
	// 忘记密码 
	handleForget() {},
	/**
	* 切换登录/注册
	* 默认true为登录页，false为注册页
	* */
	handleToggleStatus(){
		this.toggleStatus =! this.toggleStatus
		this.formData = {}
	}
  },
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.jiantou {
  display: flex;
  align-items: center;
  height: 96rpx;
  font-weight: 700;
  color: #ffffff;
  font-size: 40rpx;
}
.header {
  height: 230rpx;
  background-image: linear-gradient(120deg, #3bfdaf, #70d6f2);
}
.login-wrapper {
  position: relative;
  top: -36rpx;
  left: 0;
  right: 0;
  bottom: 0;
  border-top-left-radius: 40rpx;
  border-top-right-radius: 40rpx;
  height: calc(100vh - 230rpx);
  padding: 0 65rpx;
  z-index: 10;
  /* background-color: pink; */
  background-color: #ffffff;
}
.login-wrapper .title {
  height: 160rpx;
  display: flex;
  align-items: center;
  font-size: 46rpx;
  letter-spacing: 16rpx;
  box-sizing: border-box;
  color: #000000;
}
.login-input {
  border-radius: 12rpx;
  height: 100rpx;
  display: flex;
  align-items: center;
  border-radius: ;
  padding-right: 10rpx;
  background-color: #f5f5f5;
  color: #bec0cd;
  margin-bottom: 50rpx;
}
v-deep(.uni-input-input) {
	background-color: #f5f5f5 !important;
}
.login-input .icon-size {
  width: 100rpx;
  height: 100rpx;
  display: flex;
  color: #000;
  align-items: center;
  justify-content: center;
}
.uni-input {
  width: 490rpx;
}
.login-button {
  color: #ffffff;
  letter-spacing: 16rpx;
  background-color: #5ccc84;
}
.regsiter-wrapper {
  height: 165rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 34rpx;
}
.regsiter-wrapper text:nth-of-type(1) {
  color: #5ccc84;
}
.regsiter-wrapper text:nth-of-type(2) {
  color: #b1a5a0;
}
.weixin-icon {
  width: 107rpx;
  height: 107rpx;
  margin: auto;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border: 1rpx solid #5ccc84;
}
.icon-weixin {
  font-size: 70rpx;
  color: #5ccc84;
}

.checkbox {
  width: 34rpx;
  height: 34rpx;
  margin-right: 12rpx;
  border: 2rpx solid #5ccc84;
}
checkbox-group {
  height: 104rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26rpx;
}
</style>
