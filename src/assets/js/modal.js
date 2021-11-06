const modalBtn = document.querySelectorAll('[data-modal]'),
  modalClose = document.querySelectorAll('.modal__close'),
  modal = document.querySelectorAll('.modal'),
  body = document.body

modalBtn.forEach(item => {
  item.addEventListener('click', event => {
    let $this = event.currentTarget
    let modalId = $this.getAttribute('data-modal')
    let modal = document.getElementById(modalId)
    let modalContent = modal.querySelector('.modal__content')

    modalContent.addEventListener('click', e => {
      e.stopPropagation()
    })

    modal.classList.add('show')
    body.classList.add('no-scroll')

    setTimeout(() => {
      modalContent.style.transform = 'none'
      modalContent.style.opacity = '1'
    }, 1)

  })
})

modalClose.forEach(item => {
  item.addEventListener('click', event => {
    let currentModal = event.target.closest('.modal')

    closeModal(currentModal)
  })
})

modal.forEach(item => {
  item.addEventListener('click', event => {
    let currentModal = event.target

    closeModal(currentModal)

  })
})


function closeModal(currentModal) {
  let modalContent = currentModal.querySelector('.modal__content')
  modalContent.removeAttribute('style')

  setTimeout(() => {
    currentModal.classList.remove('show')
    body.classList.remove('no-scroll')
  }, 200)
}