<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import url("@/common/styles/free.css");
	@import url("@/common/styles/animate.min.css");
	@import url("@/common/iconfont/iconfont.css");
	@import url("@/common/styles/common.css");
	/* icon阿里巴巴矢量库图标 */
	@import url('@/static/iconfont/iconfont.css');
	//设置圆角
	checkbox.round .wx-checkbox-input,
	checkbox.round .uni-checkbox-input {
		border-radius: none;
		width: 30rpx;
		height: 30rpx;
	}
	//设置背景色
	checkbox.red[checked] .wx-checkbox-input,
	checkbox.red.checked .uni-checkbox-input {
		background-color: #e54d42 !important;
		border-color: #e54d42 !important;
		color: #ffffff !important;
	}
	// 去除checkbox蓝色边框
	uni-radio:not([disabled]) .uni-radio-input:hover,
	uni-checkbox:not([disabled]) .uni-checkbox-input:hover {
		border-color: #d1d1d1 !important;
	}
	// 小方框与文字垂直对齐
	.uni-label-pointer {
		cursor: pointer;
		display: flex;
		align-items: center;
	}
	//元素使用的时候就是使用 round 和 red
</style>
