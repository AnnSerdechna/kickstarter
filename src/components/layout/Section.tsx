import {FC, PropsWithChildren} from 'react'

const Section: FC<PropsWithChildren & {id?: string}> = ({ children, id}) => (
  <section id={id} className={'py-20 w-full'}>
    {children}
  </section>
)

export { Section }
