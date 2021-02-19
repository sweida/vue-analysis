// require('../css/style.css')
// require('../css/base.css')

// // 导入less
// require('../less/common.less')
// import defineReactive from './defineReactive'
// import array from './array'
import observe from './observe'

var obj = {
	a: {
		m: {
			n: 5
		}
	},
	b: 10,
	c: {
		d: {
			e: {
				f: 6666
			}
		}
	},
	g: [22, 33, 44, 55]
};

observe(obj)
// obj.b ++
// obj.a.m.n = {c: 6}
// obj.g[2] = 4
obj.g.splice(2, 1, [77, 88, 99])
console.log(obj);
// defineReactive(obj, 'b', 30, false)
// obj.b = 40
// console.log(obj, Object.keys(obj), obj.b);
// let content = '2233'

// Object.defineProperty(obj, 'b', {
//   enumerable: true,
//   configurable: true,
//   get() {
//       console.log('进来了');
//       return content
//   },
//   set(newValue) {
//     console.log('修改了');
//     content = newValue
//   }
// })

// let a = obj.b
// obj.b = 455
// console.log(obj);