import {FC} from 'react'

import {TestimonialProps} from '../data/data'
import QuoteBg from './icon/icons/quote.svg'

const Testimonial: FC<TestimonialProps> = ({ review, customerName, customerPosition, customerAvatar }) => {

  return (
    <div className={'flex flex-col mx-auto w-2/3'}>
      <div
        className={'flex justify-center items-center'}
        style={{height: 233, backgroundImage: `url(${QuoteBg})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}
      >
        <p className={'text-black font-primary font-bold text-2xl text-center'}>{review}</p>
      </div>

      <div className={'flex flex-col items-center justify-center gap-5 -mt-10'}>
        <img
          className={'w-16 h-16 object-cover'}
          src={customerAvatar}
          alt={customerName}
        />
        <div className={'text-center'}>
          <h3 className={'text-black font-primary font-bold'}>
            {customerName}
          </h3>
          <p className={'text-grey text-sm font-primary'}>
            {customerPosition}
          </p>
        </div>
      </div>
    </div>
  )
}

export { Testimonial }
