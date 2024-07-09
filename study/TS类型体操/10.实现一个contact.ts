namespace module10 {
    type MyContact<K extends any[], U extends any[]> = [...K, ...U]

    // type Result = Concat<[1], [2]> // expected to be [1, 2]
}