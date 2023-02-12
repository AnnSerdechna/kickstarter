import { FC, Suspense } from 'react'
import {Outlet} from 'react-router'

import {Header} from './Header'
import {Footer} from './Footer'

const DefaultLayout: FC = () => (
  <>
    <Header />
    <Suspense fallback={null}>
      <Outlet />
    </Suspense>
    <Footer />
  </>
)

export { DefaultLayout }
