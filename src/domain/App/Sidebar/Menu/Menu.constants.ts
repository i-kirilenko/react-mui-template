import { RouteConfig } from 'components/RouterCreator'
import routes from 'constants/routes'

export type MenuPoint = {
  id: string
  label: string
  routeConfig?: RouteConfig
  submenuPoints?: MenuPoint[]
}

export const menuPoints: MenuPoint[] = [
  { id: 'home', label: 'Home', routeConfig: routes.home },
  {
    id: 'submenuProjects',
    label: 'Projects',
    submenuPoints: [
      { id: 'projects', label: 'Projects', routeConfig: routes.projects },
      { id: 'issues', label: 'Issues', routeConfig: routes.issues },
      {
        id: 'submenuPlanning',
        label: 'Planning',
        submenuPoints: [
          { id: 'calendar', label: 'Calendar', routeConfig: routes.calendar },
          { id: 'agile', label: 'Agile', routeConfig: routes.agile },
          { id: 'wbs', label: 'WBS', routeConfig: routes.wbs },
        ],
      },
    ],
  },
  {
    id: 'submenuProfile',
    label: 'Profile',
    submenuPoints: [
      { id: 'profile', label: 'Profile', routeConfig: routes.profile },
      { id: 'admin', label: 'Admin', routeConfig: routes.admin },
    ],
  },
]
