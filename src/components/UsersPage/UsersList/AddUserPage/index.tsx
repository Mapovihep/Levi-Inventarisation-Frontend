import { Autocomplete, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { ISetup } from '../../../../interfaces'
import { validationErrors, PageValues } from '../../../../validationErrors'
import { BreadCrumbs } from '../../../BreadCrumbs'
import { CustomAutocomplete } from '../../../CustomAutocomplete'
import { ItemsAccordeon } from '../ItemsAccordeon'
import './addUserPage.css'


interface addUserPageState{
    firstName: string,
    lastName: string,
    status: boolean,
    setups: ISetup[],
    phone: string,
    email: string,
    validErrors: string[]
}
export const AddUserPage: React.FC = () => {
    const location = useLocation();
    const [state, setState] = useState<addUserPageState>({firstName: '', 
    lastName: '', 
    status: false, 
    setups:[], 
    phone:'', 
    email:'',
    validErrors: [] 
}); 
    
    const addValue = (type: PageValues, value: string) => {
        switch (type) {
            case PageValues.PHONE:
                state.validErrors.push(validationErrors(PageValues.PHONE, value))
                setState(s=>({...s, firstName: value, validErrors: [...s.validErrors, validationErrors(PageValues.PHONE, value)]}));
                break;
            case PageValues.EMAIL:
                setState(s=>({...s, email: value, validErrors: [...s.validErrors, validationErrors(PageValues.EMAIL, value)]}));
                break;
            case PageValues.FIRST_NAME:
                setState(s=>({...s, firstName: value, validErrors: [...s.validErrors, validationErrors(PageValues.FIRST_NAME, value)]}))
                break;
            case PageValues.LAST_NAME:
                setState(s=>({...s, lastName: value, validErrors: [...s.validErrors, validationErrors(PageValues.LAST_NAME, value)]}))
                break;
            case PageValues.STATUS:
                setState(s=>({...s,  
                    status: (value=='active' ? true : false), 
                    validErrors: [...s.validErrors, validationErrors(PageValues.LAST_NAME, value)]})
                    )
                break;
        
            default:
                break;
        }
    }
    const addFirstName = (value: string) => setState(s=>({...s, firstName: value}));
    const addLastName = (value: string) => setState(s=>({...s, lastName: value}));
    const addStatus = (value: string) => setState(s=>({...s, status: value=='active' ? true : false}));
    const addPhone = (value: string) => setState(s=>({...s, phone: value}));
    const addEmail = (value: string) => setState(s=>({...s, email: value}));
    const addSetups = (value: string) => console.log(value);
    const addNewUser =() => {
        console.log('CREATE ACTION');
    }
    return(<div className="">
                <BreadCrumbs path={location.pathname}></BreadCrumbs>{/* реализовать breadCunts */}
                <h2 className="title">Add User</h2>
                <div className="addUserContainer__UsersList">
                    <div className='mainInformation__UsersList'>
                        <div className="flex-column enterInformation">
                            <div className="flex-row">
                                <div className="circleSectionNumber">1</div>
                                <h3 className="sectionTitle__UsersList">Enter Information</h3>
                            </div>
                            <div className="avatarEmptyAddUser"></div>
                        </div>
                        <div className="flex-column">
                            <h3 className="sectionTitle__UsersList">Main Information</h3>
                            <form className="sectionForm__UsersList">
                                <div className="formItem">
                                    <h4 className="inputTitle">First Name</h4>
                                    <input type="text" 
                                    onChange={(e) => setState(s=>({...s, firstName: e.target.value}))}
                                    className="inputAddUser__UsersList"
                                    placeholder="First Name"/>
                                </div>
                                <div className="formItem">
                                    <h4 className="inputTitle">Last Name</h4>
                                    <input type="text" 
                                    onChange={(e) => setState(s=>({...s, lastName: e.target.value}))}
                                    className="inputAddUser__UsersList"
                                    placeholder="Last Name"/>
                                </div>
                                <div className="formItem">
                                    <h4 className="inputTitle">Status</h4>
                                    <CustomAutocomplete giveValue={value => addStatus(value)} type='Status'></CustomAutocomplete>
                                    {validationErrors(PageValues.STATUS,String(state.status))!=' '&&
                                    <p className="validationErrorMessage">
                                        {validationErrors(PageValues.STATUS,String(state.status))}
                                    </p>}
                                </div>
                                <div className="formItem">
                                    <h4 className="inputTitle">Setup</h4>
                                    <CustomAutocomplete giveValue={value => addSetups(value)} type='Rooms'></CustomAutocomplete>
                                </div>
                            </form>
                            <h4 className="sectionTitle__UsersList">Contacts</h4>
                            <form className="contactsForm__UsersList">
                                <div className="formItem">
                                    <h4 className="inputTitle">Phone</h4>
                                    <input type="tel" 
                                    onChange={(e) => setState(s=>({...s, phone: e.target.value}))}
                                    className="inputAddUser__UsersList"
                                    placeholder="+7 (---) -- --"
                                    value={`${state.phone}`}
                                    />
                                    {state.phone!=''?
                                    <p className="validationErrorMessage">
                                        {validationErrors(PageValues.PHONE,state.phone)}
                                    </p>
                                    : <p className="recommendations">Please enter your phone</p>}
                                </div>
                                <div className="formItem">
                                    <h4 className="inputTitle">Email</h4>
                                    <input type="text" 
                                    onChange={(e) => setState(s=>({...s, email: e.target.value}))}
                                    className="inputAddUser__UsersList"
                                    placeholder="Email"/>
                                    {state.email!='' ?
                                    <p className="validationErrorMessage">
                                        {validationErrors(PageValues.EMAIL,state.email)}
                                    </p>:
                                    <p className="recommendations">Please enter your email</p>}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="addItemsContainer__UsersList">
                    <div className="flex-row">
                        <div className="circleSectionNumber">2</div>
                        <h3 className="sectionTitle__UsersList">Add Items</h3>
                    </div>
                    <ItemsAccordeon></ItemsAccordeon>
                </div>
                <button onClick={addNewUser} className="saveButton__UsersList saveBtn">Save</button>
            </div>
    )
}