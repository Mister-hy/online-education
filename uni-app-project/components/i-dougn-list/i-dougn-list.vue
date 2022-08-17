<template>
	<view class="bg-white mt-2">
		<view class="p-1">
			<!-- 	<text>拼团</text> -->
			<slot name="dough"></slot>
		</view>
		<scroll-view scroll-x>
			<view class="flex">
				<view class="dougn" v-for="(item,i) in dougnList">
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
		</scroll-view>
	</view>
</template>
<script>
	export default {
		props: {
			dougnList: Array
		}
	}
</script>

<style>

</style>
