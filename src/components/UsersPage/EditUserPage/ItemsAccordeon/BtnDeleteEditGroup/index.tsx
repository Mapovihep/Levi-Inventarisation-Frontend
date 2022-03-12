import React from 'react'

interface IPropsBtnDeleteEditBtnGroup{
    del?: (E: React.MouseEvent<HTMLButtonElement>) => void,
    edit?: (E: React.MouseEvent<HTMLButtonElement>) => void,
}
export const BtnDeleteEditGroup: React.FC<IPropsBtnDeleteEditBtnGroup> = ({del: del, edit: edit}) => {
    return (
        <div className="accordeonEditDeleteBtnGroup" onClick={e => e.stopPropagation()}>
            <button className="secondaryButton" onClick={del}>Edit</button>
            <button className="secondaryButton" onClick={edit}>Delete</button>
        </div>
    )
}