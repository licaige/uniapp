<template>
	<view class="content">
		<!-- 徽标 -->
		<uni-badge text="1" type="info"></uni-badge>
		<uni-badge text="10" type="primary"></uni-badge>
		<uni-badge text="1000" type="success" absolute="rightTop">
			<button type="default">button</button>
		</uni-badge>

		<!-- 倒计时 -->
		<uni-countdown :showDay="false" :hour="2" :minute="3" :second="23"></uni-countdown>

		<!-- 商品导航 -->
		<view class="goods-carts">
			<uni-goods-nav :options="options" :fill="true" :button-group="buttonGroup" @click="onClick"
				@buttonClick="buttonClick" />
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				options: [{
					icon: 'chat',
					text: '客服'
				}, {
					icon: 'shop',
					text: '店铺',
					info: 2,
					infoBackgroundColor: '#007aff',
					infoColor: "#f5f5f5"
				}, {
					icon: 'cart',
					text: '购物车',
					info: 2
				}],
				buttonGroup: [{
						text: '加入购物车',
						backgroundColor: 'linear-gradient(90deg, #FFCD1E, #FF8A18)',
						color: '#fff'
					},
					{
						text: '立即购买',
						backgroundColor: 'linear-gradient(90deg, #FE6035, #EF1224)',
						color: '#fff'
					}
				],
			}
		},
		onLoad() {

		},
		methods: {
			onClick(e) {
				uni.showToast({
					title: `点击${e.content.text}`,
					icon: 'none'
				})
			},
			buttonClick(e) {
				uni.showToast({
					title: `点击${e.content.text}`,
					icon: 'none'
				})
			}
		}
	}
</script>

<style>
	page {
		z-index: 100;
	}

	.content {
		z-index: 10;
	}

	.uni-badge {
		z-index: 20;
	}
</style>
