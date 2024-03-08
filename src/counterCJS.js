let num = 1;

function increase() {
    num++;
}


// exports = module.exports
module.exports = { num, increase }  
// 等同于
// module.exports = { num: num, increase: increase };

/**
 * num基本类型，指向给module.exports[num]，假设内存地址是n1,那么module.exports[num]指向的内存是n2,和n1值相同，但是无关系
 * increase引用类型，increase等于是指针，指向给module.exports[increase]，只是进行了指针的复制，名字换了，是浅拷贝（基本类型无深浅拷贝的说法）
 * counter.js 中 increase() 修改的 num 变量在函数声明时就已经绑定不变了，永远绑定内存地址指向 n1 的 num，所以为1
 * ！！！JavaScript 采用的是词法作用域，它规定了函数内访问变量时，查找变量是从函数声明的位置向外层作用域中查找，而不是从调用函数的位置开始向上查找
 */