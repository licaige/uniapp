<template>
	<view class="content">
		<button type="default">按钮组件</button>
		<button type="primary">按钮组件</button>
		<view class="box">
			<text>我是一个文本</text>
		</view>
		
		<!-- 图片 -->
		<!-- <image src="../../static/avatar.jpeg" mode="widthFix"></image> -->
		<image class="img-avatar" src="@/static/avatar.jpeg" mode="widthFix"></image>
		
		<scroll-view scroll-y="true" class="hy-v-scroll">
			<view class="v-item">item1</view>
			<view class="v-item">item1</view>
			<view class="v-item">item1</view>
			<view class="v-item">item1</view>
			<view class="v-item">item1</view>
			<view class="v-item">item1</view>
			<view class="v-item">item8</view>
			<view class="v-item">item9</view>
			<view class="v-item">item10</view>
		</scroll-view>
		
		<scroll-view scroll-x="true" class="hy-h-scroll">
			<view class="h-item">item1</view>
			<view class="h-item">item2</view>
			<view class="h-item">item3</view>
			<view class="h-item">item4</view>
			<view class="h-item">item5</view>
			<view class="h-item">item6</view>
		</scroll-view>
		
		<swiper 
			class="hy-swiper"
			:indicator-dots="true" 
			:autoplay="true" 
			:interval="3000" 
			:duration="1000"
		>
			<swiper-item>
				<image class="swiper-item" src="../../static/banner01.jpeg" ></image>
			</swiper-item>
			<swiper-item>
				<image class="swiper-item" src="../../static/banner02.jpeg" ></image>
			</swiper-item>
		</swiper>
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
	/*page{ 
		position: relative;
	}
	
	.content{
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	} */
	
	.img-avatar{
		width: 200rpx;
	}
	.hy-v-scroll{
		height: 500rpx;
		
	}
	.v-item{
		height: 200rpx;
		border-bottom: 2rpx solid red;
	}
	.hy-h-scroll{
		white-space: nowrap;
		background-color: pink;
	}
	
	.h-item{
		display: inline-block;
		height: 200rpx;
		width: 200rpx;
		border-right: 2rpx solid blue;
	}
	
	.hy-swiper{
		height: 500rpx;
	}
	.swiper-item{
		width: 100%;
		height: 100%;
	}
</style>
