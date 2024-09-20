<template>
	<view class="hy-btn">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name:"hy-button",
		props: {
			type: {
				type: String,
				default: 'default'
			},
			size: {
				type: String,
				default: 'default'
			}
		},

		data() {
			return {
				
			};
		},
		watch: {
			
		},
		computed: {
			
		},
		methods: {
			
		},
		
		// 页面生命周期没有执行
		onLoad() {
			console.log('hy-button onLoad');
		},
		onShow() {
			console.log('hy-button onShow');
		},
		onReady() {
			console.log('hy-button onReady');
		},
		onHide() {
			console.log('hy-button onHide');
		},
		
		// 组件的生命周期
		beforeCreate() {
			console.log('hy-button beforeCreate');
		},
		created() {
			console.log('hy-button created');
		},
		beforeMount() {
			console.log('hy-button beforeMount');
		},
		mounted() {
			console.log('hy-button mounted');
		}
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
</style>