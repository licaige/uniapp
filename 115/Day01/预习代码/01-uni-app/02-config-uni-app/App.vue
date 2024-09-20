<script>
	export default {
		// 获取编译模式添加的的启动参数(或应用启动时的查询字符串参数)
		onLaunch: function(options) {
			console.log('App Launch', options)
		},
		onShow: function(options) {
			console.log('App Show', options)
		},
		onHide: function() {
			console.log('App Hide')
		},
		// 定义全局数据
		globalData: {
			name: 'liujun',
			age: 18
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	
	/* @import url('./static/css/base.css'); */
	/* @import './static/css/base.css'; */
	/* @import url('static/css/base.css'); */
	/* @import url('~@/static/css/base.css'); */
	/* @import url('@/static/css/base.css'); */
	@import 'static/css/variable.scss';
	.title{
		// color: $hy-color;
	}
	
	// 铺满屏幕
	// 小程序 page 组件铺满
	// h5 uni-page-body 组件铺满
	// iOS / Android uni-page-body 组件铺满
	page{
		height: 100%;
		box-sizing: border-box;
		border:3px solid $hy-bg-color;
	}
	
	// uni-page-body{
	// 	height: 100%;
	// 	box-sizing: border-box;
	// 	border:3px solid $hy-bg-color;
	// }
</style>
