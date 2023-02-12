import {FC, lazy, memo} from 'react'
import type {RouteObject} from 'react-router-dom'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import {DefaultLayout} from '../components/layout/DefaultLayout'
const Home = lazy<FC>(() => import('./Home'))
const NotFound = lazy<FC>(() => import('./NotFound'))

const routes: RouteObject[] = [
  {
    path: '',
    element: <DefaultLayout />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        element: <NotFound />,
        path: '*',
      },
    ],
  },
]

const Router = () => <RouterProvider router={createBrowserRouter(routes)} />

export default memo(Router)
