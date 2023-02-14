import {FC} from 'react'

import {Section} from '../layout/Section'
import {Title} from '../Title'
import {Paragraph} from '../Paragraph'
import {Link} from '../Link'
import {lunaEyeData} from '../../data/data'

const LunaEye: FC = () => {
  const {title, text, link, linkText, image} = lunaEyeData

  return (
  <Section id={'technology'}>
    <div className={'flex gap-14'}>
      <div className={'flex-1'}>
        <div>
          <Title title={title} />
          <div className={'mb-14'}>
            <Paragraph content={text} color={'grey'} />
          </div>
        </div>
        <div>
            <Link href={link} text={linkText} />
          </div>
      </div>
      <div
        data-aos={'fade-left'}
        data-aos-delay={'400'}
        className={'flex-1'}
      >
        <img src={image} alt={'Our story'} />
      </div>
    </div>
  </Section>
  )
}

export { LunaEye }
