import {FC} from 'react'

import { heroData} from '../../data/data'
import {Title} from '../Title'
import {Section} from '../layout/Section'
import {Paragraph} from '../Paragraph'

const Hero: FC = () => {
  const { title, text, image} = heroData

  return (
    <Section>
      <div className={'w-full flex items-center gap-4'}>
        <div className={'w-1/3'}>
          <Title title={title} />
          <div className={'w-2/3'}>
            <Paragraph content={text} />
          </div>
        </div>
        <div>
          <img src={image} alt={'Hero image'} />
        </div>
      </div>
    </Section>
  )
}

export { Hero }
