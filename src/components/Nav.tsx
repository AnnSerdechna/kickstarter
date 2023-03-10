import {FC} from 'react'
import classNames from 'classnames'

import {menuData} from '../data/data'

export const formatAnchorLink = (link: string) => {
  return link.split(' ').join('-').toLowerCase()
}

const Nav: FC<{ direction?: 'vertical' | 'horizontal', onClickItem?: () => void}> = ({ direction = 'horizontal', onClickItem}) => (
  <ul
    data-aos={'fade-down'}
    data-aos-delay={'400'}
    className={classNames(
      'flex justify-center items-center gap-3 font-primary',
      {'flex-col': direction === 'vertical'}
    )}
  >
    {menuData.map((it, index) => (
      <a
        href={`#${formatAnchorLink(it)}`}
        key={index}
        className={'hover:bg-black/5'}
      >
        <li
          className={'px-8 py-2 text-black uppercase rounded'}
          onClick={onClickItem}
        >
          {it}
        </li>
      </a>
    ))}
  </ul>
)

export { Nav }
