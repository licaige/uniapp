<template>
	<view>
		<!-- #ifdef H5 -->
		<view class="web">
			<view>web</view>
			<img class="logo" src="@/static/logo.png" alt="">
		</view>
		<!-- #endif -->
		
		<!-- #ifdef MP-WEIXIN || APP -->
		<view class="weapp">
			<view>weapp</view>
			<image class="logo" src="@/static/logo.png" mode="widthFix"></image>
		</view>
		<!-- #endif -->
		
		<!-- #ifdef APP -->
		<view class="weapp">
			<view>app</view>
			<image class="logo" src="@/static/logo.png" mode="widthFix"></image>
		</view>
		<!-- #endif -->
		
		<view class="box">我是一个View</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		onLoad() {
			// #ifdef H5
			document.title = '京东'
			// #endif
			
			// #ifdef MP-WEIXIN
			wx.setNavigationBarTitle({
				title: '淘宝'
			})
			// #endif
			
			
			// #ifdef APP
			uni.setNavigationBarTitle({
				title: '美团'
			})
			// #endif
			
		}
	}
</script>

<style lang="scss">
	.logo{
		width: 200rpx;
		height: 200rpx;
	}
	
	/* #ifdef H5 */
	.box{
		color: red;
	}
	/* #endif */
	
	/* #ifdef APP */
	.box{
		color: green;
	}
	/* #endif */
	
	/* #ifdef MP-WEIXIN */
	.box{
		color: blue;
	}
	/* #endif */
</style>
