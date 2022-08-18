import configObj from '../config/config.js'
import exceptionMessage from '../exceptionMessage/http_message.js'

class Http {
	// 请求拦截器
	static async _beforeRequest(config) {
		config.header = {
			token: 'hello world',
			appid: configObj.appid
		}
		return config
	}

	static async request({url,method = 'GET',data = {},header = {},...options}) {
		console.log('options=>', options); // 多余的参数
		const config = await Http._beforeRequest({url,method,data,header,...options})
		config.url = configObj.baseUrl + config.url
		const response = await uni.request(config)
		return await Http._afterResponse(response)
	}

	// 响应拦截器
	static async _afterResponse(response) {
		const [error, res] = response;
		// 请求失败
		if (res.statusCode !== 200 || res.data.msg === 'fail') {
			Http._showError(res.statusCode, res.data.data)
		}

		// token过期处理

		return res.data.data
	}

	// 请求错误信息提示
	static _showError(code, msg) {
		let title = ''
		title = exceptionMessage[code] || msg || '发生未知错误'
		uni.showToast({
			title,
			icon: 'none',
			duration: 3000
		})
	}
}

export default Http
