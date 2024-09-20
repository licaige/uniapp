<template>
	<view>
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

<script setup>
	import { ref } from 'vue'
	
	const rules = ref({
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
	})
	
	const formData = ref({
		password: null, // 初始化为 null
		username: null
	})
	const form = ref(null)
	
	function submit() {
		form.value.validate().then(res => {
			console.log('表单数据信息：', res);
		}).catch(err => {
			console.error('表单错误信息：', err);
		})
	}
	
	function reset() {
		form.value.clearValidate()
		Object.keys(formData.value).forEach((key, index) => {
			formData.value[key] = null
		})
	}
</script>

<style>

</style>
