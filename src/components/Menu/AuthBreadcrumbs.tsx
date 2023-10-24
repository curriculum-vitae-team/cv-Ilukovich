import * as React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Stack from '@mui/material/Stack'

import { AppRoutes } from '../../path'

export const AuthBreadcrumbs: React.FC = () => {
  const location = useLocation()
  const pathNameArray = location.pathname.split('/').filter(item => item != '')

  const breadcrumbs = pathNameArray.map((item, index, arr) => (
    <NavLink
      key={index}
      to={AppRoutes[item]}
      style={{ pointerEvents: index === arr.length - 1 ? 'none' : 'auto' }}
      color={index === arr.length - 1 ? 'info' : 'primary'}
    >
      {item}
    </NavLink>
  ))

  return (
    <Stack spacing={2}>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        <NavLink to={AppRoutes.employees}>Home</NavLink>
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  )
}
