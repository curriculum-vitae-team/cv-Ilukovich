import * as React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Stack from '@mui/material/Stack'

import { getCrumbsByUrl } from '../../helpers/breadcrumbs/getCrumbsByUrl'
import { AppRoutes } from '../../path'

export const AuthBreadcrumbs: React.FC = () => {
  const location = useLocation()
  const dirs = location.pathname.split('/').filter(item => item != '')

  const crumbs = getCrumbsByUrl(dirs)

  const breadcrumbs = crumbs.map(({ title, path }, index) => (
    <NavLink key={index} to={path}>
      {title}
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
