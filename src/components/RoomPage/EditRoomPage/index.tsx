import { TabPanelUnstyled } from '@mui/base'
import { Box, CircularProgress, Tab, Tabs } from '@mui/material'
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { IRoom } from '../../../interfaces'
import { RootState } from '../../../store'
import { useAppSelector } from '../../../store/reducers/hooks'
import { BreadCrumbs } from '../../AbstractComponents/BreadCrumbs'
import { ItemsList } from '../../ItemsPage/ItemsList'
import { UsersList } from '../../UsersPage/UsersList'

export const EditRoomPage : React.FC = () => {
    const room: IRoom | null = useAppSelector((s:RootState)=> s.Rooms.currentPage);
    const loading: boolean = useAppSelector((s:RootState)=> s.Rooms.fetchState.get);
    const path: string = useLocation().pathname;

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    console.log(path);

    interface TabPanelProps{
        children?: React.ReactNode;
        index: number;
        value: number;
    }
    const TabPanel : React.FC<TabPanelProps> = ({children, index, value}) => {
        return(
            <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            >
                {children}
            </div>
        )
    }
    return(
        <React.Fragment>
            {
                loading ?
                <CircularProgress/>
                : <div>
                    <BreadCrumbs path={path}></BreadCrumbs>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Setups" />
                            <Tab label="Items" />
                        </Tabs>
                    </Box>
                    <TabPanel
                        value={value}
                        index={0}
                        children={
                            <div>Здесь могла быть ваша реклама</div>
                        }
                    />
                    <TabPanel
                        value={value}
                        index={1}
                        children={
                            <ItemsList
                                shortTable={false}
                                itemsByCategory={room?.inventoryLots}
                            />
                        }
                    />
                </div>
            }
        </React.Fragment>

    )
}