import { generateElementGroup } from '../utils/helpers'
import {
  DISCORD_ICON,
  FACEBOOK_ICON,
  INSAGRAM_ICON,
  TIKTOK_ICON,
  TWITTER_ICON,
  YOUTUBE_ICON,
} from '../utils/icons'

const socialMediaItems = [
  {
    link: 'https://www.facebook.com/',
    icon: FACEBOOK_ICON,
  },
  {
    link: 'https://www.instagram.com/',
    icon: INSAGRAM_ICON,
  },
  {
    link: 'https://www.discord.com/',
    icon: DISCORD_ICON,
  },
  {
    link: 'https://www.tiktok.com/',
    icon: TIKTOK_ICON,
  },
  {
    link: 'https://www.twitter.com/',
    icon: TWITTER_ICON,
  },
  {
    link: 'https://www.youtube.com/',
    icon: YOUTUBE_ICON,
  },
]

generateElementGroup('.social-media', socialMediaItems)
