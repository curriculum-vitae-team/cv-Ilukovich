import React from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { Avatar, IconButton, Toolbar } from '@mui/material'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'

import myImage from '../../assets/img/first_avatar.png'

import './styles.css'

interface HeaderProps {
  isAuthenticatedUser: boolean
}

export const Header: React.FC<HeaderProps> = props => {
  const { isAuthenticatedUser } = props

  const [value, setValue] = React.useState(0)

  const changeActiveTab = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <div className="header">
      {isAuthenticatedUser ? (
        <div className="unauthenticated_header">
          <Box sx={{ width: '100%' }}>
            <Tabs
              value={value}
              onChange={changeActiveTab}
              centered
              TabIndicatorProps={{ style: { background: 'red' } }}
            >
              <Tab label="LOGIN" />
              <Tab label="SIGNUP" />
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
            <Avatar alt="Avatar" src={myImage} />
          </div>
        </div>
      )}
    </div>
  )
}
