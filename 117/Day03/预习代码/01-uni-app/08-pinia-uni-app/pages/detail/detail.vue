<template>
	<view>
		<button type="default" @click="subNumber">decrement</button>
		<view class="title">{{counter}}</view>
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
	function subNumber() {
		counterStore.decrement()
	}
</script>

<style lang="scss">

</style>
