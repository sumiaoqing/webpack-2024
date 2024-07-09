namespace module11 {
    type MyIncludes<T extends any[], U> = {
        [K in T[number]]: true
    }[U] extends true ? true : false

    // 将元组转换一个value为true的对象
    // type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'>
}