import {FC} from 'react'
import classNames from 'classnames'

const Paragraph: FC<{ content: string, color?: 'black' | 'grey', fontSize?: 'base' | 'sm' }> = ({ content, color , fontSize = 'base' }) => (
  <p className={classNames(`text-${fontSize} text-black font-primary`, {'text-grey': color === 'grey'})}>
    {content}
  </p>
)

export { Paragraph }
