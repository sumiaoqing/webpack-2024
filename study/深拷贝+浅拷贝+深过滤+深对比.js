// 浅拷贝
function shallowCopy(value) {
    if (typeof value !== 'object' || value === null) return value
    let temp = {};
    for (let key in value) {
        temp[key] = value[key]
    }
    return temp
}

const obj1 = {
    null: null,
    undef: undefined,
    fn() { },
    obj: {
        da: 1
    },
    nan: NaN,
    arr: [1, 2, 3]
}
// console.log(shallowCopy(obj1) === obj1, shallowCopy(obj1));

//深拷贝

function deepCopy(value) {
    let newObj=Array.isArray(value)?[]:{};
    if (typeof value !== 'object' || value === null) {
        return value
    } else {
        for (let key in value) {
            temp[key]=deepCopy(value[key]);
        }
    }
}

const obj2 = {
    null: null,
    undef: undefined,
    fn() { },
    obj: {
        da: 1
    },
    nan: NaN,
    arr: [{
        obj: {
            arrr1: [{
                name: 'test'
            }]
        }
    }]
}

console.log(deepCopy(obj2, temp))

//https://juejin.cn/post/7211775653166219323