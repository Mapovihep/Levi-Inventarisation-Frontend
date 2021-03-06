import React, { useEffect, useState } from "react"
import { IUser } from "../../../../interfaces"
import { IUserSend } from "../../../../interfaces/userInterfaces"
import { RootState } from "../../../../store"
import { userPageAction } from "../../../../store/actions/user/user"
import { useAppDispatch, useAppSelector } from "../../../../store/reducers/hooks"
import { PageValues, validationErrors } from "../../../../validationErrors"
import { AutocompleteMUI } from "../../../AbstractComponents/AutocompleteMUI"
import CustomSelect from "../../../AbstractComponents/CustomSelect"
import { FormInputMui } from "../FormInputMui"
import { editUserState, validationState } from "../interfaceForPageState"

interface userInformationFormProps{
    setBtnState: (mean: boolean) => void,
    userInfo: IUser
}
export const UserInformationForm: React.FC<userInformationFormProps> = ({setBtnState, userInfo}) => {

    const dispatch = useAppDispatch();
    const setups = useAppSelector((state: RootState) => state.Setups.Setups);

    const [userSetups, setUserSetups] = useState(userInfo.inventorySetups.map(x=>x.name));
    const [validation, setValidation] = useState<validationState>({
        validFName: '',
        validLName: '',
        validIsAdmin: '',
        validEmail: '',
        validPhone: '',
        validForm: false
    });
    const [user, setUser] = useState<IUser>({...userInfo})

    useEffect(()=>{
        checkValid();
        setUser({...userInfo})
    }, [user])

    useEffect(()=>{
        if(validation.validForm){
            setBtnState(validation.validForm);
            dispatch(userPageAction.addInfoToUser.started(user));
        }
    }, [validation, userSetups])


    const checkValid = () =>
    {
        setUser({...userInfo});
        setValidation(s=>({...s,
        validForm: s.validFName==''
        &&s.validLName==''
        &&s.validEmail==''
        &&s.validPhone==''
        &&s.validIsAdmin==''
        &&user.isAdmin!=undefined
        &&user.name.length!=0
        &&user.lastName.length!=0
        &&user.phone.length!=0
        &&user.email.length!=0
        })

    )}

    const addValue = (type: PageValues, value: string) => {
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
                setUser(s=>({...s, name: value}));
                setValidation(s=>({...s, validFName: validationErrors(type, value)}));
                break;
            case PageValues.LAST_NAME:
                setUser(s=>({...s, lastName: value}));
                setValidation(s=>({...s, validLName: validationErrors(type, value)}));
                break;
            case PageValues.STATUS:
                setUser(s=>({...s, status: (value=='Active' ? true : false)}));
                setValidation(s=>({...s, validIsAdmin: validationErrors(type, value)}));
                break;
            // case PageValues.SETUP:
            //     arr!=undefined&&setUser(s=>({...s, inventorySetups: arr.map(x=>setups.find(s=>s.name==x))}));
            //     break;
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
                                    title="First name"
                                    initialValue={user.name}/>
                                <FormInputMui addValue={(type: PageValues, value: string)=>addValue(type, value)}
                                    type={PageValues.LAST_NAME}
                                    validatorMessage={validation.validLName}
                                    placeholder="last name"
                                    title="Last name"
                                    initialValue={user.lastName}/>
                                <div className="formItem">
                                    <AutocompleteMUI
                                    options={['Active', 'Unactive']}
                                    giveValue={(value:string) => addValue(PageValues.STATUS, value)}
                                    type='Status'
                                    validatorMessage={validation.validIsAdmin}
                                    initialValue={userInfo.isAdmin ? 'Active' : 'Unactive'}/>
                                </div>
                                <div className="formItem">
                                    <h4 className="inputTitle">Setups</h4>
                                    <CustomSelect
                                        multiple
                                        placeholderText="Choose setups"
                                        value={userSetups}
                                        setValue={setUserSetups}
                                        nameArray={setups.map(x=>x.name)}/>
                                </div>
                            </form>
                            <h4 className="sectionTitle__UsersList">Contacts</h4>
                            <form className="contactsForm__UsersList">
                                <FormInputMui addValue={(type:PageValues, value: string)=>addValue(type, value)}
                                    type={PageValues.PHONE}
                                    validatorMessage={validation.validPhone}
                                    placeholder="+7 (---) -- --"
                                    title="Phone"
                                    initialValue={user.phone}>
                                </FormInputMui>
                                <FormInputMui addValue={(type:PageValues, value: string)=>addValue(type, value)}
                                    type={PageValues.EMAIL}
                                    validatorMessage={validation.validEmail}
                                    placeholder="email"
                                    title="Email"
                                    initialValue={user.email}>
                                </FormInputMui>
                            </form>
                        </div>
                    </div>
                </div>
        </React.Fragment>
    )
}