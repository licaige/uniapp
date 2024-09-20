<template>
	<view>
		<view>1.路由（组件）</view>
		<navigator url="/pages/detail01/detail01" open-type="navigate">
			<button type="default">Detail01 navigate</button>
		</navigator>
		<navigator url="/pages/detail01/detail01" open-type="redirect">
			<button type="default">Detail01 redirect</button>
		</navigator>
		<navigator url="/pages/category/category" open-type="switchTab">
			<button type="default">Detail01</button>
		</navigator>

		<view>2.路由（API）</view>
		<button type="default" @click="handleClick1">Detail01 navigate</button>
		<button type="default" @click="handleClick2">Detail01 redirect</button>
		<button type="default" @click="handleClick3">Detail01 category</button>

		<view>2.页面传参</view>
		<navigator url="/pages/detail01/detail01?name=liujun&id=100" open-type="navigate">
			<button type="default">Detail01 navigate</button>
		</navigator>
		<button type="default" @click="handleClick4">Detail01 navigate</button>
		<button type="default" @click="handleClick5">Detail02 navigate</button>

		<view>3.页面生命周期</view>
		<button type="default" @click="handleClick6">detail-hooks navigate</button>
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
			console.log('home onLoad', options);
			uni.$on('acceptDataFromDetail02', this.acceptDataFromDetail02)
		},
		onShow() {
			console.log('home onShow');
		},
		onReady() {
			console.log('home onReady');
		},
		onHide() {
			console.log('home onHide');
		},
		onUnload() {
			console.log('home onUnload');
			uni.off('acceptDataFromDetail02', this.acceptDataFromDetail02)
		},
		onPullDownRefresh() {
			console.log('home onPullDownRefresh');
		},
		onReachBottom() {
			console.log('home onReachBottom');
		},

		// Vue组件生命周期(会执行)
		beforeCreate() {
			console.log('home beforeCreate');
		},
		created() {
			console.log('home created');
		},
		beforeMount() {
			console.log('home beforeMount');
		},
		mounted() {
			console.log('home mounted');
		},
		methods: {
			handleClick1() {
				uni.navigateTo({
					url: '/pages/detail01/detail01'
				})
			},
			handleClick2() {
				uni.redirectTo({
					url: '/pages/detail01/detail01'
				})
			},
			handleClick3() {
				uni.switchTab({
					url: '/pages/category/category'
				})
			},
			handleClick4() {
				uni.navigateTo({
					url: '/pages/detail01/detail01?name=liujun&id=200',
					events: {
						// 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
						acceptDataFromOpenedPage: (data) => {
							console.log(data)
							this.params = data.data
						}
					},
					success: function(res) {
						// 通过eventChannel向被打开页面传送数据
						res.eventChannel.emit('acceptDataFromOpenerPage', {
							data: 'data from home page'
						})
					}
				})
			},
			handleClick5() {
				uni.navigateTo({
					url: '/pages/detail02/detail02?name=liujun&id=300'
				})

			
			},
			handleClick6() {
				uni.navigateTo({
					url: '/pages/detail-hooks/detail-hooks?name=liujun&id=500',
					success: function(res) {
						// 通过eventChannel向被打开页面传送数据
						res.eventChannel.emit('acceptDataFromOpenerPage', {
							data: 'data from home page'
						})
					},
					events: {
						// 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
						acceptDataFromDetailHooks: (data) => {
							console.log(data)
						}
					}
				})
				
				// uni.$on('acceptDataFromDetailHooks', (data) => {
				// 	console.log(data);
				// })
			},
			acceptDataFromDetail02(data) {
				console.log('acceptDataFromDetail02=>', data);
			}
		}
	}
</script>

<style lang="scss">

</style>
