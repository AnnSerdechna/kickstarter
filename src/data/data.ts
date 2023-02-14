import HeroImage from  '../assets/images/hero-section.png'
import OurStoryImage from  '../assets/images/designed.jpg'
import LunaEyeImage from  '../assets/images/luna-eye.jpg'
import Avatar from  '../assets/images/ava.png'

interface SectionDataProps {
  id?: number
  title: string
  text: string
  image?: string
  iconType?: string
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

export const advantagesData: Array<SectionDataProps> = [
  {
    id: 1,
    title: 'Futuristic Design',
    text: 'To give Luna a truly flawless look, we specifically picked aircraft grade aluminum as its material and adopted both three-dimensional stretch-bending technology and a high precision cold forging technique.',
    iconType: '',
  },
  {
    id: 2,
    title: 'Tweeter Speaker System',
    text: 'To deliver a more layered sound performance better than a sole full-range speaker, our team equipped Luna with one more tweeter speaker responsible for high-frequency sound independently.',
    iconType: 'speaker',
  },
  {
    id: 3,
    title: 'MultiRoom System',
    text: 'Luna is natively compatible with your home Wi-Fi. Set up multiple speakers in different rooms to expand your music experience into the entire house.',
    iconType: 'wifi',
  },
  {
    id: 4,
    title: '',
    text: '',
    iconType: '',
  },
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
