import * as React from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import TranslateIcon from '@mui/icons-material/Translate'
import { IconButton, ListItemIcon } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'

import { AppRoutes } from '../../path'

type Anchor = 'left'

export const SideMenu = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  })

  const toggleDrawer =
    (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }

      setState({ ...state, [anchor]: open })
    }

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Employees', 'Projects', 'CVs'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton to={AppRoutes[text.toLowerCase()]} component={Link}>
              {index === 0 && (
                <ListItemIcon>
                  <PeopleAltIcon />
                </ListItemIcon>
              )}
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Departments', 'Positions', 'Skills', 'Languages'].map(text => (
          <ListItem key={text} disablePadding>
            <ListItemButton to={AppRoutes[text.toLowerCase()]} component={Link}>
              {text === 'Languages' && (
                <ListItemIcon>
                  <TranslateIcon />
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
    <div>
      <React.Fragment key="left">
        <Button onClick={toggleDrawer('left', true)}>
          <IconButton size="large" edge="start" color="error" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
        </Button>
        <Drawer anchor="left" open={state['left']} onClose={toggleDrawer('left', false)}>
          {list('left')}
        </Drawer>
      </React.Fragment>
    </div>
  )
}
