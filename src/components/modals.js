// FAQ
const answers = document.querySelectorAll('.answer')
const questions = document
  .querySelectorAll('.question')
  .forEach((question, index) => {
    question.addEventListener('click', () => {
      if (question.classList.contains('active')) {
        question.classList.remove('active')
        question.children[1].textContent = '+'
        answers[index].classList.add('invisible')
      } else {
        answers[index].classList.remove('invisible')
        question.classList.add('active')
        question.children[1].textContent = '-'
      }
    })
  })

// Sign Up
const signupModal = document.querySelector('.signup-modal')
const signupBtn = document.querySelectorAll('.sign-up').forEach((el) => {
  el.addEventListener('click', () => {
    signupModal.classList.remove('invisible')
  })
})

const closeSignUp = document
  .querySelector('.close-signup')
  .addEventListener('click', () => {
    signupModal.classList.add('invisible')
  })

// Messanger
const msgModal = document.querySelector('.messanger-modal')
const msgActivate = document.querySelector('.messanger-activate')

msgActivate.addEventListener('click', () => {
  if (msgActivate.classList.contains('active')) {
    msgModal.classList.add('invisible')
    msgActivate.classList.remove('active')
  } else {
    msgModal.classList.remove('invisible')
    msgActivate.classList.add('active')
  }
})
