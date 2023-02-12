import {FC} from 'react'

import {Section} from '../layout/Section'
import {Title} from '../Title'
import {ourStoryData} from '../../data/data'
import {Paragraph} from '../Paragraph'
import {Link} from '../Link'

const OurStory: FC = () => {
  const { title, text, link, linkText, image } = ourStoryData

  return (
    <Section id={'our-story'}>
      <div className={'flex gap-14'}>
        <div className={'flex-1'}>
          <img src={image} alt={'Our story'} />
        </div>
        <div className={'flex-1'}>
          <div>
            <Title title={title} />
            <div className={'mb-14'}>
              <Paragraph content={text} color={'grey'} />
            </div>
          </div>
          <span>
            <Link href={link} text={linkText} />
          </span>
        </div>
      </div>
    </Section>
  )
}

export { OurStory }
