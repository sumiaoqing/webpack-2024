type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
}

// k 属于 T
interface Todo {
    title: string,
    description: string,
    completed: boolean
}

// let A={
//     title:string,
//     completed:boolean
// }

type A = MyPick<Todo, 'title' | 'completed'>