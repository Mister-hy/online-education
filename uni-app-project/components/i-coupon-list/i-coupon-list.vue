<template>
	<view class="p-2">
		<scroll-view scroll-x="true" class="scroll-row">
			<view v-for="(item,i) in 3" :key="i" class="d-inline-flex text-white mr-3">
				<view class="flex align-center justify-center p-2 flex-column border-right-4 bg-hover-warning text-white border-right">
					<text>￥4.00</text>
					<text>适用课程：中级经济法-知识点精讲课</text>
				</view>
				<view class="flex align-center justify-center bg-warning  text-white  font-mg w-12 h4"  hover-class="bg-hover-warning">
				领取
		</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
</script>

<style>	

</style>