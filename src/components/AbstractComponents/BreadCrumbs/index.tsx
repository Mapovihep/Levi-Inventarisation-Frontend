import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./breadCrumbs.css"
export enum crumbs{

}
export interface crumbsProps{
    path: string;    
}
export const BreadCrumbs: React.FC<crumbsProps> = ({path}) => {
    const paths: string[] = [];
    const navigate = useNavigate();
    const parsePath = (path: string)  => {
        let pathNames: string[] = path.split('/');
        let newPaths: string[] = [];
        for(let i = 0; i < pathNames.length; i++){
            newPaths.length!=0 ? newPaths.push(newPaths[i-1] + '/' + pathNames[i]) : newPaths.push(pathNames[i]);
        }
        let pathObjArr: React.ReactElement[] = [];
        for(let i = 0; i < newPaths.length; i++){
            pathObjArr.push(i!=newPaths.length-1 ? 
            <div 
            key={Math.random()}
            onClick={() => navigate('/'+newPaths[i])} 
            className="crumbsLink" >
                <span id="path">{pathNames[i]}</span>
                {' / '}
            </div> 
            : <p className="crumbsLinkCurrent" >{" " + pathNames[i]}</p>)
        }   
        return pathObjArr;
    } 
    return (
        <ol className="crumbsList">
            {parsePath(path.substring(1))}
        </ol>
    )
}