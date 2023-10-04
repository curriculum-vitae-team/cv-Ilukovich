import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import {
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SvgIcon
} from '@mui/material'

import { tabsList } from './tabsList'

import './styles.css'

export const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDrawer = () => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return
    }

    setIsOpen(prevState => !prevState)
  }

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer()}
      onKeyDown={toggleDrawer()}
    >
      <List>
        {tabsList.map(({ text, route, icon }) => (
          <ListItem key={text} disablePadding>
            <ListItemButton to={route} component={Link}>
              {icon && (
                <ListItemIcon>
                  <SvgIcon component={icon} />
                </ListItemIcon>
              )}
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <>
      <Button onClick={toggleDrawer()}>
        <IconButton size="large" edge="start" color="primary" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
      </Button>
      <Drawer anchor="left" open={isOpen} onClose={toggleDrawer()}>
        {list()}
      </Drawer>
    </>
  )
}
