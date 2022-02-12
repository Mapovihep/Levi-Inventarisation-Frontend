import { IItem, itemBuilder, userBuilder } from "../../interfaces";

export interface withId{
    id: string
}
export type keys = keyof IUser;

const a: ['ONE', 'TWO', 'THREE'] = ['ONE', 'TWO', 'THREE'];
type SameValueAsKeys<KS extends string[]> = { [K in KS[number]]: K };
const b: SameValueAsKeys<typeof a> = a.reduce((acc, type) => ({ ...acc, [type]: type }), {} as any);


export interface IUser{
    id: string,
    email: string,
    password: string,
    firstName: string,
    lastName: string,
}
type SameKeyAsValue<T> = { [key: string]: T }
let newUser = userBuilder("1", "1");

// export function mapper<IUser>( a: IUser[] ) : SameKeyAsValue<IUser> {
//     let newBigObj:  SameKeyAsValue<IUser> = {};
//     a.forEach(x=>{ ...newBigObj, [x.id]: x})
//     return newBigObj;
// }

let newItem = itemBuilder("item1", "2200.2222")
let item: SameKeyAsValue<IItem> = { [newItem.id]: newItem }; 
let user: SameKeyAsValue<IUser> = { [newUser.id]: newUser }; 
console.log(user);
console.log(item);



// export type Partial<T>= {
//     [K in keyof T]?: T[K]
// }
// type PartialUser = Partial<IUser>;
// export type interesting<T extends withId> = {
//     [keyof T]: T
// }
// export function mapper1<T extends withId>(item: T, id: string) :  interesting<T>{
//     let newItem:
//     return{[id]: item}
// }