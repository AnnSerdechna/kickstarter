import {FC} from 'react'

import {Logo} from '../Logo'
import {Button} from '../Button'

const Header: FC = () => {

  return (
    <div className={'flex items-center justify-between pt-10 pb-4'}>
      <Logo />
      <Button text={'Add'} onClick={() => console.log('click')} />
    </div>
  )
}

export { Header }
