import { FC } from 'react'

import {
    Advantages,
    OurStory,
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
    <OurStory />
    <LunaEye />
    <Testimonials />
    <Features />
    <Questions />
  </>
)

export { Home as default }
