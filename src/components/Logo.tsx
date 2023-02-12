import {FC} from 'react'
import {Link} from 'react-router-dom'

import {SvgIcon} from './icon'

const Logo: FC = () => (
  <Link to={'/'}>
    <SvgIcon type={'logo'} />
  </Link>
)

export { Logo }
