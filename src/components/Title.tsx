import {FC} from 'react'

const Title: FC<{ title: string }> = ({ title }) => (
  <h1 className={'mb-8 text-6xl text-black font-bold font-primary leading-[78px] uppercase'}>
    {title}
  </h1>
)

export { Title }
