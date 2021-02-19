import observe from './observe'

export default function defineReactive(data, key, value) {
	if (arguments.length == 2) {
		value = data[key]
	}

	let childOb = observe(value);

	Object.defineProperty(data, key, {
		enumerable: true,
		configurable: true,
		get() {
			console.log(`试图访问${key}属性`);
			return value
		},
		set(newValue) {
			if (value === newValue) return
			console.log(`试图修改${key}属性`, newValue);
			value = newValue
			// 设置新的属性后也需要监测
			childOb = observe(newValue)
		}
	})
}
