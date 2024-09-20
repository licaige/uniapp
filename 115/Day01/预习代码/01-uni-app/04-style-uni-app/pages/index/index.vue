<template>
	<view class="content">
		<view class="bg-view"></view>
		<text class="iconfont icon-bianji" :style="{color: 'red', fontSize: '60rpx'}"></text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.bg-view{
		width: 100%;
		height: 200rpx;
		/* 小程序会转成base64, 其它不会 */
		background-image: url("~@/static/cvy.png");
		
		/* 小程序不显示，太多了不会转成base64 */
		/* background-image: url("~@/static/banner01.jpeg"); */
		background-repeat: no-repeat;
		background-size: contain;
	}
</style>
