<template>
	<view class="container">
		<view class="class" v-for="item in cassList" :key="item.id">
			<view class="classHeader">
				<text>{{item.title}}</text>
				<text>时长:{{item.time}}</text>
			</view>
			<view class="classTotal">
				<text>题目总数:{{item.classTotal}}</text>
				<text>总分数:{{item.allTotal}}</text>
				<text>及格分:{{item.passing}}</text>
			</view>
			<view class="joinExam overflow-hidden">
				<view class="btn" @click="joinExam">{{item.joinExam?'参加考试':'考试已结束'}}</view>
				<!-- <uni-popup ref="popup" type="bottom">底部弹出 Popup</uni-popup> -->
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'testList',
		data(){
			return{
				cassList:[
					{title:'关于1+1',time:'60分钟',classTotal:4,allTotal:100,passing:60,id:1,joinExam:false},
					{title:'test',time:'60分钟',classTotal:0,allTotal:100,passing:60,id:2,joinExam:true},
					{title:'关于1+1',time:'60分钟',classTotal:10,allTotal:101,passing:61,id:3,joinExam:true},
					{title:'关于1+1',time:'60分钟',classTotal:11,allTotal:101,passing:61,id:4,joinExam:true}
				],
			}
		},
		methods:{
			joinExam(){
				  // this.$refs.popup.open('top')
				  console.log(this.$refs.popup)
			}
		}
	}
</script>

<style scoped lang="scss">
	.class{
		.classHeader{
		height: 100rpx;
		display: flex;
		line-height: 100rpx;
		justify-content: space-between;
		padding: 0 20rpx;
		border-bottom: 2rpx solid #fafafa;
		text:first-child{
			font-weight: bold;
		}
			
		text:last-child{
			font-size: 28rpx;
			color: red;
		}
		} 
		.classTotal{
			display: flex;
			justify-content: space-around;
			box-sizing: border-box;
			padding: 33rpx 22rpx;
			border-bottom: 2rpx solid #fafafa;
		}
		.joinExam .btn{
			float: right;
			margin: 20rpx;
			width: 175rpx;
			height: 65rpx;
			background-color: #68e999;
			line-height: 65rpx;
			color: #fff;
			text-align: center;
			border-radius: 16rpx;
		}
	}
</style>