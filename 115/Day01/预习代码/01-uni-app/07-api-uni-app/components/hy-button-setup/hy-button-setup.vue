<template>
	<view :class="['hy-btn', type]" @click="handleClick">
		<slot></slot>	
	</view>
</template>

<script setup>
	import {
		onBeforeMount,
		onMounted,
		onBeforeUnmount,
		onUnmounted,
		watch,
		watchEffect,
		computed,
		ref,
		reactive
	} from 'vue'
	import {
		onLoad,
		onShow,
		onReady,
		onHide
	} from '@dcloudio/uni-app'
	const props = defineProps({
		type: {
			type: String,
			default: 'default'
		}
	}) 
	const emit = defineEmits(['onBtnClick'])
	
	onBeforeMount(() => {
		console.log('hy-button-setup  onBeforeMount');
	})
	onMounted(() => {
		console.log('hy-button-setup  onMounted');
	})
	onBeforeUnmount(() => {
		console.log('hy-button-setup  onBeforeUnmount');
	})
	onUnmounted(() => {
		console.log('hy-button-setup  onUnmounted');
	})
	
	onLoad(() => {
		console.log('hy-button-setup  onLoad');
	})
	onShow(() => {
		console.log('hy-button-setup  onShow');
	})
	onReady(() => {
		console.log('hy-button-setup  onReady');
	})
	onHide(() => {
		console.log('hy-button-setup  onHide');
	})
	
	function handleClick() {
		emit('onBtnClick', props.type)
	}
</script>

<style lang="scss">
	.hy-btn{
		padding: 20rpx;
		font-size: 36rpx;
		color: white;
		text-align: center;
		border-radius: 10rpx;
		background-color: #cdcdcd;
	}
	
	.primary{
		background-color: green;
	}
	.info{
		background-color: pink;
	}
</style>