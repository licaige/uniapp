<template>
	<view>
<!-- 		<uni-forms ref="form" :modelValue="formData" :rules="rules">
			<uni-forms-item label="姓名" name="username">
				<input type="text" v-model="formData.username" placeholder="请输入姓名" />
			</uni-forms-item>
			<uni-forms-item label="密码" name="password">
				<input type="password" v-model="formData.password" placeholder="请输入密码" />
			</uni-forms-item>
		</uni-forms>
		<button @click="submit">提交表单</button>
		<button @click="reset">重置表单</button>
		<view>{{formData}}</view> -->
		
		
		<uni-forms ref="form" :modelValue="formData" :rules="rules">
			<uni-forms-item label="姓名" name="username" required>
				<uni-easyinput type="text" v-model="formData.username" placeholder="请输入姓名" />
			</uni-forms-item>
			<uni-forms-item label="密码" name="password" required>
				<uni-easyinput type="password" v-model="formData.password" placeholder="请输入密码" />
			</uni-forms-item>
		</uni-forms>
		<button @click="submit" type="primary">提交表单</button>
		<button @click="reset">重置表单</button>
		<view>{{formData}}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				formData: {
					password: null, // 初始化为 null
					username: null
				},
				rules: {
					username: {
						rules: [
							{
								required: true,
								errorMessage: '请输入姓名'
							}
						]
					},
					password: {
						rules: [
							{
								required: true,
								errorMessage: '请输入密码'
							},
							{
								minLength: 6,
								maxLength: 8,
								errorMessage: '请输入密码(6-8位)'
							}
						]
					}
				}
			};
		},
		methods: {
			// 触发提交表单
			submit() {
				this.$refs.form.validate().then(res => {
					console.log('表单数据信息：', res);
				}).catch(err => {
					console.error('表单错误信息：', err);
				})
			},
			reset() {
				// 清除验证 -> 重置表单
				this.$refs.form.clearValidate()
				Object.keys(this.formData).forEach((key, index) => {
					this.formData[key] = null
				})
			}
		}
	}
</script>

<style lang="scss">
 // 在小程序	
 // .uni-forms-item__label{
	//  color: red !important;
 // }
 
 // 4个平台
 // :global(.uni-forms-item__label) {
	//  color: green !important;
 // }
 
 // :deep(.uni-forms-item__label) {
 // 	 color: purple !important;
 // }

</style>
