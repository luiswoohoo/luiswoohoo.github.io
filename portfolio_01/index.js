// Run showImage function if initial window size is certain size
// or if media query is triggered
const mediaQuery = '(min-width: 900px)'
const mediaQueryList = window.matchMedia(mediaQuery)
const windowSize = window.innerWidth

if (windowSize >= 900) {
  showImage()
}

mediaQueryList.addEventListener('change', showImage)

// This function shows image that follows mouse movement
// and changes background color
function showImage() {
  const hoverSpaces = document.getElementsByClassName('hover-space')
  const siteBG = document.getElementById('site-container')

  for (let space of hoverSpaces) {
    let image = new Image()
    image.src = space.dataset.src
    image.style.width = '500px'
    image.style.height = '500px'
    image.style.objectFit = 'cover'
    image.style.borderRadius = '1000px'
    image.style.border = '1px solid #f5f5f5'
    image.style.transition = 'scale 1s ease'
    image.className = 'followMouse'

    space.addEventListener('mouseover', (event) => {
      document.getElementById('hover-area').append(image)
      image.style.transform = `rotate(${event.y / 30}deg)`
      image.style.left = `${event.x + 20}px`
      image.style.top = `${event.y - 450}px`

      siteBG.style.backgroundColor = `${space.dataset.color}`
    })

    space.addEventListener('mouseout', () => {
      image.remove()
      siteBG.style.backgroundColor = ""
    })

    space.addEventListener('mousemove', (event) => {
      image.style.transform = `rotate(${event.y / 30}deg)`
      image.style.left = `${event.x + 20}px`
      image.style.top = `${event.y - 450}px`
    })
  }
}