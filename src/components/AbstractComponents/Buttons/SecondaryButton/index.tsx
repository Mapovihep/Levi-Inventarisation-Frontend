import './secondaryButton.css'

interface IPropsButton{
    status: string,
    text: string,
    openAddBar?: (E: React.MouseEvent<HTMLButtonElement>) => void,
    color: string
}

export const SecondaryButton: React.FC<IPropsButton> = ({status, text, color, openAddBar}) => {
    switch (status) {
        case 'DEFAULT':
            return (color=='ORANGE' ? 
            <button onClick={openAddBar} className="defaultOrangeSecondaryButton">{text}</button>
            : <button onClick={openAddBar} className="defaultBlueSecondaryButton">{text}</button>) 
        case 'HOVER':
            return (<button>{text}</button>)

        case 'ACTIVE':
            return (<button>{text}</button>)
        case 'DISABLED':
            return (color=='ORANGE' ? 
            <button onClick={openAddBar} className="disabledOrangeSecondaryButton">{text}</button>
            : <button onClick={openAddBar} className="disabledBlueSecondaryButton">{text}</button>) 
        default:
            return <button>{text}</button>
    }
    
}