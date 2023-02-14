import {FC} from 'react'

import {Section} from '../layout/Section'
import LunaImage from '../../assets/images/luna.png'

const MeetLuna: FC = () => (
  <Section>
    <div
      data-aos={'fade-up'}
      data-aos-delay={'400'}
      className={'flex justify-center items-center'}
    >
      <img src={LunaImage} alt={'Meet Luna'} />
    </div>
  </Section>
)

export { MeetLuna }
