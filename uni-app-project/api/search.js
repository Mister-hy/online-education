import Http from '@/utils/http.js'

class SearchModel extends Http {
	// 搜索课程 /专栏
	static search(){
		return Http.request({
			url:'/mobile/search',
			method:'GET'
		})
	}
}

export default SearchModel