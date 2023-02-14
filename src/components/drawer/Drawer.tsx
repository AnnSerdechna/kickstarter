import {FC} from 'react'
import classNames from 'classnames'
import {Logo} from '../Logo'
import {Button} from '../Button'
import {SvgIcon} from '../icon'
import {Nav} from '../Nav'

import './Drawer.css'

const Drawer:FC<{ open: boolean, onCloseDrawer: () => void }> = ({ onCloseDrawer, open }) => (
  <div className={classNames('dropdown', 'h-screen bg-white fixed top-0 left-0 right-0 z-20 flex flex-col', {'open': open}, {'close': !open})}>
    <div className={'flex justify-between items-center mt-4 mb-20 px-10 md:px-20'}>
      <Logo />
      <Button onClick={onCloseDrawer} icon={<SvgIcon type={'close'} />} />
    </div>

    <Nav direction={'vertical'} onClickItem={onCloseDrawer} />
  </div>
)

export { Drawer }
