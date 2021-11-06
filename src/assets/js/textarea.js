const textArea = document.querySelectorAll('[data-autoresize]')

textArea.forEach(text => {
  let textAreaH = text.offsetHeight
  text.addEventListener('input', (event) => {
    let $this = event.target

    $this.style.height = `${textAreaH}px`
    $this.style.height = $this.scrollHeight + 'px'
  })
})