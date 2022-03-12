import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router'
import { getItemsByCategoriesFAC } from '../../../actionCreators/itemsActionCreator'
import { addUserAC, addUserFAC } from '../../../actionCreators/userActionCreator'
import { IItem } from '../../../interfaces'
import { useAppSelector } from '../../../reducers/hooks'
import { RootState } from '../../../store'
import { BreadCrumbs } from '../../AbstractComponents/BreadCrumbs'
import { ItemsAccordeon } from './ItemsAccordeon'
import './addUserPage.css'
import { UserInformationForm } from './UserInformationForm'

export const AddUserPage: React.FC = () => {

    const dispatch = useDispatch();
    const location = useLocation();
    const itemsByCategories = useAppSelector((s:RootState)=>s.Items.categoriesFiltered);
    

    useEffect(()=>{
        dispatch(getItemsByCategoriesFAC());
    }, [])

    const [validation, setValidation] = useState<boolean>(false);

    const addNewUser = () => {
        dispatch(addUserFAC());
    }
    console.log("action - добавить юзера")

    return(<div className="">
                <BreadCrumbs path={location.pathname}></BreadCrumbs>
                <UserInformationForm setBtnState={(mean: boolean)=>setValidation(mean)}/>
                <div className="addItemsContainer__UsersList">
                    <div className="flex-row">
                        <div className="circleSectionNumber">2</div>
                        <h3 className="sectionTitle__UsersList">Add Items</h3>
                    </div>
                    {itemsByCategories.map((x:any)=><ItemsAccordeon 
                    key={Math.random()} 
                    items={x} 
                    />)}
                </div>
                <button onClick={addNewUser} 
                    disabled={!validation} 
                    className={`saveButton__UsersList ${validation ? "saveBtn" : "closeBtn"}`}>
                    Save
                </button>
            </div>
    )
}