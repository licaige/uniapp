<template>
	<view class="content">
		<uni-badge text="100" type="primary"></uni-badge>
		<uni-badge text="90" type="success"></uni-badge>

		<uni-badge text="90" type="info" absolute="rightTop">
			<button>button</button>
		</uni-badge>

		<uni-countdown color="white" background-color="#cdcdcd" :day="0" :showDay="false" :hour="6" :minute="12"
			:second="20">
		</uni-countdown>


		<uni-goods-nav 
			:fill="true" 
			:options="options" 
			:buttonGroup="buttonGroup" 
			@click="onClick"
			@buttonClick="buttonClick" />

	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				options: [{
					icon: 'headphones',
					text: '客服'
				}, {
					icon: 'shop',
					text: '店铺',
					info: 2,
					// infoBackgroundColor: '#007aff',
					// infoColor: "red"
				}, {
					icon: 'cart',
					text: '购物车',
					info: 20
				}],
				buttonGroup: [{
						text: '加入购物车',
						backgroundColor: '#ff0000',
						color: '#fff'
					},
					{
						text: '立即购买',
						backgroundColor: '#ffa200',
						color: '#fff'
					}
				]
			}
		},
		onLoad() {

		},
		methods: {
			onClick(e) {
				console.log(e);
				uni.showToast({
					title: e.content.text
				})
			},
			buttonClick(e) {
				uni.showToast({
					title: e.content.text
				})
				console.log(e);
			}
		}
	}
</script>

<style>
	.content {
		padding: 20rpx;
	}
</style>
