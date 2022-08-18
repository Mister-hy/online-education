<template>
	<view class="searchHeader">
		<view class="headerImg" @click="goIndex">
			<uni-icons custom-prefix="custom-icon" type="back" size="30"></uni-icons>
		</view>
		<view class="headerSearch flex py-1 px-1">
			<uni-icons color="#928E8A" type="search" size="25"></uni-icons>
			<input type="text" placeholder="输入搜素关键词"/>
		</view>
		<view class="search">
			<text>搜素</text>
		</view>
	</view>
</template>

<script>
   export default {
	   data(){
		   return{
			   
		   }
	   },
	   methods:{
			   
		   goIndex(){
			   this.$emit('goIndex')
		   }
	   }
   }
</script>

<style scoped lang="scss">
	.searchHeader{
		height: 60rpx;
		margin: 14rpx 8rpx;
		box-sizing: border-box;
		display: flex;
		.headerSearch{
			width: 600rpx;
			background-color: #f6f9fb;
			border-radius: 72rpx;
			color: #ccc;
		}
		.search{
			width: 70rpx;
			height: 60rpx;
			text-align: center;
			// align-items: center;
			line-height: 60rpx;
		}
	}
</style>