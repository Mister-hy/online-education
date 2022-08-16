<template>
	<view class="flex flex-wrap py-2 bg-white">
		<view  @click="navGo(item.name)"  v-for="(item,i) in iconNavList" :key="i" class="flex flex-column align-center justify-center py-1" style="width: 25%;"  hover-class="bg-light">
			<image :src="item.src" mode="widthFix" style="width: 70rpx;height: 70rpx;border-radius: 100%;"></image>
			<text class="font-sm text-muted mt-1">{{ item.name }}</text>
		</view>
	</view>
</template>

<script>
	export default {
			// name:"icon-nav",
			props:{
				iconNavList:Array
			},
			data(){
				return{
					
				}
			},
				
			methods:{
					
				navGo(name){
					this.$emit('navJump',name)
				}
			}
	}
</script>

<style>
</style>