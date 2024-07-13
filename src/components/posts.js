import { generatePosts } from '../utils/helpers'
import { POST_1, POST_2, POST_3, POST_4 } from '../utils/icons'

const posts = [
  {
    link: '/',
    icon: POST_1,
    title: 'Embracing Nostalgia: The Influence of Retrowave in Modern Gaming',
    data: 'July 12, 2024',
  },
  {
    link: '/',
    icon: POST_2,
    title:
      'Seeing the World Through a Prism: The Use of Prism Effects in Video Games',
    data: 'July 10, 2024',
  },
  {
    link: '/',
    icon: POST_3,
    title: 'Exploring the Final Frontier: Space in Video Games',
    data: 'July 1, 2024',
  },
  {
    link: '/',
    icon: POST_4,
    title: 'The Force Unleashed: A Journey through Star Wars Games',
    data: 'June 20, 2024',
  },
]

generatePosts('.posts', posts)
