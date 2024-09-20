<template>
	<view>
		<navigator open-type="navigateBack" :delta="1">
			<button type="default">返回 组件</button>
		</navigator>
		<button type="default" @click="handleBackClick">返回 API</button>
		<view class="params">{{params}}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				params: ''
			};
		},
		// 页面生命周期
		onLoad(options) {
			this.params = options
			console.log('detail01 onLoad', options);
			const eventChannel = this.getOpenerEventChannel();
			// 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
			eventChannel.on('acceptDataFromOpenerPage', (data) => {
				console.log("acceptDataFromOpenerPage=>", data)
				this.params = data.data
			})
		},
		onShow() {
			console.log('detail01 onShow');
		},
		onReady() {
			console.log('detail01 onReady');
		},
		onHide() {
			console.log('detail01 onHide');
		},
		onUnload() {
			console.log('detail01 onUnload');
		},
		onPullDownRefresh() {
			console.log('detail01 onPullDownRefresh');
		},
		onReachBottom() {
			console.log('detail01 onReachBottom');
		},

		// Vue组件生命周期(会执行)
		beforeCreate() {
			console.log('detail01 beforeCreate');
		},
		created() {
			console.log('detail01 created');
		},
		beforeMount() {
			console.log('detail01 beforeMount');
		},
		mounted() {
			console.log('detail01 mounted');
		},
		methods: {
			handleBackClick() {
				uni.navigateBack({
					delta: 1
				})
				
				const eventChannel = this.getOpenerEventChannel();
				eventChannel.emit('acceptDataFromOpenedPage', {
					data: 'data from detail01 page'
				});
			}
		}
	}
</script>

<style lang="scss">

</style>
