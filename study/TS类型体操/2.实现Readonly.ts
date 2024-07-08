type MyReadonly<T> = {
    readonly [P in keyof T]: T[P]
}

interface TodoB {
    title: string,
    completed: boolean
}

type B = MyReadonly<TodoB>

let b: B = { title: '', completed: false };

// b.title='1';
console.log(b);