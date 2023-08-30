import React from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import { Avatar, IconButton, Toolbar } from '@mui/material'

import myImage from '../../assets/img/first_avatar.png'

import './styles.css'

export const AuthenticatedHeader: React.FC = () => {
  return (
    <div className="header">
      <div className="authenticated_header header_block">
        <Toolbar>
          <IconButton size="large" edge="start" color="error" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <div className="header_userinfo">
          <span className="header_user_email header_text">test@gmail.com</span>
          <Link to="login">
            <Avatar alt="Avatar" src={myImage} />
          </Link>
        </div>
      </div>
    </div>
  )
}
