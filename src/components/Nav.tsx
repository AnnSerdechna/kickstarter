import {FC} from 'react'
import classNames from 'classnames'

import {menuData} from '../data/data'

export const formatAnchorLink = (link: string) => {
  return link.split(' ').join('-').toLowerCase()
}

const Nav: FC = () => (
  <ul className={classNames('flex flex-col gap-3 font-primary')}>
    {menuData.map((it, index) => (
      <a href={`#${formatAnchorLink(it)}`} key={index} className={'hover:bg-black/5'}>
        <li
          className={'px-8 py-2 text-black uppercase rounded'}
        >
          {it}
        </li>
      </a>
    ))}
  </ul>
)

export { Nav }
