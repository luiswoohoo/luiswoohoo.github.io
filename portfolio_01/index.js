const mediaQuery = '(min-width: 900px)'
const mediaQueryList = window.matchMedia(mediaQuery)
const initialWindowSize = window.innerWidth

if (initialWindowSize >= 900) {
  showImage()
}

mediaQueryList.addEventListener('change', (event) => {
  if (event.matches) {
    showImage()
  }
})



function showImage() {

  const hoverSpaces = document.getElementsByClassName('hover-space')

  for (let space of hoverSpaces) {
    let image = new Image()
    image.src = space.dataset.src
    image.style.width = '400px'
    image.style.height = '400px'
    image.style.borderRadius = '1000px'
    image.style.border = '8px solid #fff'
    image.style.transition = 'scale 1s ease'
    image.className = 'followMouse'

    space.addEventListener('mouseover', (event) => {
      document.getElementById('hover-area').append(image)
      image.style.transform = `rotate(${event.y / 30}deg)`
      image.style.left = `${event.x + 20}px`
      image.style.top = `${event.y - 300}px`
    })

    space.addEventListener('mouseout', () => {
      console.log('mouse out')
      image.remove()
    })

    space.addEventListener('mousemove', (event) => {
      // image.style.transform = 'rotate(20deg)'
      image.style.transform = `rotate(${event.y / 30}deg)`
      image.style.left = `${event.x + 20}px`
      image.style.top = `${event.y - 300}px`
    })
  }

}
