<template>
	<view class="search-bar">
		<view class="search-bar-item py-2 flex align-center justify-center">
					  <icon type="search" size="18"/>
			<text class="title ml-2 font">请输入搜索的关键词</text>
		</view>
	</view>
</template>

<script>
	export default {
		// name:"i-search-bar",
		data() {
			return {
				
			};
		}
	}
</script>

<style>
.search-bar{
	width: 90%;
	margin: 0 auto;
	padding: 20rpx 10rpx;
}
.search-bar-item{
	height : 100%;
	background-color: #f5f5f3;
}
.search-bar-item .title{
	color : #7d7d7d;
}
</style>