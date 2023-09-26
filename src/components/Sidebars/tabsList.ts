import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import TranslateIcon from '@mui/icons-material/Translate'

import { AppRoutes } from '../../path'

export const tabsList = [
  {
    text: 'Employees',
    route: AppRoutes.employees,
    icon: PeopleAltIcon
  },
  {
    text: 'Projects',
    route: AppRoutes.projects,
    icon: null
  },
  {
    text: 'CVs',
    route: AppRoutes.cvs,
    icon: null
  },
  {
    text: 'Departments',
    route: AppRoutes.departments,
    icon: null
  },
  {
    text: 'Positions',
    route: AppRoutes.positions,
    icon: null
  },
  {
    text: 'Skills',
    route: AppRoutes.skills,
    icon: null
  },
  {
    text: 'Languages',
    route: AppRoutes.languages,
    icon: TranslateIcon
  }
]
