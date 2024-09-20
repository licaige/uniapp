<template>
	<view>
		<view class="item" @click="handleBackClick">1</view>
		<view class="item">1</view>
		<view class="item">1</view>
		<view class="item">1</view>
		<view class="item">1</view>
		<view class="item">1</view>
		<view class="item">1</view>
		<view class="item">1</view>
		<view class="item">1</view>
		<view class="item">1</view>
		<view class="item">1</view>
		<view class="item">1</view>
	</view>
</template>

<script setup>
	// 1.vue3 组件的生命周期
	import {
		onBeforeMount,
		onMounted,
		onBeforeUnmount,
		onUnmounted,
		getCurrentInstance,
		ref,
		watch,
		watchEffect,
		computed
	} from 'vue'

	// 2.uni-app 页面的生命周期(必须是Vue3项目)
	import {
		onLoad,
		onShow,
		onReady,
		onHide,
		onUnload,
		onPullDownRefresh,
		onReachBottom
	} from "@dcloudio/uni-app";
		
	const props = defineProps({
		name: String,
		id: String
	})	
	console.log(props.name, props.id);
	console.log("getCurrentInstance=>", getCurrentInstance().proxy);
	
	const $instance = ref(getCurrentInstance().proxy)
	
	onLoad((options) => {
		console.log('detail-hooks onLoad 123', options);
		
		// 拿到 eventChannel 对象	
		// const instance = getCurrentInstance().proxy  
		// $instance.value = getCurrentInstance().proxy  
		const eventChannel = $instance.value.getOpenerEventChannel();  
		eventChannel.on('acceptDataFromOpenerPage', data => {  
		    console.log('acceptDataFromOpenerPage: ', data)  
		})
		
		// const instance = getCurrentInstance().proxy
		// const eventChannel = instance.getOpenerEventChannel();  
		// eventChannel.emit('acceptDataFromDetailHooks', {
		// 	data: '啊啊啊'
		// })
		
		
	})
	onShow(() => {
		console.log('detail-hooks onShow');
	})
	onReady(() => {
		console.log('detail-hooks onReady');
	})
	onHide(() => {
		console.log('detail-hooks onHide');
	})
	onUnload(() => {
		console.log('detail-hooks onUnload');
	})

	onPullDownRefresh(() => {
		console.log('detail-hooks onPullDownRefresh');
		setTimeout(()=>{
			uni.stopPullDownRefresh()
		}, 1000)
	})
	onReachBottom(() => {
		console.log('detail-hooks onReachBottom');
	})



	onBeforeMount(() => {
		console.log('detail-hooks Vue onBeforeMount');
	})
	onMounted(() => {
		console.log('detail-hooks Vue onMounted');
	})
	onBeforeUnmount(() => {
		console.log('detail-hooks Vue onBeforeUnmount');
	})
	onUnmounted(() => {
		console.log('detail-hooks Vue onUnmounted');
	})
	
	function handleBackClick() {
		
		// console.log(channer.value);
		
		const eventChannel = $instance.value.getOpenerEventChannel();  
		eventChannel.emit('acceptDataFromDetailHooks', {
			data: 'data from detail01 page'
		});
		
		uni.navigateBack({
			delta: 1
		})
		// 触发全局事件
		// uni.$emit('acceptDataFromDetailHooks', {
		// 	data: 'data from detail hooks page'
		// })
		
		
	}
</script>

<style lang="scss">
	.item {
		height: 200rpx;
		border-bottom: 1px solid red;
	}
</style>
