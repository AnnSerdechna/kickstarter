import { FC, Suspense } from 'react'
import {Outlet} from 'react-router'

import {Header} from './Header'
import {Footer} from './Footer'

const DefaultLayout: FC = () => (
  <div className={'min-h-screen bg-background'}>
    <div className={'container mx-auto'}>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  </div>
)

export { DefaultLayout }
