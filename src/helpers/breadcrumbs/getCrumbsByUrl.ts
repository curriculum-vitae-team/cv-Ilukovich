import { AppRoutes } from '../../path'

export const getCrumbsByUrl = (dirs: string[]) => {
  const crumbs = [
    {
      title: 'Home',
      path: '/'
    }
  ]

  dirs.forEach(dir => {
    crumbs.push({
      title: dir,
      path: AppRoutes[dir]
    })
  })

  return crumbs
}
