import Http from '@/utils/http.js'

class UserModel extends Http {
	// 账号登录
	static toLogin(data) {
		return Http.request({
			url: '/mobile/login',
			method: 'POST',
			data
		})
	}
	// 账号注册
	static toRegister(data) {
		return Http.request({
			url: '/mobile/reg',
			method: 'POST',
			data
		})
	}
	// 退出登录
	static loginOut() {
		return Http.request({
			url: '/mobile/logout',
			method: 'POST'
		})
	}
	// 获取手机验证码
	static getPhoneCode(data) {
		return Http.request({
			url: '/mobile/get_captcha',
			method: 'POST',
			data
		})
	}
	// 绑定手机号
	static bindingPhoneNumber() {
		return Http.request({
			url: '/mobile/bind_mobile',
			method: 'POST'
		})
	}
	// 找回密码
	static findPassword() {
		return Http.request({
			url: '/mobile/forget',
			method: 'POST'
		})
	}
	// 修改资料
	static editMeans() {
		return Http.request({
			url: '/mobile/update_info',
			method: 'POST'
		})
	}
	// 修改密码
	static editPassword() {
		return Http.request({
			url: '/mobile/update_password',
			method: 'POST'
		})
	}
	// 微信app/小程序/H5登录
	static weiXinLogin() {
		return Http.request({
			url: '/mobile/weixin_login',
			method: 'POST'
		})
	}
}

export default UserModel