import '../style.scss'
import './components/socials'
import './components/stores'
import './components/packs'
import './components/games'
import './components/posts'
import './components/modals'

window.addEventListener('scroll', () => {
  const header = document.querySelector('header')
  window.scrollY > 10
    ? (header.style.background = 'black')
    : (header.style.background = 'rgba(0, 0, 0, 0.3)')
})
