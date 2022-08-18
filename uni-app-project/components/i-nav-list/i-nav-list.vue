<template>
	<view class="nav-wrapper">
		<view class="nav-item" v-for="(item, index) in navList" :key="index" @click="navItem(item.name)">
			<image :src="item.src"></image>
			<text>{{ item.name }}</text>
		</view>
	</view>
</template>

<script>
export default {
	name: 'i-nav-list',
	props: {
		navList: {
			type: Array,
			default: () => []
		}
	},
	data() {
		return {};
	},
		
	methods:{
		navItem(title){
			// alert(title)
			this.$emit('navJump',title)
		}
	}
};
</script>

<style>
.nav-wrapper {
	width: 100%;
	height: 308rpx;
	margin: 40rpx 0;
	display: flex;
	flex-wrap: wrap;
}
.nav-item {
	width: 25%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
.nav-item image {
	width: 70rpx;
	height: 70rpx;
	border-radius: 50%;
	padding: 10rpx 0;
}
.nav-item {
	color: #6c757d;
	font-size: 24rpx;
}
</style>
