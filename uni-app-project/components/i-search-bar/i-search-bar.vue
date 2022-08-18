<template>
	<view class="search-bar-item my-2 flex align-center justify-center" @click="handleToSearchPage">
		<view class="search-wrapper py-2 flex px-1">
			<uni-icons color="#928E8A" type="search" size="20"></uni-icons>
			<text class="title ml-2 font">请输入搜索关键字</text>
		</view>
	</view>
</template>

<script>
import { navigator } from '../../utils/navigate.js';
export default {
	name: 'i-search-bar',
	data() {
		return {};
	},
	methods: {
		// 跳转到搜索页面
		handleToSearchPage() {
			navigator('/pages/serach/serach');
		}
	}
};
</script>

<style>
.search-bar-item {
	margin: 28rpx 20rpx;
}
</style>
