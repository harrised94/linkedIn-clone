import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import './Sidebar.css'
import { selectUser } from './features/counter/userSlice'

function Sidebar() {

    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )

    return (


        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.pexels.com/photos/2469122/pexels-photo-2469122.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400" alt="" />
                <Avatar src={user.photoUrl} className="sidebar__avatar"> {user.email[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
           
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber"> 5,150
                    </p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber"> 1,499
                    </p>
                </div>
            </div>
            </div>

            <div className="sidebar__bottom">
               {recentItem('reactjs')}
               {recentItem('programming')}
               {recentItem('design')}
               {recentItem('developer')}
               {recentItem('html')}
            </div>
        
        </div>
    )
}

export default Sidebar
