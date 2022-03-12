import React, { useEffect, useState } from "react"
import { addUserAC } from "../../../../actionCreators/userActionCreator"
import { useAppDispatch, useAppSelector } from "../../../../reducers/hooks"
import { RootState } from "../../../../store"
import { PageValues, validationErrors } from "../../../../validationErrors"
import { AutocompleteMUI } from "../../../AbstractComponents/AutocompleteMUI"
import { AutocompleteMultipleMUI } from "../../../AbstractComponents/AutocompleteMultipleMUI"
import { FormInputMui } from "../FormInputMui"
import { addUserState, validationState } from "../interfaceForPageState"

interface userInformationFormProps{
    setBtnState: (mean: boolean) => void
}
export const UserInformationForm: React.FC<userInformationFormProps> = ({setBtnState}) => {

    const dispatch = useAppDispatch();
    const setups = useAppSelector((state: RootState) => state.Setups.Setups)
    
    const [validation, setValidation] = useState<validationState>({
        validFName: 'Place the value',
        validLName: 'Place the value',
        validStatus: 'Choose status',
        validEmail: 'Place the value',
        validPhone: 'Place the value',
        validForm: false
    });
    const [user, setUser] = useState<addUserState>({
        firstName: '', 
        lastName: '', 
        status: false, 
        phone:'', 
        email:'',
        inventorySetups: []
    })

    useEffect(()=>{
        if(validation.validForm){
            setBtnState(validation.validForm);
            dispatch(addUserAC("ADD_INFO", user));
        }
    }, [validation])

    
    const checkValid = () => {setValidation(s=>({...s, 
        validForm: s.validFName=='' &&s.validLName=='' &&s.validEmail=='' &&s.validPhone=='' &&s.validStatus==''
        &&user.email.length!=0 &&user.status!=undefined &&user.firstName.length!=0 &&user.lastName.length!=0 &&user.phone.length!=0
    }))}

    const addValue = (type: PageValues, value: string, arr?: string[]) => {
        switch (type) {
            case PageValues.PHONE:
                setUser(s=>({...s, phone: value}));
                setValidation(s=>({...s, validPhone: validationErrors(type, value)}));
                break;
            case PageValues.EMAIL:
                setUser(s=>({...s, email: value}));
                setValidation(s=>({...s, validEmail: validationErrors(type, value)}));
                break;
            case PageValues.FIRST_NAME:
                setUser(s=>({...s, firstName: value}));
                setValidation(s=>({...s, validFName: validationErrors(type, value)}));
                break;
            case PageValues.LAST_NAME:
                setUser(s=>({...s, lastName: value}));
                setValidation(s=>({...s, validLName: validationErrors(type, value)}));
                break;
            case PageValues.STATUS:
                setUser(s=>({...s, status: (value=='Active' ? true : false)}));
                setValidation(s=>({...s, validStatus: validationErrors(type, value)}));
                break;
            case PageValues.SETUP:
                arr!=undefined&&setUser(s=>({...s, inventorySetups: arr.map(x=>setups.find(s=>s.name==x))}));//имена чертовых сетапов или сетапа
                break;
        }
        checkValid()
    }
    return(
        <React.Fragment>
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
                                <FormInputMui addValue={(type: PageValues, value: string)=>addValue(type, value)}
                                    type={PageValues.FIRST_NAME}
                                    validatorMessage={validation.validFName}
                                    placeholder="first name"
                                    title="First name"/>
                                <FormInputMui addValue={(type: PageValues, value: string)=>addValue(type, value)}
                                    type={PageValues.LAST_NAME}
                                    validatorMessage={validation.validLName}
                                    placeholder="last name"
                                    title="Last name"/>
                                <div className="formItem">
                                    <AutocompleteMUI 
                                    options={['Active', 'Unactive']} 
                                    giveValue={(value:string) => addValue(PageValues.STATUS, value)}  
                                    type='Status'
                                    validatorMessage={validation.validStatus}/>
                                </div>
                                <div className="formItem">
                                    <AutocompleteMultipleMUI 
                                    options={setups.map(x=>x.name)}
                                    giveMultipleValue={arr => addValue(PageValues.SETUP, 'value', arr)}  
                                    type='Setups'
                                    validatorMessage="Your setups are splended"/>
                                </div>
                            </form>
                            <h4 className="sectionTitle__UsersList">Contacts</h4>
                            <form className="contactsForm__UsersList"> 
                                <FormInputMui addValue={(type:PageValues, value: string)=>addValue(type, value)}
                                    type={PageValues.PHONE}
                                    validatorMessage={validation.validPhone}
                                    placeholder="+7 (---) -- --"
                                    title="Phone">
                                </FormInputMui>
                                <FormInputMui addValue={(type:PageValues, value: string)=>addValue(type, value)}
                                    type={PageValues.EMAIL}
                                    validatorMessage={validation.validEmail}
                                    placeholder="email"
                                    title="Email">
                                </FormInputMui>
                            </form>
                        </div>
                    </div>
                </div>
        </React.Fragment>
    )
}