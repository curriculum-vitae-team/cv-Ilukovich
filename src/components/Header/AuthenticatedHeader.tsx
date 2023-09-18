import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar, Toolbar } from '@mui/material'

import myImage from '../../assets/img/first_avatar.png'
import { SideMenu } from '../Sidebars/SideMenu'

import './styles.css'

export const AuthenticatedHeader: React.FC = () => {
  const userEmail = localStorage.getItem('login')

  return (
    <div className="header">
      <div className="authenticated_header header_block">
        <Toolbar>
          <SideMenu />
        </Toolbar>
        <div className="header_userinfo">
          <span className="header_user_email header_text">{userEmail}</span>
          <Link to="login">
            <Avatar alt="Avatar" src={myImage} />
          </Link>
        </div>
      </div>
    </div>
  )
}
