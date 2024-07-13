import { generateElementGroup } from '../utils/helpers'
import {
  AMAZON_ICON,
  APPLE_ICON,
  EPICGAMES_ICON,
  GOOGLEPLAY_ICON,
  HUMBLEBUNDLE_ICON,
  NINTENDO_ICON,
  PLAYSTATION_ICON,
  STEAM_ICON,
  XBOX_ICON,
} from '../utils/icons'

const storesItems = [
  {
    link: 'https://www.amazon.com/',
    icon: AMAZON_ICON,
  },
  {
    link: 'https://www.apple.com/',
    icon: APPLE_ICON,
  },
  {
    link: 'https://www.epicgames.com/',
    icon: EPICGAMES_ICON,
  },
  {
    link: 'https://www.play.google.com/',
    icon: GOOGLEPLAY_ICON,
  },
  {
    link: 'https://www.humblebundle.com/',
    icon: HUMBLEBUNDLE_ICON,
  },
  {
    link: 'https://www.xbox.com/',
    icon: XBOX_ICON,
  },
  {
    link: 'https://www.nintendo.com/',
    icon: NINTENDO_ICON,
  },
  {
    link: 'https://www.store.playstation.com/',
    icon: PLAYSTATION_ICON,
  },
  {
    link: 'https://www.store.steampowered.com/',
    icon: STEAM_ICON,
  },
]

generateElementGroup('.stores', storesItems)
