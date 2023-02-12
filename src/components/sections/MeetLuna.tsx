import {FC} from 'react'

import {Section} from '../layout/Section'
import LunaImage from '../../assets/images/luna.png'

const MeetLuna: FC = () => (
  <Section>
    <div className={'flex justify-center items-center'}>
      <img src={LunaImage} alt={'Meet Luna'} />
    </div>
  </Section>
)

export { MeetLuna }
