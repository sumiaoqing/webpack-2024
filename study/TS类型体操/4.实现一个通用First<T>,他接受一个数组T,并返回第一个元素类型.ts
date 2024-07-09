namespace module4 {
    type First<T extends any[]> = T extends [infer F, ...infer R] ? F : never
    //在 TypeScript 中，infer 是一个关键字，通常用于条件类型（Conditional Types）中，用于推断（infer）类型变量的具体类型。它允许在泛型类型中提取并使用参数的类型信息，

}