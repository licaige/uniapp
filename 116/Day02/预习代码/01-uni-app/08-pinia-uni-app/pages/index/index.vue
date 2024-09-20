<template>
	<view class="content">
		<navigator url="/pages/detail/detail" open-type="navigate">
			<button type="default">Got To Detail</button>
		</navigator>
		<button type="default" @click="addNumber">increment</button>
		<button type="default" @click="subNumber">decrement</button>
		<view class="title">{{counter}}</view>
		<button type="default" @click="getHomeData">getHomeData</button>
		<view class="title">{{homeData}}</view>
	</view>
</template>

<script setup>
	import { storeToRefs } from 'pinia'
	import { useCounterStore } from '@/store/counter.js'
	import { useHomeStore } from '@/store/home.js'
	
	const counterStore = useCounterStore()
	const homeStore = useHomeStore()
	
	const { counter } = storeToRefs(counterStore)
	const { homeData } = storeToRefs(homeStore)
	
	function addNumber() {
		counterStore.increment()
	}
	
	function subNumber() {
		counterStore.decrement()
	}
	
	function getHomeData() {
		// 获取数据
		homeStore.getHomePageData()
	}
</script>

<style>
	
</style>
