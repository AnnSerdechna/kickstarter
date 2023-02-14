import {FC} from 'react'

import {Section} from '../layout/Section'
import { advantagesData } from '../../data/data'
import {SvgIcon} from '../icon'

const Advantages: FC = () => {

  return (
    <Section id={'about-us'}>
      <div
        data-aos={'fade-up'}
        data-aos-delay={'400'}
        className={'grid gap-10 justify-between grid-cols-1 md:grid-cols-2 lg:grid-cols-4'}
      >
        {advantagesData.map(it => (
          <div
            key={it.id}
            className={'flex flex-col items-center'}
          >
            <div className={'mb-4'} style={{minHeight: 50}}>
              <SvgIcon type={it.iconType || ''} />
            </div>
            <h1
              className={'my-5 text-black font-primary font-bold text-center uppercase'}
              style={{fontSize: 22, minHeight: 70}}
            >
              {it.title}
            </h1>
            <p className={'text-sm text-grey text-center font-primary'}>{it.text}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

export { Advantages }
