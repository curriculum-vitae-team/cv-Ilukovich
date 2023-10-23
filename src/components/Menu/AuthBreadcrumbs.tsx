import * as React from 'react'
import { useLocation } from 'react-router-dom'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'

import { getCrumbsByUrl } from '../../helpers/breadcrumbs/getCrumbsByUrl'
import { getDirsFromUrl } from '../../helpers/general/getDirsFromUrl'

export const AuthBreadcrumbs: React.FC = () => {
  useLocation()

  const dirsFromUrl = getDirsFromUrl()
  const crumbs = getCrumbsByUrl(dirsFromUrl)

  const breadcrumbs = crumbs.map(({ title, path }, index) => (
    <Link underline="hover" key={index} color="inherit" href={path}>
      {title}
    </Link>
  ))

  return (
    <Stack spacing={2}>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  )
}
