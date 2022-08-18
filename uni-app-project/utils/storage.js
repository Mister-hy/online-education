//存储数据
export const setItem = (key, value) => {
	if (typeof key === 'object') {
		value = JSON.stringify(value)
	}
	uni.setStorage({
		key: key,
		data: JSON.stringify(value),
	})
}

//获取数据
export const getItem = (key) => {
	const data = uni.getStorageSync(key)
	try {
		return JSON.parse(data)
	} catch (err) {
		return data
	}
}

//删除数据
export const removeItem = (key) => {
	uni.removeStorageSync(key);
}
