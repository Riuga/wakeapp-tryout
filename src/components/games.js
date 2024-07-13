import { generateElementGroup } from "../utils/helpers"
import { GAME_1, GAME_2, GAME_3, GAME_4 } from "../utils/icons"

const packItems = [
  {
    link: '/',
    icon: GAME_1,
  },
  {
    link: '/',
    icon: GAME_2,
  },
  {
    link: '/',
    icon: GAME_3,
  },
  {
    link: '/',
    icon: GAME_4,
  },

]

generateElementGroup('.games', packItems)