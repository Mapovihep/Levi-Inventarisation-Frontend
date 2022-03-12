import './primaryButton.css'
enum state{
    DEFAULT = 'DEFAULT',
    HOVER = 'HOVER',
    ACTIVE = 'ACTIVE',
    DISABLED = 'DISABLED'
}
interface IPropsButton{
    status: state,
    text: string,
    openAddBar?: (E: React.MouseEvent<HTMLButtonElement>) => void,
}
export const PrimaryButton: React.FC<IPropsButton> = ({status, text, openAddBar}) => {
    switch (status) {
        case 'DEFAULT':
            return (<button onClick={openAddBar} className="defaultPrimaryButton">{text}</button>)
        case 'HOVER':
            return (<button>{text}</button>)

        case 'ACTIVE':
            return (<button>{text}</button>)
        case 'DISABLED':
            return (<button onClick={openAddBar} className="disabledPrimaryButton">{text}</button>)
        default:
            return <button>{text}</button>
    }
    
}