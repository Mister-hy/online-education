// 基准地址
const baseUrl = 'http://demonuxtapi.dishait.cn/mobile'

// 封装api方法
const sendRequest = (params) => {
	console.log(params);
	return new Promise((resolve, reject) => {
		const appId = 'bd9d01ecc75dbbaaefce';
		uni.showToast({
			title: '拼命加载中...',
			icon: 'loading'
		})
		uni.request({
			url: baseUrl + params.url,
			method: params.method || 'GET',
			data: params.data || '',
			header: {
				appId
			},
			success: res => {
				console.log(res);
				resolve(res)
			},
			fail: err => {
				reject(err)
			}
		})
		uni.hideLoading()
	})
}

export default sendRequest


// import axios from '../node_modules/axios'

// // 创建axios实例
// const instance = axios.create({
// 	baseURL: 'http://demonuxtapi.dishait.cn/mobile',
// 	timeout: 10000
// });

// // 请求拦截器
// instance.interceptors.request.use(function(config) {
// 	return config;
// }, function(error) {
// 	return Promise.reject(error);
// });


// // 响应拦截器
// instance.interceptors.response.use(function(response) {
// 	return response;
// }, function(error) {
// 	return Promise.reject(error);
// });

// // 导出axios实例
// export default instance
