<template>
	<view class="bg-white mt-2">
		<view class="flex justify-between p-1 align-center" >
			<slot name="latestList" class="h4">
			</slot>
			<slot name="seeMore">
			</slot>
		</view>
		<view class="" v-for="(item,i) in latestList" >
			<view class="flex p-2 h-20 ">
				<view class="col-6 flex">
					<image :src="item.cover" mode="" class="w-100 h-100 "></image>
				</view>
				<view class="col-6 flex flex-column p-1">
					<view class="text-ellipsis">
						{{item.title}}
					</view>
					<view class="flex mt-7 text-danger">
						 <text class="mr-1 font-lg">￥{{item.price}}</text>
						  <s class="text-dark mt-1">￥{{item.t_price}}</s>
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