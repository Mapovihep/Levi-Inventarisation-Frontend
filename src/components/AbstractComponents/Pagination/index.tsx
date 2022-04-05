import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../store/reducers/hooks';
import { RootState } from '../../../store';
import './pagination.css'

enum PaginationType{
    USERS = "USERS"
}
interface IPaginationProps{
    pageForward: (E: React.MouseEvent<HTMLButtonElement>) => void,
    pageBack: (E: React.MouseEvent<HTMLButtonElement>) => void,
    setPage: (num: number) => void,
    className: string,
    currentPage: number,
    totalPages: number
}
export const Pagination : React.FC<IPaginationProps> = ({
            className,
            currentPage,
            totalPages,
            pageForward,
            pageBack,
            setPage
        }
    ) =>{

    const dispatch = useAppDispatch();


    const backArrowHandler = (E:React.MouseEvent<HTMLButtonElement>) => pageBack(E);
    const forwardArrowHandler = (E:React.MouseEvent<HTMLButtonElement>) => pageForward(E);
    const setLastPageHandler = (E:React.MouseEvent<HTMLButtonElement>) => setPage(totalPages);
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


