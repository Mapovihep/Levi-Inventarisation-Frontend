export interface withId{
    id: string
}
export function extend<T, U>(a:T, b:U): T&U{
    return Object.assign({}, a, b)
}
let a: object = {id: "id1", ok: "сделано1"}
let b: object = {id: "id2", ok: "сделано2"}
console.log(extend(a, b));
// export type newItem<T> = {
//     [K in keyof T]?: T[K]
// }
// function mapper<T extends withId> ( arg: T ) : any {

//     let newItem : newItem<T> = ;
//     // return newItem;
// }