import { generateElementGroup } from '../utils/helpers'
import {
  PACK_1,
  PACK_10,
  PACK_11,
  PACK_2,
  PACK_3,
  PACK_4,
  PACK_5,
  PACK_6,
  PACK_7,
  PACK_8,
  PACK_9,
} from '../utils/icons'

const packItems = [
  {
    link: '/',
    icon: PACK_1,
  },
  {
    link: '/',
    icon: PACK_2,
  },
  {
    link: '/',
    icon: PACK_3,
  },
  {
    link: '/',
    icon: PACK_4,
  },
  {
    link: '/',
    icon: PACK_5,
  },
  {
    link: '/',
    icon: PACK_6,
  },
  {
    link: '/',
    icon: PACK_7,
  },
  {
    link: '/',
    icon: PACK_8,
  },
  {
    link: '/',
    icon: PACK_9,
  },
  {
    link: '/',
    icon: PACK_10,
  },
  {
    link: '/',
    icon: PACK_11,
  },
]

generateElementGroup('.game-packs', packItems, 5)
