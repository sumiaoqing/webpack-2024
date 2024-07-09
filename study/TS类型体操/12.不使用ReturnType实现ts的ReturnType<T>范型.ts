namespace module12 {
    type MyReturnType<T> = T extends (...args: any[]) => infer T ? T : never

    // ReturnType<T> 是一个泛型类型，接受一个泛型参数 T，该参数必须是一个函数类型 (...args: any[]) => any
}