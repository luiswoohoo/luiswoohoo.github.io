const myObserver = new ResizeObserver(entries => {
    entries.forEach(entry => {
      console.log('width', entry.contentRect.width);
      console.log('height', entry.contentRect.height);
    });
  });
  
  const someEl = document.getElementById('hover-area');
  myObserver.observe(someEl);




// document.addEventListener('DOMContentLoaded', function() {
//     let resizer = new ResizeObserver(handleResize)
//     resizer.observe(document.querySelector('.main-container'))
// })

// function handleResize(entries) {
//     console.log('resize called')
//     console.log(entries[0])
// }


// let hoverSpaces = document.getElementsByClassName("hover-space")


// for (let space of hoverSpaces) {
//     let image = new Image()
//     image.src = space.dataset.src
//     image.className = "followMouse"

//     space.addEventListener("mouseover", function(event) {
//         console.log("mouseover")
//         document.getElementById("hover-area").append(image)
//         image.style.left = `${event.x - (image.width / 2)}px`
//         image.style.top = `${event.y - (image.height / 2)}px`
//         console.log(event.x)
//         console.log(event.y)
//     })

//     space.addEventListener("mouseout", function() {
//         image.remove()
//     })
// }

// window.addEventListener('mousemove', function(event) {
//     let image = document.querySelector('.followMouse');
//     if (image) {
//         image.style.left = `${event.x - (image.width / 2)}px`;
//         image.style.top = `${event.y - (image.height / 2)}px`;
//     }
// })