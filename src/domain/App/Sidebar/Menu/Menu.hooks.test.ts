import { describe, expect, it } from 'vitest'

import routes from 'constants/routes/root'
import {
  fillPathsForBranch,
  FillPathsForBranchResult,
  GetMenuItemProps,
  getMenuItemProps,
} from './Menu.hooks'
import { MenuItemProps } from './Menu.types'

describe('Menu.features.fillPathsForBranch', () => {
  type Case = {
    expected: FillPathsForBranchResult
    id: string
    props: MenuItemProps[]
  }

  const cases: Case[] = [
    {
      expected: {
        children: [],
        paths: [],
      },
      id: '#0',
      props: [],
    },
    {
      expected: {
        children: [
          { id: 'home', label: 'Home', path: '/' } as MenuItemProps,
          { id: 'issues', label: 'Issues', path: '/issues' } as MenuItemProps,
        ],
        paths: ['/', '/issues'],
      },
      id: '#1',
      props: [
        { id: 'home', label: 'Home', path: '/' } as MenuItemProps,
        { id: 'issues', label: 'Issues', path: '/issues' } as MenuItemProps,
      ],
    },
    {
      expected: {
        children: [
          { id: 'home', label: 'Home', path: '/' } as MenuItemProps,
          { id: 'issues', label: 'Issues', path: '/issues' } as MenuItemProps,
          {
            id: 'submenuAdmin',
            label: 'Admin',
            paths: ['/admin'],
            submenu: [
              { id: 'admin', label: 'Admin', path: '/admin' } as MenuItemProps,
            ],
          } as MenuItemProps,
        ],
        paths: ['/', '/issues', '/admin'],
      },
      id: '#2',
      props: [
        { id: 'home', label: 'Home', path: '/' } as MenuItemProps,
        { id: 'issues', label: 'Issues', path: '/issues' } as MenuItemProps,
        {
          id: 'submenuAdmin',
          label: 'Admin',
          submenu: [
            { id: 'admin', label: 'Admin', path: '/admin' } as MenuItemProps,
          ],
        } as MenuItemProps,
      ],
    },
  ]

  cases.forEach(({ expected, id, props }: Case) => {
    it(`Case ${id}: should return expected value`, () => {
      expect(fillPathsForBranch(props)).toEqual(expected)
    })
  })
})

describe('Tree.features.getMenuItemProps', () => {
  type Case = {
    expected: ReturnType<typeof getMenuItemProps>
    id: string
    props: GetMenuItemProps
  }

  const cases: Case[] = [
    {
      expected: [],
      id: '#0',
      props: {
        availableRoles: [],
        currentRoles: [],
        menuPoints: [],
      },
    },
    {
      expected: [],
      id: '#1',
      props: {
        availableRoles: ['guest', 'user', 'admin'],
        currentRoles: ['guest'],
        menuPoints: [
          { id: 'admin', label: 'Admin', routeConfig: routes.admin },
        ],
      },
    },
    {
      expected: [
        { id: 'home', label: 'Home', path: '/' } as MenuItemProps,
        { id: 'admin', label: 'Admin', path: '/admin' } as MenuItemProps,
      ],
      id: '#2',
      props: {
        availableRoles: ['guest', 'user', 'admin'],
        currentRoles: ['admin'],
        menuPoints: [
          { id: 'home', label: 'Home', routeConfig: routes.home },
          { id: 'admin', label: 'Admin', routeConfig: routes.admin },
        ],
      },
    },
    {
      expected: [{ id: 'home', label: 'Home', path: '/' } as MenuItemProps],
      id: '#3',
      props: {
        availableRoles: ['guest', 'user', 'admin'],
        currentRoles: ['guest'],
        menuPoints: [
          { id: 'home', label: 'Home', routeConfig: routes.home },
          {
            id: 'submenuAdmin',
            label: 'Admin',
            submenuPoints: [
              { id: 'admin', label: 'Admin', routeConfig: routes.admin },
            ],
          },
        ],
      },
    },
    {
      expected: [
        { id: 'home', label: 'Home', path: '/' } as MenuItemProps,
        {
          id: 'submenuAdmin',
          label: 'Admin',
          paths: ['/admin'],
          submenu: [
            { id: 'admin', label: 'Admin', path: '/admin' } as MenuItemProps,
          ],
        } as MenuItemProps,
      ],
      id: '#4',
      props: {
        availableRoles: ['guest', 'user', 'admin'],
        currentRoles: ['admin'],
        menuPoints: [
          { id: 'home', label: 'Home', routeConfig: routes.home },
          {
            id: 'submenuAdmin',
            label: 'Admin',
            submenuPoints: [
              { id: 'admin', label: 'Admin', routeConfig: routes.admin },
            ],
          },
        ],
      },
    },
    {
      expected: [
        { id: 'home', label: 'Home', path: '/' } as MenuItemProps,
        {
          id: 'submenuProjects',
          label: 'Projects',
          paths: ['/projects', '/agile'],
          submenu: [
            {
              id: 'projects',
              label: 'Projects',
              path: '/projects',
            } as MenuItemProps,
            {
              id: 'submenuAdditionalViews',
              label: 'Additional Views',
              paths: ['/agile'],
              submenu: [
                {
                  id: 'agile',
                  label: 'Agile',
                  path: '/agile',
                },
              ],
            },
          ],
        } as MenuItemProps,
      ],
      id: '#5',
      props: {
        availableRoles: ['guest', 'user', 'admin'],
        currentRoles: ['user'],
        menuPoints: [
          { id: 'home', label: 'Home', routeConfig: routes.home },
          {
            id: 'submenuProjects',
            label: 'Projects',
            submenuPoints: [
              {
                id: 'projects',
                label: 'Projects',
                routeConfig: routes.projects,
              },
              {
                id: 'submenuAdditionalViews',
                label: 'Additional Views',
                submenuPoints: [
                  {
                    id: 'agile',
                    label: 'Agile',
                    routeConfig: routes.agile,
                  },
                  {
                    id: 'wbs',
                    label: 'WBS (for admin only)',
                    routeConfig: routes.wbs,
                  },
                ],
              },
            ],
          },
        ],
      },
    },
  ]

  cases.forEach(({ expected, id, props }: Case) => {
    it(`Case ${id}: should return expected value`, () => {
      expect(getMenuItemProps(props)).toEqual(expected)
    })
  })
})
