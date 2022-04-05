import { TextField } from '@mui/material';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useAppSelector } from '../../../store/reducers/hooks';
import { RootState } from '../../../store';
import "./customAutocomplete.css"

interface IPropsFilter {
    type: string,
    giveValue: (value: string) => void
}
interface IPointsFilter{
    name: string,
    flag: boolean,
}
export const jope = () => {}
// export const CustomAutocomplete: React.FC<IPropsFilter> = ({type, giveValue}) => {

//     const [value, setValue] = useState<string>('');
//     const [opened, setOpened] = useState(false);
//     const autocompleteOptions : string[] | null = useAppSelector((s:RootState) => {switch (type) {
//         case "Rooms":
//             return s.Rooms.filterOptions;
//         case "Items":
//             return s.Items.FilterOptions;
//         case "Status":
//             return ["active", "inactive"]
//         default:
//             return s.Rooms.filterOptions;
//     }});

//     const searchNecessary = (E: React.ChangeEvent<HTMLInputElement>) => {
//         E.preventDefault();
//         setValue(E.target.value);
//         !opened&&setOpened(true);
//         giveValue(E.target.value)
//     };

//     const clickHandler = (E: React.SyntheticEvent<EventTarget>) => {
//         E.preventDefault();
//         setOpened(s=>!s);
//     }
//     const keyController = (E: React.KeyboardEvent) =>{
//         switch (E.key) {
//             case 'ArrowDown':
//                 let next = autocompleteOptions[autocompleteOptions.indexOf(value)+1];
//                 if(next!=undefined){
//                     setValue(next);
//                 }else{
//                     setValue(autocompleteOptions[0])
//                 }
//                 break;
//             case 'ArrowUp':
//                 let previous = autocompleteOptions[autocompleteOptions.indexOf(value)-1];
//                 if(previous!=undefined){
//                     setValue(previous);
//                 }else{
//                     setValue(autocompleteOptions[autocompleteOptions.length-1])
//                 }
//                 break;
//             case 'Enter':
//                 E.preventDefault();
//                 setOpened(false);
//                 break;
//             default:
//                 break;
//         }
//     }
//     return (
//     <form
//     className={"autocomplete"}
//     onBlur={e=>setOpened(false)}
//     >
//         <input onChange={searchNecessary}
//         className={`autocompleteTitle`}
//         placeholder={"select smthng"}
//         value={value}
//         id={type}
//         autoComplete="off"
//         onKeyDown={e => keyController(e)}
//         onFocus={e => setOpened(true)}
//         onBlur={e=>setOpened(false)}
//         />
//         <div className={opened ? 'rotated' : 'notRotated'}></div>
//         {opened&&
//         <ul className="autocompleteOptions" >
//             {autocompleteOptions.filter(x=>x.includes(value)).length!=0 ?
//             autocompleteOptions.filter(x=>x.includes(value)).map(x=>
//                     <label onFocus={e=>console.log(e)}>
//                         <li
//                         className={value!=autocompleteOptions.filter(x => x==value)[0] ? `autocompleteOption` : `autocompleteOptionSelected`}
//                         id={x}
//                         key={Math.random()}
//                         onClick={E=>{setValue(x);clickHandler(E);}}
//                         >
//                                 {x.length>=40 ?
//                                 x.substring(0,30)+"..."
//                                 : x}
//                         </li>
//                     </label>)
//                 : <li className="autocompleteOption">
//                     There are no needed opportunities
//                 </li>}
//         </ul>}
//     </form>)
// }
