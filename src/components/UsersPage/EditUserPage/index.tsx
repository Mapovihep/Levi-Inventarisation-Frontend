import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router'
import { getItemsByCategoriesFAC } from '../../../actionCreators/itemsActionCreator'
import { IItem, IUser } from '../../../interfaces'
import { useAppSelector } from '../../../reducers/hooks'
import { RootState } from '../../../store'
import { BreadCrumbs } from '../../AbstractComponents/BreadCrumbs'
import { ItemsAccordeon } from './ItemsAccordeon'
import './addUserPage.css'
import { UserInformationForm } from './UserInformationForm'
import { editUserProps } from './interfaceForPageState'
import { getUserByIdFAC, updateUserFAC } from '../../../actionCreators/userActionCreator'

export const EditUserPage: React.FC = () => {

    const dispatch = useDispatch();
    const location = useLocation();
    const itemsByCategories = useAppSelector((s:RootState)=>s.Items.categoriesFiltered);
    const userInfo: IUser = useAppSelector((s:RootState)=>s.Users.currentUser);
    
    useEffect(()=>{
        dispatch(getItemsByCategoriesFAC());
        dispatch(getUserByIdFAC(location.pathname.slice(-36)));
    }, [])

    const [validation, setValidation] = useState<boolean>(false);

    const updateNewUser = () => {
        dispatch(updateUserFAC(location.pathname.slice(-36)))
    }
    console.log('render');
    return(<div className="">
                <BreadCrumbs path={location.pathname}></BreadCrumbs>
                <UserInformationForm 
                    setBtnState={(mean: boolean)=>setValidation(mean)} 
                    userInfo={userInfo}
                    />
                <div className="addItemsContainer__UsersList">
                    <div className="flex-row">
                        <div className="circleSectionNumber">2</div>
                        <h3 className="sectionTitle__UsersList">Add Items</h3>
                    </div>
                    {itemsByCategories.map((x:any)=><ItemsAccordeon 
                    key={Math.random()} 
                    items={x} 
                    addedToUserItems={userInfo.inventoryLots}
                    />)}
                </div>
                <button onClick={updateNewUser} 
                    disabled={!validation} 
                    className={`saveButton__UsersList ${validation ? "saveBtn" : "closeBtn"}`}>
                    Update
                </button>
            </div>
    )
}