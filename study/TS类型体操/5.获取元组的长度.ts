type getTupleLen<T extends readonly any[]> = T['length'];

// 元组类型是另一种Array类型，它确切地知道它包含多少元素，以及在特定位置包含哪些类型
// TupleLength 是一个泛型辅助类型，它接受一个泛型类型 T，并使用 T['length'] 来获取 T 的长度。