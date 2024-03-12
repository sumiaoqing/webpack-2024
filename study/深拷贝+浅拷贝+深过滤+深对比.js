// 浅拷贝
function shallowCopy(value) {
    if (typeof value !== 'object' || value === null) return value
    let temp = {};
    for (let key of value) {
        temp[key] = value[key]
    }
    return temp
}

const obj = {
    null: null,
    undef: undefined,
    fn() { },
    obj: {
        da: 1
    },
    nan: NaN,
    arr: [1, 2, 3]
}
console.log(shallowCopy(obj) === obj, shallowCopy(obj));

//深拷贝
let temp={};

function deepCopy(value,obj) {
    for(let key of value){
        if (typeof value[key] !== 'object' || value[key] === null){
            obj[key]=value[key]
        }else{
            if(value[key] instanceof Array){
                for(let i=0;i<value[key].length;i++){
                    deepCopy(value[key],value)
                }
            }else{
                for(let key of value[key]){
                    deepCopy(value[key],value)
                }
            }
        }
    }
    
     
}

//https://juejin.cn/post/7211775653166219323