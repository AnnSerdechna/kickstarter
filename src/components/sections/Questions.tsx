import {FC} from 'react'

import {Section} from '../layout/Section'
import {Title} from '../Title'
import {Button} from '../Button'

const inputStyles = 'w-full py-3 px-8 bg-transparent outline-none border border-grey rounded font-primary text-black text-base'

const Questions: FC = () => {
  return (
    <Section id={'get-in-touch'}>
      <div className={'flex gap-5'}>
        <div className={'flex-1'}>
          <Title title={'DO YOU HAVE ANY QUESTIONS?'} />
        </div>
        <div
          data-aos={'fade-up'}
          data-aos-delay={'400'}
          className={'flex-1'}
        >
          <form className={''}>
            <div className={'mb-5'}>
              <input
                placeholder={'Your email'}
                className={inputStyles}
              />
            </div>
            <div className={'mb-7'}>
              <textarea
                placeholder={'Your message'}
                className={inputStyles}
                rows={6}
              />
            </div>
            <Button text={'Send'} styleType={'accent'} />
          </form>
        </div>
      </div>
    </Section>
  )
}

export { Questions }
