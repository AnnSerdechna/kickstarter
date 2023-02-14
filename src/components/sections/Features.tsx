import {FC} from 'react'

import {Section} from '../layout/Section'
import {Title} from '../Title'
import FeaturesBg from '../../assets/images/features-bg.png'
import {featuresData} from '../../data/data'

const Features: FC = () => (
  <Section id={'features'}>
    <Title title={'Features'} />

    <div
      data-aos={'fade-up'}
      data-aos-delay={'400'}
      className={'pt-20 pb-10 px-28'}
      style={{height: '100%', minHeight: 642, backgroundImage: `url(${FeaturesBg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover'}}
    >
      <ul className={'grid grid-cols-2 gap-y-14 font-primary'}>
        {featuresData.map(it => (
          <li key={it.id}>
            <h4 className={'mb-6 text-4xl text-teal font-bold uppercase'}>
              {it.category}
            </h4>
            <ul className={'list-disc ml-5'}>
              {it.items.map((item, index) => (
                <li
                  key={index}
                  className={'pb-1'}
                >
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  </Section>
)

export { Features }
