<template>
	<view>
		<button type="default" @click="handleBackClick">返回</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {
			handleBackClick() {
				uni.navigateBack({
					delta: 1
				})
				uni.$emit('acceptDataFromDetail02', {
					data: 'data from detail02'
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
