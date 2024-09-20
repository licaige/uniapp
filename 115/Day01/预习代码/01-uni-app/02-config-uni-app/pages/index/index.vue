<template>
	<view class="index-page">
		<view class="name title fs">01-全局样式</view>
		<view class="name title fs">02-全局数据{{name}}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				name: ''
			}
		},
		onLoad() {
			// 获取全局数据
			const app = getApp()
			console.log(app.globalData);
			this.name = app.globalData.name
			
			// 获取当前路由
			const pages = getCurrentPages()
			console.log(pages[0]);
			console.log(pages[pages.length - 1].route);
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	page{
		position: relative;
	}
	.index-page{
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		border: 3px solid blue;
	}
	.name{
		// color: $hy-color;
	}
</style>
