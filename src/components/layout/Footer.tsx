import {FC} from 'react'
import {Logo} from '../Logo'
import {SvgIcon} from '../icon'
import {Button} from '../Button'

const Footer: FC = () => {

  return (
    <footer
      data-aos={'fade-up'}
      data-aos-delay={'400'}
      className={'relative flex flex-col gap-20 items-center justify-center p-10'}
    >
      <div className={'absolute right-0 top-0 cursor-pointer'}>
        <Button icon={<SvgIcon type={'arrowUp'} />} />
      </div>

      <div>
        <Logo />
      </div>

      <div className={'flex items-center gap-12'}>
        <a href={'#'}>
          <SvgIcon type={'facebook'} />
        </a>
        <a href={'#'}>
          <SvgIcon type={'twitter'} />
        </a>
        <a href={'#'}>
          <SvgIcon type={'instagram'} />
        </a>
      </div>

      <div>
        <p className={'text-sm text-grey font-primary'}>
          © 2019 All rights reserved. Terms of Use & Privacy Policy
        </p>
      </div>
    </footer>
  )
}

export { Footer }
