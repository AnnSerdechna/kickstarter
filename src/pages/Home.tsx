import { FC } from 'react'

import {
    Advantages,
    Designed,
    Features,
    Hero,
    LunaEye,
    MeetLuna,
    Menu,
    Questions,
    Testimonials
} from '../components'

const Home: FC = () => (
  <>
    <Hero />
    <Menu />
    <Advantages />
    <MeetLuna />
    <Designed />
    <LunaEye />
    <Testimonials />
    <Features />
    <Questions />
  </>
)

export { Home as default }
