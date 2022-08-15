const http = (data="", method="get",url="") => {
	uni.showLoading({
		title: "拼命加载中..."
	})
	return new Promise((resolve, reject) => {
		uni.request({
			url:'http://demonuxtapi.dishait.cn/mobile/index' ,
			data,
			method,
			timeout: 6000,
			header:{
				'appid':'bd9d01ecc75dbbaaefce'
			},
			success: (res) => {
				resolve(res.data)
				uni.hideLoading()
			},
			
			fail: (err) => {
				reject(err)
				uni.hideLoading()
			},
			
			complate() {
				console.log('请求完成')
				uni.hideLoading()
			}
		})
	})
}
export default http