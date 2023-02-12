import {FC} from 'react'
import {Section} from '../layout/Section'
import {Testimonial} from '../Testimonial'
import {testimonialsData} from '../../data/data'

const Testimonials: FC = () => {

  return (
    <Section>
      {testimonialsData.map(props => (
        <Testimonial key={props.id} {...props} />
      ))}
    </Section>
  )
}

export { Testimonials }
