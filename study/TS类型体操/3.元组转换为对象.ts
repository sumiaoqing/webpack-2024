const tuple: readonly ['tesla1', 'tesla2', 'tesla3', 'tesla4'] = ['tesla1', 'tesla2', 'tesla3', 'tesla4'] as const;

type TupleToObject<T extends readonly (keyof any)[]> = {
    [P in T[number]]: P
}

const result: TupleToObject<typeof tuple> = {
    tesla1: 'tesla1',
    tesla2: 'tesla2',
    tesla3: 'tesla3',
    tesla4: 'tesla4',
}

console.log(result)