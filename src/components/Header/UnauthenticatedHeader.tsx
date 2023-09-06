import React from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'

import { AppRoutes } from '../../path'

import './styles.css'

interface HeaderProps {
  activeTab: Number
  setActiveTab: Function
}

export const UnauthenticatedHeader: React.FC<HeaderProps> = props => {
  const { activeTab, setActiveTab } = props

  const changeActiveTab = (event: React.SyntheticEvent, newValue: string) => {
    setActiveTab(newValue)
  }

  return (
    <div className="header">
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
    </div>
  )
}
