<template>
	<view class="bg-white mt-2">
		<view class="flex justify-between p-1 align-center" >
			 <slot name="popular" class="h4">
			 </slot>
			 <slot name="viewAll">
			 </slot>
		</view>
		<view class="w-100 h-35 ">
		<view class="" v-for="(item,i) in popularList" >
			<view class="p-1">
			<view class="w-100 h-100">
				<img :src="item.cover" alt="" class="h-100 w-100">
			</view>
				<view class="text-ellipsis">
				 {{item.title}}
				</view>
				<view class="text-light-muted mt-2">
				 {{item.id}}人已抢
				</view>
				<view class="flex  text-danger">
				  <text class="mr-1 font-lg">￥{{item.price}}</text>
				   <s class="text-light-muted mt-1">￥{{item.t_price}}</s>
				</view>
				</view>
			</view>
		</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			popularList:Array
		}
	}
</script>

<style>
</style>