import React, { useEffect, useState } from 'react'
import { pageBackAC, pageForwardAC, pageType, setCurrentPageAC } from '../../../actionCreators/paginationActionCreator';
import { useAppDispatch, useAppSelector } from '../../../reducers/hooks';
import { RootState } from '../../../store';
import './pagination.css'
interface IPaginationProps{
    className: string,
    currentPage: number,
    totalPages: number
}
export const Pagination : React.FC<IPaginationProps> = ({className, currentPage, totalPages}) =>{
    
    const dispatch = useAppDispatch();

    const backArrowHandler = (E:React.MouseEvent<HTMLButtonElement>) => {
        dispatch(pageBackAC(pageType.USERS));
    }
    const forwardArrowHandler = (E:React.MouseEvent<HTMLButtonElement>) => {
        dispatch(pageForwardAC(pageType.USERS));
    }
    const setLastPageHandler = (E:React.MouseEvent<HTMLButtonElement>) => {
        dispatch(setCurrentPageAC(pageType.USERS))
    }
    return(
        <div className={`container__Pagination ${className}`}>
            {currentPage == 1 ? 
            <button className='paginationBtn backArrow'
                disabled={true} 
                onClick={backArrowHandler}>
            </button> :
            <button className='paginationBtn backArrow disabledPaginationBtn' 
                onClick={backArrowHandler}>
            </button>}
            <button className='paginationBtn currentPage'>
                {currentPage}
            </button>
            <span>Of</span>
            <button className='paginationBtn'
                onClick={setLastPageHandler}>
                {totalPages}
            </button>
            {currentPage < totalPages ? 
            <button className='paginationBtn forwardArrow'
                onClick={forwardArrowHandler}>  
            </button> :
            <button className='paginationBtn forwardArrow disabledPaginationBtn' 
                disabled={true} 
                onClick={forwardArrowHandler}>
            </button>}
        </div>
    )
}


