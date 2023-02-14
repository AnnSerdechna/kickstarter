import {FC} from 'react'

import {Logo} from '../Logo'
import {Button} from '../Button'
import {SvgIcon} from '../icon'
import {Drawer} from '../drawer/Drawer'
import {useToggle} from 'react-use'

const Header: FC = () => {
  const [open, toggle] = useToggle(false);

  return (
    <div
      data-aos={'fade-down'}
      data-aos-delay={'400'}
      className={'flex items-center justify-between pt-10 pb-4'}
    >
      <Logo />

      <div className={'flex gap-5'}>
        <Button text={'Buy'} onClick={() => console.log('click')} />
        <Button
          className={'visible lg:hidden'}
          icon={<SvgIcon type={'hamburger'} />}
          onClick={() => toggle(true)}
        />
      </div>

      <Drawer open={open} onCloseDrawer={() => toggle(false)} />
    </div>
  )
}

export { Header }
