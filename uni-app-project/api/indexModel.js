import Http from '@/utils/http.js'

class IndexModel extends Http {
	// 获取首页接口数据
	static getMobileData() {
		return Http.request({
			url: '/mobile/index',
			method: 'GET'
		})
	}
	// 获取优惠券接口数据
	static getCouponData() {
		return Http.request({
			url: '/mobile/coupon',
			method: 'GET'
		})
	}
	// 获取拼团列表接口数据
	static getGroupData() {
		return Http.request({
			url: '/mobile/group',
			method: 'GET'
		})
	}
	// 获取秒杀列表接口数据
	static getFlashasleData() {
		return Http.request({
			url: '/mobile/flashsale',
			method: 'GET',
			data: {
				page: 1
			}
		})
	}
}

export default IndexModel
