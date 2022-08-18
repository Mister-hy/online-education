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
	//元素使用的时候就是使用 round 和 red
</style>
