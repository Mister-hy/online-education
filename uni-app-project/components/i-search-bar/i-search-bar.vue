<template>
	<view class="search-bar py-2 px-1">
		<view class="search-bar-item py-2 flex align-center justify-center">
			<uni-icons color="#928E8A" type="search" size="20"></uni-icons>
			<text class="title ml-2 font">请输入搜索的关键词</text>
		</view>
	</view>
</template>

<script>
	export default {
		name:"i-search-bar",
		data() {
			return {
				
			};
		}
	}
</script>

<style>
.search-bar-item{
	height : 100%;
	background-color: #f5f5f3;
}
.search-bar-item .title{
	color : #7d7d7d;
}
</style>