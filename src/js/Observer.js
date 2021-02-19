import { def } from './utils'
import defineReactive from './defineReactive'
import { arrayMethods } from './array'

import observe from './observe'
export default class Observer {
	constructor(value) {
		// this 实例本身
		def(value, '__ob__', this)
		// console.log('我是observer构造器', obj);
		// observer类的目的：将每一个object对象都可以变成响应式
		if (Array.isArray(value)) {
			Object.setPrototypeOf(value, arrayMethods)
			// 让这个数组也需要
			this.observeArray(value)
		} else {
			this.walk(value)
		}
	}
	walk(value) {
		for (let k in value) {
			defineReactive(value, k)
		}
	}
	observeArray(arr) {
		for (let i = 0, l = arr.length; i < l; i++) {
			// 逐项进行observe
			observe(arr[i])
		}
	}

}
