import { FC, Suspense } from 'react'
import {Outlet} from 'react-router'

import {Header} from './Header'
import {Footer} from './Footer'
import {Section} from './Section'

const DefaultLayout: FC = () => (
  <div className={'min-h-screen bg-background'}>
    <div className={'container mx-auto'}>
      <Section marginBottom={90}>
        <Header />
      </Section>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  </div>
)

export { DefaultLayout }
