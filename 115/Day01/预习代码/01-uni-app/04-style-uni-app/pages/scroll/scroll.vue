<template>
	<view class="content">
		<view class="item">item1</view>
		<view class="item">item1</view>
		<view class="item">item1</view>
		<view class="item">item1</view>
		<view class="item">item1</view>
		<view class="item">item1</view>
		<view class="item">item1</view>
		<view class="item">item1</view>
		<view class="item">item1</view>
		<view class="item">item1</view>
		<view class="item">item1</view>
		<view class="item">item1</view>
		<view class="item">item1</view>
		<view class="item">item1</view>
		<view class="item">item1</view>
		<view class="item">item1</view>
		<view class="item">item1</view>
		<view class="item">item1</view>
		<view class="item">item12</view>
		<view class="item">item11</view>
		<view class="item">item10</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	page{
		height: 100%;
		position: relative;
	}
	.content{
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 10;
		border: 1px solid red;
		overflow-y: scroll;
		-webkit-overflow-scrolling: touch;
	}
	
	.item{
		height: 200rpx;
		border-bottom: 2rpx solid green;
	}
</style>
