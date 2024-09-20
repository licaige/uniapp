import { defineStore } from 'pinia'
import { getHomeData } from '@/service/home'

export const useHomeStore = defineStore('home', {
	state: ()=> {
		return {
			homeData: {}
		}
	},
	actions: {
		async getHomePageData() {
			const res = await getHomeData()
			// this 是当前的 store 实例对象
			this.homeData = res.data || {}
		}
	}
})