import {FC} from 'react'

const Paragraph: FC<{ content: string, color?: 'black' | 'grey', fontSize?: 'base' | 'sm' }> = ({ content, color = 'grey', fontSize = 'base' }) => (
  <p className={`text-${fontSize} text-${color} font-primary`}>
    {content}
  </p>
)

export { Paragraph }
