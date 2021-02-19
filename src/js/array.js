import { def } from './utils'

let arr = [1, 2, 3, 43, 54, 56];

const arrayPrototype = Array.prototype
export const arrayMethods = Object.create(arrayPrototype)

// console.log('arrayMethods', arrayMethods);

const methodsNeedChange= [
	'push',
	'pop',
	'shift',
	'unshift',
	'splice',
	'reverse',
	'sort'
]

methodsNeedChange.forEach(method => {
	const original = arrayMethods[method]
	// 不能使用箭头函数，argument不是使用，this指向有问题
	def(arrayMethods, method, function () {
		const result = original.apply(this, arguments)
		const args = [...arguments]
		const ob = this.__ob__

		console.log(`通过${method}方法修改`);

		let inserted = []
		switch (method) {
			case 'push':
			case 'unshift':
				inserted = args
				break;
			case 'splice':
				inserted = args.slice(2)
				break;
		}

		if (inserted) {
			ob.observeArray(inserted)
		}
		return result
	})
})
// es6写法
Object.setPrototypeOf(arr, arrayMethods)

arr.__proto__ = arrayMethods


// arr.push(44)
// console.log(arr, 'arr');

