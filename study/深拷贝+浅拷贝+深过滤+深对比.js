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

function deepCopy(obj) {
    let newObj = Array.isArray(obj) ? [] : {};
    if (JSON.stringify(newObj) === '{}') {
        for (let key in obj) {
            if (typeof obj[key] !== 'object' || typeof obj[key] === null) {
                newObj[key] = obj[key];
            } else {
                newObj[key] = deepCopy(obj[key]);
            }
        }
    } else {
        for (let i = 0; i < obj.length; i++) {
            if (typeof obj[i] !== 'object' || typeof obj[i] === null) {
                newObj.push(obj[i]);
            } else {
                newObj.push(deepCopy(obj[i]));
            }
        }
    }
    return newObj
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

const target = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8],
    empty: null,
};


console.log(JSON.stringify(deepCopy(target)))

//https://juejin.cn/post/7211775653166219323