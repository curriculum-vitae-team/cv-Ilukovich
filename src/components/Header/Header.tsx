import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import { Avatar, IconButton, Toolbar } from '@mui/material'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'

import myImage from '../../assets/img/first_avatar.png'
import { AppRoutes } from '../../path'

import './styles.css'

interface HeaderProps {
  isAuthenticatedUser: string | null
  activeTab: Number
  setActiveTab: Function
}

export const Header: React.FC<HeaderProps> = props => {
  const { isAuthenticatedUser, activeTab, setActiveTab } = props

  const changeActiveTab = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue)
  }

  return (
    <div className="header">
      {!isAuthenticatedUser ? (
        <div className="unauthenticated_header">
          <Box sx={{ width: '100%' }}>
            <Tabs
              value={activeTab}
              onChange={changeActiveTab}
              centered
              TabIndicatorProps={{ style: { background: 'red' } }}
            >
              <Tab label="login" component={Link} to={AppRoutes.login} className="caps_title" />
              <Tab label="signup" component={Link} to={AppRoutes.signup} className="caps_title" />
            </Tabs>
          </Box>
        </div>
      ) : (
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
      )}

      <Outlet />
    </div>
  )
}
