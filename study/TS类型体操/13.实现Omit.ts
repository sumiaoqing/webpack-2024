// Omit<T, K> 是一个泛型类型，接受两个参数 T 和 K

// type PersonInfo = Omit<Person, 'address'>;

// 等价于
// type PersonInfo = {
//     name: string;
//     age: number;
// };

// 使用示例
// const personInfo: PersonInfo = {
//     name: 'Alice',
//     age: 30,
//     // address: '123 Main St',  // Error: 'address' 属性不允许在 PersonInfo 类型中存在
// };
namespace module13 {

    type MyPick<T, K extends keyof T> = {
        [P in K]: T[P]
    }

    type MyExclude<T, K> = T extends K ? never : T

    type MyOmit<T, K> = MyPick<T, MyExclude<keyof T, K>>
}