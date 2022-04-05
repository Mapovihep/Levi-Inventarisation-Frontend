import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router'
import { IUser } from '../../../interfaces'
import { RootState } from '../../../store'
import { BreadCrumbs } from '../../AbstractComponents/BreadCrumbs'
import { ItemsAccordeon } from './ItemsAccordeon'
import './addUserPage.css'
import { UserInformationForm } from './UserInformationForm'
import { editUserProps } from './interfaceForPageState'
import { useAppSelector } from '../../../store/reducers/hooks'
import { inventoryAction } from '../../../store/actions/inventory/inventory'
import { userFetchAction } from '../../../store/actions/user/user'

export const EditUserPage: React.FC = () => {

    const dispatch = useDispatch();
    const location = useLocation();
    const itemsByCategories = useAppSelector((s:RootState)=>s.Inventory.inventoryByCategories);
    const userInfo: IUser = useAppSelector((s:RootState)=>s.Users.newUser);

    useEffect(()=>{
        dispatch(inventoryAction.getInventoryByCategories.started);
        dispatch(userFetchAction.getOneUser.started(location.pathname.slice(-36)));
    }, [])

    const [validation, setValidation] = useState<boolean>(false);

    const updateNewUser = () => {
        dispatch(userFetchAction.updateOneUser.started(location.pathname.slice(-36)))
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