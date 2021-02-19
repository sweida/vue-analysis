export const def = function (obj, key, value, enumerable = false) {
    Object.defineProperty(obj, key, {
        value,
        // 可枚举属性，即 Object.keys(obj)获取不到
        enumerable,
        // 可修改
        writable: true,
        // 可配置
        configurable: true
    });
};