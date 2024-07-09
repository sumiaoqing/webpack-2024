namespace module7 {
    type MyExclude<T, K> = T extends K ? never : T
}