import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { AppLayoutAuth } from './components/Layout/AppLayoutAuth'
import { AppRoutes } from './path'

export const AuthenticatedWrapper = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayoutAuth />}>
          <Route path="/" element={<Navigate to={AppRoutes.employees} replace />} />
          <Route path={AppRoutes.employees} element={<div>employees</div>} />
          <Route path={AppRoutes.projects} element={<div>Projects</div>} />
          <Route path={AppRoutes.cvs} element={<div>cvs</div>} />
          <Route path={AppRoutes.departments} element={<div>departments</div>} />
          <Route path={AppRoutes.positions} element={<div>positions</div>} />
          <Route path={AppRoutes.skills} element={<div>skills</div>} />
          <Route path={AppRoutes.languages} element={<div>languages</div>} />
        </Route>
        <Route path="*" element={<Navigate to={AppRoutes.employees} replace />} />
      </Routes>
    </>
  )
}
