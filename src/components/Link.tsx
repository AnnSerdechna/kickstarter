import {FC} from 'react'

const Link: FC<{ href: string, text: string }> = ({ href, text }) => (
  <a
    href={href}
    className={`
              inline-block 
              py-1
              text-accent 
              text-xs 
              font-primary 
              font-bold 
              uppercase 
              relative
              after:content-['']
              after:absolute
              after:w-1/2 
              after:h-[2px]
              after:left-0
              after:bottom-0
              after:bg-accent
            `}
  >
    {text}
  </a>
)

export { Link }
