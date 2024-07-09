namespace module8 {
    type MyAwaited<T extends Promise<any>> = T extends PromiseLike<infer L> ? L : never

    // PromiseLike 是一个泛型接口，接受一个类型参数 T，表示 Promise 的 resolved（解决）值的类型。
}