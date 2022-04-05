import { Box, Modal, Typography } from '@mui/material'
import React from 'react'
import { BigDeleteIconModal } from '../../../../AbstractComponents/Images/BigIcons/BigDeleteIconModal'
import { Link } from 'react-router-dom';

interface IProps{
    setOpened: (E:React.MouseEvent<HTMLButtonElement>)=>void,
    deleteUser: (E:React.MouseEvent<HTMLButtonElement>)=>void,
    openedModal: boolean,
    userId: string
}
export const DeleteEditBtnGroupModalUser: React.FC<IProps> = ({openedModal,deleteUser,setOpened,userId}) => {
    return(
            <React.Fragment>
                <div className="btngroup">
                <Link className='editIcon mr24' to={`/Users/${userId}`}>
                </Link>
                    <button onClick={deleteUser} className='deleteIcon'/>
                </div>
                <Modal
                open={openedModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                style={{display: 'flex'}}>
                    <div style={{
                        backgroundColor: 'white',
                        width: '450px',
                        height: '330px',
                        margin: 'auto',
                        display: 'flex',
                        flexDirection: 'column'}}>
                        <Box style={{margin: '25px auto 6px auto'}}>
                            <BigDeleteIconModal />
                        </Box>
                        <Typography style={{color: "#00000D",fontSize: '20px', margin: '6px auto', fontWeight: 500}}>
                            Delete this user?
                        </Typography>
                        <Typography style={{color: "#C2C2C2", fontSize: '14px', margin: '0 auto 35px auto'}}>
                            You cannot restore the user's information after deleting
                        </Typography>
                        <Box style={{margin: '0 auto 0 auto', display: 'flex'}}>
                            <button
                                className='deleteBtn userDeleteBtn'
                                style={{marginRight: '30px'}}
                                onClick={deleteUser}>Delete</button>
                            <button
                                className='closeBtn userCloseBtn'
                                onClick={setOpened}>Close</button>
                        </Box>
                    </div>
                </Modal>
            </React.Fragment>
    )
}