import  './styles.css'

import { Card,  Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_USERS_DATA_FETCH } from '../../actions/SagaActions';
import { Post } from '../MainPageParts/Post';
import { useLocation } from 'react-router'
import { routesSaver } from '../../actions/RoutesForComponents';

const ProfilePage = props => {
    const userProfile = useSelector(state => (state.saga.userProfile||[]));
    const posts = useSelector(state => (state.saga.posts||[]))
    const usersPosts = posts.filter(el => el.modelUserId === userProfile.id);
    const dispatch = useDispatch();
    const location = useLocation();
    const getProfileThere = () => {
        dispatch({type: LOAD_USERS_DATA_FETCH})
    }
    useEffect(()=>{getProfileThere();
        routesSaver(location.pathname);
        dispatch({type: "CHANGE_ROUTE", payload: '/profile'})
    },[])
    const ProfileInfo = () => {
        return <Card id="profile_info">
            <Typography>id: { userProfile.id.substr(25) }</Typography>
            <Typography>email: { userProfile.email }</Typography>
            <Typography>First name: { userProfile.firstName }</Typography>
            <Typography>Last name: { userProfile.lastName }</Typography>
            <Typography>This user's posts: {usersPosts ? usersPosts.length : ' 0 '}</Typography>
        </Card>
    }
    
    const UsersPosts = props =>{
        const [usersPostsFromProps, setUsersPostsFromProps] = useState(props.posts)
        useEffect(()=>{setUsersPostsFromProps(props.posts)}, [])
        return(
            usersPostsFromProps.map(newPost=> 
                <Post 
                postInfo={newPost}
                key={Math.random()}>
                </Post>)
        )
    }
    return(
        <Box id='profile_container'>
            <ProfileInfo></ProfileInfo>
            <UsersPosts posts={usersPosts}></UsersPosts>
        </Box>
    )
}
export default ProfilePage;