import React from 'react'
import { Avatar, Toolbar } from '@mui/material'

import myImage from '../../assets/img/first_avatar.png'
import { LocalStorageItems } from '../../localStorageItemEnums'
import { UserNavigationMenu } from '../Menu/UserNavigationMenu'
import { SideMenu } from '../Sidebars/SideMenu'

import './styles.css'

export const AuthenticatedHeader: React.FC = () => {
  const user = JSON.parse(localStorage.getItem(LocalStorageItems.User)!)

  const avatar = <Avatar alt="Avatar" src={myImage} />

  return (
    <div className="header authenticated_header header_block">
      <Toolbar>
        <SideMenu />
      </Toolbar>
      <div className="header_userinfo">
        <UserNavigationMenu icon={avatar} user={user} />
      </div>
    </div>
  )
}
