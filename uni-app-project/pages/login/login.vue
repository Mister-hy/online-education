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
      <view class="title">登录</view>
      <uni-forms ref="form" :modelValue="formData" :rules="rules">
        <uni-forms-item name="username">
          <view class="login-input">
            <view class="icon-size"
              ><text class="iconfont icon-user"></text
            ></view>
            <input
              type="text"
              v-model="formData.username"
              placeholder="请输入姓名"
            />
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
        <button class="login-button" @click="handleLogin">登录</button>
      </uni-forms>
      <!-- 注册账号   忘记密码 -->
      <view class="regsiter-wrapper">
        <text @click="handleToRegister">注册账号</text>
        <text>忘记密码?</text>
      </view>
      <!-- 微信 -->
      <view class="weixin-icon"
        ><text class="iconfont icon-weixin"></text
      ></view>
      <!-- 同意微信证书 -->
      <checkbox-group name="checkbox">
        <label>
          <checkbox class="round red" value="checkbox1" />
          <text style="color: #a9a5b5">已阅读并同意用户协议&隐私声明</text>
        </label>
      </checkbox-group>
    </view>
  </view>
</template>

<script>
import { navigator, switchTo } from "../../utils/navigate.js";
export default {
  data() {
    return {
      	// 表单数据
			formData: {
				username: '',
				password: ''
			},
			rules: {
				// 对name字段进行必填验证
				username: {
					rules: [
						// {
						// 	required: true,
						// 	errorMessage: '请输入姓名'
						// },
						{
							minLength: 3,
							maxLength: 5,
							errorMessage: '姓名长度在 {minLength} 到 {maxLength} 个字符'
						}
					]
				},
				// 对email字段进行必填验证
				password: {
					rules: [
						// {
						// 	required: true,
						// 	errorMessage: '请输入邮箱'
						// },
						{
							format: 'email',
							errorMessage: '请输入正确的邮箱地址'
						}
					]
				}
			},
      inputValue: "",
    };
  },
  methods: {// 触发提交表单
		handleLogin() {
			this.$refs.form
				.validate()
				.then(res => {
					console.log('表单数据信息：', res);
				})
				.catch(err => {
					console.log('表单错误信息：', err);
				});
		},
		// 单个input
    onKeyInput: function (event) {
      this.inputValue = event.target.value;
    },
    // 跳转到注册页面
    handleToRegister() {
      navigator("/pages/register/register");
    },
    // 返回上个页面
    goPrevpage() {
      // switchTo("/pages/mine/mine");
	  uni.navigateBack()
    },
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
  top: -26rpx;
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
  border: 2rpx solid #2b7fd2;
}
checkbox-group {
  height: 104rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26rpx;
}
</style>
