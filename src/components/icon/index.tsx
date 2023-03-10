import { FC, SVGProps } from 'react'
import classNames from 'classnames'

import { ReactComponent as Logo } from './icons/logo.svg'
import { ReactComponent as Futuristic } from './icons/futuristic-design.svg'
import { ReactComponent as Speaker } from './icons/speaker.svg'
import { ReactComponent as Wifi } from './icons/wifi.svg'
import { ReactComponent as Light } from './icons/light.svg'
import { ReactComponent as Quotes } from './icons/quote.svg'
import { ReactComponent as Facebook } from './icons/facebook.svg'
import { ReactComponent as Twitter } from './icons/twitter.svg'
import { ReactComponent as Instagram } from './icons/instagram.svg'
import { ReactComponent as ArrowUp } from './icons/arrow-up.svg'
import { ReactComponent as Hamburger } from './icons/hamburger.svg'
import { ReactComponent as Close } from './icons/close.svg'

type Icons = { [key: string]: FC<SVGProps<SVGSVGElement>> }

const icons: Icons = Object.freeze({
  logo: Logo,
  futuristic: Futuristic,
  speaker: Speaker,
  wifi: Wifi,
  light: Light,
  quote: Quotes,
  instagram: Instagram,
  facebook: Facebook,
  twitter: Twitter,
  arrowUp: ArrowUp,
  hamburger: Hamburger,
  close: Close,
})

interface SvgIconProps extends SVGProps<SVGSVGElement> {
  type:
  'logo' |
  'quote' |
  'futuristic' |
  'speaker' |
  'wifi' |
  'light' |
  'arrowUp' |
  'facebook' |
  'twitter' |
  'instagram' |
  'close' |
  'hamburger' |
   string
}

export const SvgIcon: FC<SvgIconProps> = ({ type, className, ...svgProps }) => {
  const Icon = icons[type] ?? null
  return Icon && <Icon style={{ display: 'flex' }} {...svgProps} className={classNames('icon', className)} />
}
