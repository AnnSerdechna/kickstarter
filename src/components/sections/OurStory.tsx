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
        <div
          data-aos={'fade-right'}
          data-aos-delay={'400'}
          className={'flex-1'}
        >
          <img src={image} alt={'Our story'} />
        </div>
        <div className={'flex-1'}>
          <div>
            <Title title={title} />
            <div
              className={'mb-14'}
            >
              <Paragraph content={text} color={'grey'} />
            </div>
          </div>
          <div>
            <Link href={link} text={linkText} />
          </div>
        </div>
      </div>
    </Section>
  )
}

export { OurStory }
