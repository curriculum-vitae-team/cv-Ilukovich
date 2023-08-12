import { Avatar, IconButton, Toolbar} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'
import myImage from '../assets/img/first_avatar.png'

interface HeaderProps {
  isAuthenticatedUser: boolean
}

export const Header: React.FC<HeaderProps> = props => {
  const { isAuthenticatedUser } = props

  const makeActiveButton = (event: React.MouseEvent) => {
    const allHeaderButtons = Array.from(document.getElementsByClassName('header_button'))

    allHeaderButtons.forEach(element => {
      element.classList.remove('active_header_button')
    })

    event.currentTarget.classList.add('active_header_button')
  }

  return (
    <div className="header">
      {isAuthenticatedUser ? (
        <div className="unauthenticated_header header_block">
          <div
            className="login_button header_button active_header_button"
            onClick={makeActiveButton}
          >
            <span className="header_button_text active_header_button_text">LOGIN</span>
          </div>
          <div className="signup_button header_button" onClick={makeActiveButton}>
            <span className="header_text">SIGHUP</span>
          </div>
        </div>
      ) : (
        <div className="authenticated_header header_block">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="error"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
          <div className="header_userinfo">
            <span className="header_user_email header_text">test@gmail.com</span>
            {/* <img src={myImage} alt="" /> */}
            <Avatar alt="Avatar" src={myImage} />
          </div>
        </div>
      )}
    </div>
  )
}
