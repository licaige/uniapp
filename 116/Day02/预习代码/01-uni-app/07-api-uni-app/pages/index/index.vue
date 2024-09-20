<template>
	<view class="content">
		<view class="title1">1.网路请求 API</view>
		<button type="default" @click="handleGetHomeData">getHomeData</button>
		<view class="title1">2.数据存储 API</view>
		<button type="default" @click="setStorage">setStorage</button>
		<button type="default" @click="getStorage">getStorage</button>
		<view class="title1">3.自定义组件</view>
		<hy-button @click="handleClick">我是hy-button</hy-button>
		<hy-button-setup type="info" @onBtnClick="handleBtnClick">我是hy-button-setup</hy-button-setup>
	</view>
</template>

<script>
	import { getHomeData, getJuanpiHomeData } from '@/service/home.js'
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			handleGetHomeData() {
				getHomeData().then((res) => {
					console.log(res);
				})
				getJuanpiHomeData().then((res) => {
					console.log(res);
				})
			},
			setStorage() {
				uni.setStorage({
					key: 'useInfo',
					data: {
						name: 'liujun',
						age: 18,
						token: 'asdfsfdsaf'
					},
					success() {
						console.log('存储成功');
					}
				})
				
				uni.setStorageSync('info', {
					name: 'coderwhy',
					age: 12
				})
			},
			getStorage() {
				uni.getStorage({
					key: 'useInfo',
					success(res) {
						console.log(res.data);
					}
				})
				
				const info = uni.getStorageSync('info')
				console.log(info);
			},
			handleClick() {
				console.log('click');
			},
			handleBtnClick(params) {
				console.log(params);
			}
		}
	}
</script>

<style>
	
</style>
