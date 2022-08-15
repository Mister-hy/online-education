<template>
	<view class="container">
		<view class="flex justify-between p-1 align-center" >
			 <view class="h4">
			 	最新列表
			 </view>
			 <text class="text text-light-muted ">查看更多</text>
		</view>
		<view class="" v-for="(item,i) in latestList" key="i">
			<view class="flex p-2 h-20 ">
				<view class="col-6 flex">
					<image :src="item.cover" mode="" class="w-100 h-100 "></image>
				</view>
				<view class="col-6 flex flex-column p-1">
					<view class="text-ellipsis">
						{{item.title}}
					</view>
					<view class="flex mt-8">
						 <text>￥{{item.price}}</text>
						  <text>￥{{item.t_price}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			latestList:Array
		}
	}
</script>

<style>
</style>