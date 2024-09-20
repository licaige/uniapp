import { defineStore } from 'pinia'

// 第一个参数是应用程序中 store 的唯一 id (该store模块的名字)
// 这个 name，也称为 id，是必要的，Pinia 使用它来将 store 连接到 devtools。
// 将返回的函数命名为 use... 是跨可组合项的约定，以使其符合你的使用习惯。
export const useCounterStore = defineStore('counter', {
	state: ()=> {
		return {
			counter: 888
		}
	},
	actions: {
		increment() {
			// this 是当前的 store 实例对象
			this.counter++
		},
		decrement() {
			this.counter = this.counter - 1
		}
		
	}
})