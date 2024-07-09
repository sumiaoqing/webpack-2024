namespace module9 {
    type MyIf<C extends boolean, K, U> = C extends true ? K : U

    // type A = If<true, 'a', 'b'>  // expected to be 'a'  
    // type B = If<false, 'a', 'b'> // expected to be 'b'
}