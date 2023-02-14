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
import {useMedia} from 'react-use'
import Aos from 'aos'
import 'aos/dist/aos.css';
import {Nav} from '../components/Nav'

const Home: FC = () => {
    const isLG = useMedia('(min-width: 1024px)')

    // animate on scroll initialization
    Aos.init({
      duration: 1800,
      offset: 0,
    })

    return (
      <div className={'overflow-hidden'}>
          <Hero />
          {isLG && <Nav />}
          <Advantages />
          <MeetLuna />
          <OurStory />
          <LunaEye />
          <Testimonials />
          <Features />
          <Questions />
      </div>
    )

}
export { Home as default }
