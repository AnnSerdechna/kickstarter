import {FC, PropsWithChildren} from 'react'

const Section: FC<PropsWithChildren & {id?: string, marginBottom?: 200 | 62 | 90}> = ({ children, id, marginBottom = 200}) => (
  <section id={id} className={'w-full'} style={{marginBottom: marginBottom}}>
    {children}
  </section>
)

export { Section }
