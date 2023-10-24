import { AppRoutes } from '../../path'

export const getCrumbsByUrl = (dirs: string[]) => {
  const crumbs: { title: string; path: string }[] = []

  dirs.forEach(dir => {
    crumbs.push({
      title: dir,
      path: AppRoutes[dir]
    })
  })

  return crumbs
}
