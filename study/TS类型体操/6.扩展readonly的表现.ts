// 数组，元素加上 readonly 为普通形式父集 对象属性的 redonly 不影响类型兼容

type A1 = [string];
type RA1 = Readonly<A>

type B1 = string[];
type RB1 = Readonly<B>

type IsExtends<T, Y> = T extends Y ? true : false;

type A1ExtendsRA1 = IsExtends<A1, RA1> //true

type RA1ExtendsA1 = IsExtends<RA1, A1> //false

type B1ExtendsRB1 = IsExtends<B1, RB1> //true

type RB1ExtendsB1 = IsExtends<RB1, B1> //false

type C = {
    name: string
}

type RC = Readonly<C>
type CExtendsRC = IsExtends<C, RC> // true
type RCExtendsC = IsExtends<RC, C> // true

//  对象的只读不影响兼容类型  数组和元组的只读影响兼容类型