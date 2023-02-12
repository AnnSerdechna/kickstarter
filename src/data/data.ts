import HeroImage from  '../assets/images/hero-section.png'
import OurStoryImage from  '../assets/images/designed.jpg'
import LunaEyeImage from  '../assets/images/luna-eye.jpg'
import Avatar from  '../assets/images/ava.png'

interface SectionDataProps {
  title: string
  text: string
  image: string
}

type LinkProps = {
  link: string
  linkText: string
}

export interface TestimonialProps {
  id: number
  review: string
  customerName: string
  customerPosition: string
  customerAvatar: string
}

export interface FeaturesDataProps {
  id: number
  category: string
  items: string[]
}

export const heroData: SectionDataProps = {
  title: 'Futuristic Wireless Speaker',
  text: 'Luna’s performance is balanced and smooth in all frequency ranges which makes the music both naturally pleasant and distinctly more layered.',
  image: HeroImage,
}

export const menuData: Array<string> = [
  'our story', 'about us', 'technology', 'features', 'get in touch'
]

export const ourStoryData: SectionDataProps & LinkProps = {
  title: 'DESIGNED FOR THE FUTURE',
  text: 'In 2014, a group of geeky industrial designers, engineering veterans and acoustic experts formed crazybaby. This is a bunch of passionate people who are crazy enough to think they can challenge the industry with disruptive audio products.',
  link: '',
  linkText: 'See more about us',
  image: OurStoryImage,
}

export const lunaEyeData: SectionDataProps & LinkProps = {
  title: 'Luna Eye',
  text: 'Luna Eye is to the essence of this innovative light and audio system. It comprises an independent tweeter speaker, a light guiding component, a dome and a ring ornament.',
  link: '',
  linkText: 'See more about us',
  image: LunaEyeImage,
}

export const testimonialsData: Array<TestimonialProps> = [
  {
    id: 1,
    review: 'It really took me by surprise honestly to have such full beautiful sound that coming out of this small compact device. And with the brush aluminum surface, it feels so familiar. Like my iPhone.',
    customerName: 'Garrett Martin',
    customerPosition: 'Creative Director',
    customerAvatar: Avatar,
  },
]

export const featuresData: Array<FeaturesDataProps> = [
  {
    id: 1,
    category: 'Connectivity',
    items: [
      'Hands Free Wireless Audio',
      'Bluetooth 4.0 LE',
      'Wi-Fi 2.4 GHz (802.11 b/g/n)',
      'Smart Multiroom System Set Up',
      'Party Mode with 6.0 Units and above',
      'MESHNET Multi Speaker Network',
    ]
  },
  {
    id: 2,
    category: 'App Features',
    items: [
      'Customize Music Schedule',
      'Wake Up with Favorite Songs',
      'Home Detection Auto Wake Up',
      'Color Wheel',
    ]
  },
  {
    id: 3,
    category: 'Sound & Music',
    items: [
      'Feel-in-chest Base Power',
      'Lossless Digital Audio Transmission',
      'Easy & Stable Stereo Pairing',
      'Crisp and Clear High Frequency Sound',
      'Streams from Cloud Music and Local Library',
      'Auto Music from Last Song Stopped',
    ]
  },
]
