<template>
	<view class="">
		<i-search-histroy @goIndex="goIndex"></i-search-histroy>
		 <view class="search-history">
			   <view class="history-set">
			         <text>搜索历史</text>
			         <text bindtap="delHistory">删除</text>
			    </view>
		 </view>
		    <!-- 搜素结果 -->
		    <view class="result">
		       <view  class="result-item">
		         <view class="item">1</view>
		         <view>2</view>
		       </view>
		     </view>
	</view>

</template>

<script>
import  {switchTo}  from '@/utils/navigate.js'
export default {
	data() {
		return {};
	},
	methods: {
		//跳转到首页
		goIndex(){
			switchTo('/')
		}
	}
};
</script>

<style scoped lang="scss">
	.history-set {
	  display: flex;
	  line-height: 80rpx;
	  justify-content: space-between;
	  box-sizing: border-box;
	  padding: 0 20rpx;
	  font-size: 26rpx;
	  color: #333;
	  border-bottom: 1px solid #ccc;
	}
	.result-item {
	  display: flex;
	  justify-content: space-between;
	  border-bottom: 1px solid #ccc;
	  box-sizing: border-box;
	  padding: 0 30rpx;
	  align-items: center;
	}
	.result-item .item {
	  width: 700rpx;
	  white-space: nowrap;
	  overflow: hidden;
	  text-overflow: ellipsis;
	  line-height: 80rpx;
	  font-size: 28rpx;
	  color: #333;
	}
</style>
